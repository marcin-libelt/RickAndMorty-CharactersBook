"use client";

import Image from "next/image";
import Button from "@/app/ui/Button";
import ChevronRight from "./../../../public/chevron-right.svg";
import ChevronLeft from "./../../../public/chevron-left.svg";
import ChevronBarRight from "./../../../public/chevron-bar-right.svg";
import ChevronBarLeft from "./../../../public/chevron-bar-left.svg";

import { useRouter } from "next/navigation";

export default function Pagination({
  pages,
  next,
  prev,
}: {
  pages?: number | null;
  next: number | null;
  prev: number | null;
}): JSX.Element {
  const router = useRouter();
  typeof ChevronRight;

  const current = prev ? prev + 1 : 1;

  return (
    <nav aria-label="pagination" className={classes.root}>
      <div className={classes.edge}>
        <Button
          label={"Go to first page"}
          value={"First"}
          onClick={() => router.push(`/?page=1`)}
          className={""}
          icon={<Image src={ChevronBarLeft} width={20} alt={""} />}
          iconPosition={"left"}
          disabled={prev === null}
        />
        <Button
          label={"Go to previous page"}
          value={"Prev"}
          onClick={() => router.push(`/?page=${prev}`)}
          className={""}
          icon={<Image src={ChevronLeft} width={20} alt={""} />}
          iconPosition={"left"}
          disabled={prev === null}
        />
      </div>

      <p aria-current="page" aria-label={`page ${current} from ${pages}`}>
        {current} / {pages}
      </p>

      <div className={classes.edge}>
        <Button
          label={"Go to next page"}
          value={"Next"}
          onClick={() => router.push(`/?page=${next}`)}
          className={""}
          icon={<Image src={ChevronRight} width={20} alt={""} />}
          iconPosition={"right"}
          disabled={next === null}
        />
        <Button
          label={"Go to last page"}
          value={"Last"}
          onClick={() => router.push(`/?page=${pages}`)}
          className={""}
          icon={<Image src={ChevronBarRight} width={20} alt={""} />}
          iconPosition={"right"}
          disabled={next === null}
        />
      </div>
    </nav>
  );
}

const classes = {
  root: "flex justify-between",
  edge: "flex gap-1",
};
