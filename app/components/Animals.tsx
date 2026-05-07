import { Animal } from "../models/Animal";

type AnimalProps = {
  animals: Animal[];
};

export const Animals = ({ animals }: AnimalsProps) => {
  return (
    <section>
      {animals.map((animal) => (
        <article key={animal.id}>
          <h2>{animal.name}</h2>
        </article>
      ))}
    </section>
  );
};