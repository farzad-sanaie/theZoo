import Link from "next/link";
import { Animal } from "../models/Animal";

type AnimalCardProps = {
  animal: Animal;
};

export const AminalCard = ({ animal }: AnimalCardProps) => {
  return (
    <>
      <article>
        <h2>{animal.name}</h2>
        <p>{animal.shortDescription}</p>
        <Link href={`/animal/${animal.id}`}>Läs mer</Link>
      </article>
    </>
  );
};
