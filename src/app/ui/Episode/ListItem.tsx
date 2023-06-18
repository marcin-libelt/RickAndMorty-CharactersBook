import { Episode } from "@/app/types/Character";

export default function ({ episode, name, air_date }: Episode) {
  return (
    <li className="flex justify-between hover:bg-gray-100">
      <div>
        {episode.replace(/^(S\d{2}E)/, "e")} {name}
      </div>
      <div>{air_date}</div>
    </li>
  );
}
