import { getClient } from "./lib/apolloClient";
import { gql } from "@apollo/client";
import { Character } from "./types";
import Link from "next/link";
import Picture from "./ui/Character/Picture";
import Pagination from "./ui/Pagination";
import List from "./ui/List";
import { Suspense } from "react";

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

  const rendererItem = function (elem: Character): JSX.Element {
    return (
      <div className="relative">
        <Picture {...elem} />
        <Link
          href={`/characters/${elem.name.replace(/\s/g, "-")}`}
          className={"absolute bottom-0 text-sm rounded-sm"}
        >
          <h2 className={classes.label}>{elem.name}</h2>
        </Link>
      </div>
    );
  };

  return (
    <>
      <Pagination
        pages={data.characters.info.pages}
        next={data.characters.info.next}
        prev={data.characters.info.prev}
      />

      <section>
        <Suspense>
          <List
            data={data.characters.results}
            rendererItem={rendererItem}
            renderEmpty={<p>{"List is empty."}</p>}
            className={classes.list}
          />
        </Suspense>
      </section>

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
