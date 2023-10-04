import { Character } from "@/app/types";
import Picture from "@/app/ui/Character/Picture";

export default function MainInfo({ data }: { data: Character }) {
  const { name, origin, species, status, gender, type } = data;

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

  const classes = {
    title: "text-2xl text-primary font-bold mt-4 mb-2 pb-2 border-b",
    infoBlock: "rounded-xl bg-wite",
  };

  return (
    <div className={classes.infoBlock}>
      <div className="sm:flex flex-column">
        <div>
          <Picture {...data} />
        </div>
        <div className="flex-1 sm:px-4">
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
  );
}
