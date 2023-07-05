import { getClient } from "./lib/apolloClient";
import { gql } from "@apollo/client";
import { Character } from "./types";
import Link from "next/link";
import Picture from "./ui/Character/Picture";
import Pagination from "./ui/Pagination";
import List from "@/app/ui/List";
import AlertBar from "./ui/AlertBar";
import Section from "./ui/Section";

const query = gql`
  query Query($page: Int) {
    characters(page: $page) {
      info {
        pages
        prev
        next
      }
      results {
        name
        image
        id
        episode {
          name
        }
      }
    }
  }
`;

export default async function Page({
  searchParams,
}: {
  searchParams: { page: string };
}): Promise<{}> {
  const page = parseInt(searchParams.page);

  const { data } = await getClient().query({
    query,
    variables: {
      page,
    },
  });

  const rendererItem = (elem: Character): JSX.Element => (
    <div className="relative">
      <Picture {...elem} />
      <Link
        href={`/characters/${elem.id}/${elem.name}`}
        className={"absolute bottom-0 text-sm rounded-sm"}
      >
        <h2 className={classes.label}>{elem.name}</h2>
      </Link>
    </div>
  );

  return (
    <>
      <Pagination
        pages={data.characters.info.pages}
        next={data.characters.info.next}
        prev={data.characters.info.prev}
      />

      <Section labelby="characters-list">
        <List
          data={data.characters.results}
          rendererItem={rendererItem}
          renderEmpty={<AlertBar message="No Characters found" />}
          rootClassName={classes.list}
        />
      </Section>

      <Pagination
        pages={data.characters.info.pages}
        next={data.characters.info.next}
        prev={data.characters.info.prev}
      />
    </>
  );
}

const classes = {
  label: "bg-white px-3 rounded-sm lg:rounded-lg xl:rounded-xl",
  list: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3",
  listNav: "flex justify-between",
};
