"use client";

import { Episode } from "@/app/types/Character";
import ListItem from "./ListItem";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import useTabs from "@/app/hooks/useTabs";
import { groupBy } from "../../lib/helpers";

// workaround for 'match' method typescipt issue
type ItemEpisode = Episode & {
  match: any;
};

export default function List({ items }: any): JSX.Element {
  const groupedEpisodes = groupBy(items, (item: ItemEpisode) => {
    // "S01E09" => ["S01E09", "01", "09"] regexp
    const result: RegExpMatchArray | null =
      item.episode.match(/^S(\d{2})E(\d{2})$/);
    if (result) {
      return `Season ${result[1].replace(/^0+(?!\.|$)/, "")}`;
    }
  });

  const renderer = (item: Episode): JSX.Element => <ListItem {...item} />;
  const { list, panels } = useTabs(groupedEpisodes, renderer);

  return (
    <>
      <Tabs selectedTabClassName={"bg-black text-white"}>
        <TabList className={"flex border-b border-l mb-5"}>
          {list.map((tab, index) => (
            <Tab className={"p-3 border border-b-0 border-l-0 cursor-pointer"}>
              <h3>{tab}</h3>
            </Tab>
          ))}
        </TabList>
        {panels.map((panel, index) => (
          <TabPanel key={index}>
            <div className="flex justify-between text-xs text-gray">
              <div>Episode title</div>
              <div>Air date</div>
            </div>
            <ul>{panel}</ul>
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
}
