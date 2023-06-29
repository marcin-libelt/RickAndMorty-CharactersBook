interface List {
  data: object[];
  rendererItem: Function;
  renderEmpty: JSX.Element;
  className?: string;
}

export default function List({
  data = [],
  rendererItem,
  renderEmpty,
  className,
}: List): JSX.Element {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul className={className}>
      {data.map((item, index) => (
        <li key={index}>{rendererItem(item)}</li>
      ))}
    </ul>
  );
}
