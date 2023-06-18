import { Character } from "@/app/types/Character";
import Image from "next/image";

export default function Picture({ image, name }: Character) {
  return (
    <Image
      src={image}
      width={200}
      height={200}
      alt={name}
      className="ratio-[1/1] rounded-xl object-cover w-auto h-auto"
    />
  );
}
