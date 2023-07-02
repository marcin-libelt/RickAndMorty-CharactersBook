export default function useTabs(group: { [key: string]: object | any }) {
  const list: string[] = [],
    panels: object[] = [];

  Object.keys(group).map((key) => {
    list.push(key);
    panels.push(group[key]);
  });

  return {
    list,
    panels,
  };
}
