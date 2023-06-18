import { getClient } from "./lib/apolloClient";
import { gql } from "@apollo/client";
import type { Character } from "./types/Character";
import Image from "next/image";
import Link from "next/link";
import Picture from "./ui/Character/Picture";

const query = gql`
  query Query($page: Int) {
    characters(page: $page) {
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

export default async function Page(): Promise<{}> {
  const { data } = await getClient().query({
    query,
    variables: {
      page: 1,
    },
  });

  return (
    <section>
      <ul className={classes.list}>
        {data.characters.results.map((elem: Character) => (
          <li className="relative" key={elem.id}>
            <Picture {...elem} />
            <Link
              href={`/characters/${elem.name}`}
              className={"absolute bottom-0 text-sm rounded-sm"}
            >
              <h2 className={classes.label}>{elem.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

const classes = {
  label: "bg-white px-3 rounded-sm lg:rounded-lg xl:rounded-xl",
  list: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3",
};
