import { Animal } from "../models/Animal";
import { AminalCard } from "./AnimalCard";

type AnimalProps = {
  animals: Animal[];
};

export const Animals = ({ animals }: AnimalProps) => {
  return (
    <section>
      {animals.map((animal) => (
        <article key={animal.id}>
          <AminalCard animal={animal} key={animal.id} />
        </article>
      ))}
    </section>
  );
};
