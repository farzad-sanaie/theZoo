"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Animal } from "../../models/Animal";
import { getAnimals, saveAnimalsToLocalStorage } from "../../services/animalService";

const AnimalDetails = () => {
  const { id } = useParams();
  const [animals, setAnimals] = useState<Animal[]>([]);
  const animal = animals.find((animal) => animal.id === Number(id));

  useEffect(() => {
    const getData = async () => {
      const animalsFromStorage = await getAnimals();
      setAnimals(animalsFromStorage);
    };

    if (animals.length > 0) return;

    getData();
  });

  const feedAnimal = () => {
    if (!animal) return;

    const updatedAnimal = {
      ...animal,
      isFed: true,
      lastFed: new Date().toISOString(),
    };

    const updatedAnimals = animals.map((animalInList) => {
      if (animalInList.id === animal.id) {
        return updatedAnimal;
      }

      return animalInList;
    });

    setAnimals(updatedAnimals);
    saveAnimalsToLocalStorage(updatedAnimals);
  };

  if (!animal) {
    return <p>Laddar djur...</p>;
  }

  return (
    <article>
      <h1>{animal.name}</h1>
      <p>{animal.longDescription}</p>
      <p>
        {animal.isFed
          ? `Matad: ${new Date(animal.lastFed).toLocaleString()}`
          : "Inte matad ännu"}
      </p>
      <button
        onClick={feedAnimal}
        disabled={animal.isFed}
      >
        Mata djur
      </button>
    </article>
  );
};

export default AnimalDetails;
