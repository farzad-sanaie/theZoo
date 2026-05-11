import { Animal } from "../models/Animal";
import { AminalCard } from "./AnimalCard";

type AnimalProps = {
  animals: Animal[];
};

export const Animals = ({ animals }: AnimalProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {animals.map((animal) => (
        <article key={animal.id}>
          <AminalCard animal={animal} key={animal.id} />
        </article>
      ))}
    </section>
  );
};
