"use client";

import { Episode } from "@/app/types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import useTabs from "@/app/hooks/useTabs";
import { groupBy } from "@/app/lib/helpers";
import List from "@/app/ui/List";
import AlertBar from "@/app/ui/AlertBar";
import Button from "../Button";
import { useState } from "react";

// workaround for 'match' method typescipt issue
type ItemEpisode = Episode & {
  match: any;
};

export default function EpisodesTabs({ items }: any): JSX.Element {
  const [activeTab, setActiveTab] = useState(0);

  const groupedEpisodes = groupBy(items, (item: ItemEpisode) => {
    // "S01E09" => ["S01E09", "01", "09"] regexp
    const result: RegExpMatchArray | null =
      item.episode.match(/^S(\d{2})E(\d{2})$/);
    if (result) {
      return `Season ${result[1].replace(/^0+(?!\.|$)/, "")}`;
    }
  });

  const { list, panels } = useTabs(groupedEpisodes);

  const rendererItem = ({ episode, name, air_date }: Episode): JSX.Element => (
    <>
      <div className="flex justify-between hover:bg-gray-100">
        {episode.replace(/^(S\d{2}E)/, "e")} {name}
      </div>
      <div>{air_date}</div>
    </>
  );

  return (
    <Tabs onSelect={setActiveTab}>
      <TabList className={"flex my-5 gap-2"}>
        {list.map((name, index) => (
          <Tab key={index}>
            <Button
              value={name}
              label={name}
              className={
                activeTab === index ? "text-red-800" : "text-secondary"
              }
            />
            {/* TODO: should be <h3></h3> */}
          </Tab>
        ))}
      </TabList>
      {panels.map((panel, index) => (
        <TabPanel key={index}>
          <div className="flex justify-between text-xs text-gray">
            <div className="text-primary">Episode title</div>
            <div>Air date</div>
          </div>
          <List
            data={panel}
            rendererItem={rendererItem}
            renderEmpty={<AlertBar message="No episode found" />}
            itemClassName={"flex justify-between hover:bg-gray-100"}
          />
        </TabPanel>
      ))}
    </Tabs>
  );
}
