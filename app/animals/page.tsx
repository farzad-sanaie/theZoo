"use client";

import { useEffect, useState } from "react";
import { getAnimals } from "../services/animalService";
import { Animal } from "../models/Animal";

export default function AnimalPage() {
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAnimals();
      setAnimals(data);
    };
    getData();
  });

  return (
    <>
      <h1>Våra djur</h1>
      <div>{animals.length}</div>
    </>
  );
}
