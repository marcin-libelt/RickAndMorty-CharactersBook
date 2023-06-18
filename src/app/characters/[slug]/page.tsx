import { getClient } from "@/app/lib/apolloClient";
import { gql } from "@apollo/client";
import { Metadata } from "next";
import EpisodeList from "@/app/ui/Episode/List";
import Picture from "@/app/ui/Character/Picture";
import { Character } from "@/app/types/Character";

const query = gql`
  query Query($filter: FilterCharacter) {
    characters(filter: $filter) {
      info {
        count
      }
      results {
        id
        name
        status
        gender
        type
        species
        origin {
          name
        }
        image
        episode {
          id
          name
          air_date
          episode
        }
      }
    }
  }
`;

export default async function Page({
  params,
}: {
  params: { slug: string };
}): Promise<{}> {
  const { data } = await getClient().query({
    query,
    variables: {
      filter: {
        name: decodeURI(params.slug),
      },
    },
  });

  const character = data.characters.results[0];
  const { name, origin, species, status, gender, type, episode }: Character =
    character;

  const featuresMap = [
    {
      label: "Name",
      value: name,
    },
    {
      label: "Origin",
      value: origin.name,
    },
    {
      label: "Species",
      value: species,
    },
    {
      label: "Status",
      value: status,
    },
    {
      label: "Gender",
      value: gender,
    },
  ];

  function Section({
    labelby,
    children,
  }: {
    labelby: string;
    children: React.ReactNode;
  }) {
    return (
      <section aria-labelledby={labelby} className="mb-5">
        {children}
      </section>
    );
  }

  return (
    <>
      <Section labelby={"character-name"}>
        <div className={classes.infoBlock}>
          <div className="flex">
            <Picture {...character} additionalClasses={"rounded-xl"} />
            <div className="flex-1 px-4">
              <h1 id="character-name" className={classes.title}>
                {name}
                <span className="block text-sm text-gray-500 font-normal">
                  {type}
                </span>
              </h1>
              <dl className="grid grid-cols-2 text-sm">
                {featuresMap.map((feature) => (
                  <>
                    <dt>{feature.label}:</dt>
                    <dd>{feature.value}</dd>
                  </>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Section>
      <Section labelby="episodes-list">
        <h2 id="episodes-list" className="text-secondary">
          Episodes list
        </h2>
        <EpisodeList items={episode} />
      </Section>
    </>
  );
}

const classes = {
  title: "text-xl text-secondary font-bold mt-4 mb-2 pb-2 border-b",
  infoBlock: "rounded-xl bg-gray-200",
  container:
    "flex items-center justify-between rounded-lg w-full bg-gray-200 p-5 my-5",
};

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params

  return {
    title: decodeURI(params.slug),
    description: "",
  };
}
