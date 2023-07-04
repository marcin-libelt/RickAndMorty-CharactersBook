import { getClient } from "@/app/lib/apolloClient";
import { gql } from "@apollo/client";
import { Metadata } from "next";
import EpisodeList from "@/app/ui/Episode/List";
import MainInfo from "@/app/ui/Character/MainInfo";
import Section from "@/app/ui/Section";

const GET_CHARACTER_BY_NAME = gql`
  query Query($characterId: ID!) {
    character(id: $characterId) {
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
`;

export default async function Page({
  params,
}: {
  params: { characterId: string; name: string };
}): Promise<{}> {
  const { data } = await getClient().query({
    query: GET_CHARACTER_BY_NAME,
    variables: {
      characterId: params.characterId,
    },
  });

  const character = data.character;

  return (
    <>
      <Section labelby="character-name">
        <MainInfo data={character} />
      </Section>
      <Section labelby="episodes-list" hLevel={2} title="Episodes list">
        <EpisodeList items={character.episode} />
      </Section>
    </>
  );
}

interface Props {
  params: { characterId: string; name: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: decodeURI(params.name),
    description: "",
  };
}
