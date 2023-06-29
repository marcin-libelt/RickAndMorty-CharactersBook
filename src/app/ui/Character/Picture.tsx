import { Character } from "@/app/types";
import Image from "next/image";

export default function Picture({ image, name }: Character) {
  const base64png = `data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TtSKVDnYQdchQHcSCqIijVqEIFUqt0KqDyaVf0KQhSXFxFFwLDn4sVh1cnHV1cBUEwQ8QVxcnRRcp8X9JoUWMB8f9eHfvcfcOEOplppod44CqWUYqHhMz2VUx8IouDCKEUfglZupzyWQCnuPrHj6+3kV5lve5P0evkjMZ4BOJZ5luWMQbxNObls55nzjMipJCfE48ZtAFiR+5Lrv8xrngsMAzw0Y6NU8cJhYLbSy3MSsaKvEUcURRNcoXMi4rnLc4q+Uqa96TvzCY01aWuU5zCHEsYglJiJBRRQllWIjSqpFiIkX7MQ//gONPkksmVwmMHAuoQIXk+MH/4He3Zn5ywk0KxoDOF9v+GAYCu0CjZtvfx7bdOAH8z8CV1vJX6sDMJ+m1lhY5AkLbwMV1S5P3gMsdoP9JlwzJkfw0hXweeD+jb8oCfbdAz5rbW3Mfpw9AmrpK3AAHh8BIgbLXPd7d3d7bv2ea/f0AWn9ynSXO27IAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfnBhsPKyyAOXITAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAABdJREFUCNdj+B8k/n/rWob/W9b8DxIHADd3B5HcHHTrAAAAAElFTkSuQmCC`;

  return (
    <Image
      src={image}
      width={200}
      height={200}
      placeholder={"blur"}
      blurDataURL={base64png}
      alt={name}
      className="ratio-[1/1] rounded-xl object-cover w-auto h-auto"
    />
  );
}
