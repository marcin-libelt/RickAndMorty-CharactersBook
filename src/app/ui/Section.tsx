export default function Section({
  labelby,
  hLevel = 4,
  title,
  children,
}: {
  labelby: string;
  hLevel?: number;
  title?: string;
  children: React.ReactNode;
}) {
  const HeadingTag = `h${hLevel}` as keyof JSX.IntrinsicElements;

  return (
    <section aria-labelledby={labelby} className="mb-5">
      {title ? (
        <HeadingTag id={labelby} className="text-secondary">
          {title}
        </HeadingTag>
      ) : null}
      {children}
    </section>
  );
}
