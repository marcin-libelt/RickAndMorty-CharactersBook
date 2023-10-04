import Logo from "../../../public/Rick_and_Morty-logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header className={classes.container}>
      <Link href={"/"} title="Back to homepage">
        <Image src={Logo} width={300} alt={""} priority={true} />
      </Link>
    </header>
  );
}

const classes = {
  container:
    "mx-auto lg:w-1/2 flex justify-start gap-3 items-end pb-5 my-5 border-b",
};
