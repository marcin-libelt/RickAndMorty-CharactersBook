export default function Footer(): JSX.Element {
  return (
    <>
      <footer className={classes.container}>
        <p>
          GitHub:{" "}
          <a href="https://github.com/marcin-libelt" className="text-primary">
            https://github.com/marcin-libelt
          </a>
        </p>
        <p className={classes.text}>
          Copyright &copy; Marcin Libelt {new Date().getFullYear()}
        </p>
      </footer>

      <div className={"mx-auto lg:w-1/2"}>
        <p className="text-emerald-500">Lorem ipsum</p>
        <p className="text-primary-lighter">Lorem ipsum</p>
        <p className="text-primary">Lorem ipsum</p>
        <p className="text-secondary">Lorem ipsum</p>
        <p className="text-secondary-lighter">Lorem ipsum</p>
      </div>
    </>
  );
}

const classes = {
  text: "text-gray-300 text-secondary",
  container: "mx-auto lg:w-1/2 flex justify-between text-sm pt-5 my-5 border-t",
};
