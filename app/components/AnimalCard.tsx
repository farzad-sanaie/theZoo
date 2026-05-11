import Link from "next/link";
import { Animal } from "../models/Animal";

type AnimalCardProps = {
  animal: Animal;
};

export const AminalCard = ({ animal }: AnimalCardProps) => {
  return (
    <>
      <article className="border border-gray-400 flex flex-col gap-3 p-4 rounded">
        <h2 className="text-2xl font bold">{animal.name}</h2>
        <p>{animal.shortDescription}</p>
        <Link className="font-bold text-blue-800" href={`/animals/${animal.id}`}>Läs mer</Link>
      </article>
    </>
  );
};
