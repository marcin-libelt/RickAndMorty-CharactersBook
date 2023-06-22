export default function useTabs(
  group: { [key: string]: object | any },
  renderer: any
) {
  const list: string[] = [],
    panels: JSX.Element[] = [];

  Object.keys(group).map((key) => {
    list.push(key);
    panels.push(group[key].map(renderer));
  });

  return {
    list,
    panels,
  };
}
