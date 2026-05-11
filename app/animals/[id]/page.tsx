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
    <article className="border border-grey-100 flex flex-col rounded gap-8">
      <h1 className="text-4xl font-bold">{animal.name}</h1>
      <p>{animal.longDescription}</p>
      <p>
        {animal.isFed
          ? `${animal.name} blev matad: ${new Date(animal.lastFed).toLocaleString()}`
          : `${animal.name} är inte matad ännu`}
      </p>
      <button
        onClick={feedAnimal}
        disabled={animal.isFed}
        className="bg-green-700 text-white font bold rounded disabled:bg-gray-400"
      >
        Klicka för att mata {animal.name}
      </button>
    </article>
  );
};

export default AnimalDetails;
