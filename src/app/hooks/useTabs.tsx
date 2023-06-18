export default function useTabs(group: {}, renderer: object) {
  const list: string[] = [],
    panels: object[] = [];

  Object.keys(group).map((key) => {
    list.push(key);
    panels.push(group[key].map(renderer));
  });

  return {
    list,
    panels,
  };
}
