import { Animal } from "../models/Animal";
import { get } from "./serviceBase";

const BASE_URL = "https://animals.azurewebsites.net/api/animals";
const ANIMALS_LS_KEY = "animals";

export const getAnimals = async () => {
  const animalsFromLocalStorage = localStorage.getItem(ANIMALS_LS_KEY);

  if (animalsFromLocalStorage) {
    return JSON.parse(animalsFromLocalStorage) as Animal[];
  }

  const animals = await get<Animal[]>(BASE_URL);
  localStorage.setItem(ANIMALS_LS_KEY, JSON.stringify(animals));
  return animals;
};

export const saveAnimalsToLocalStorage = (animals: Animal[]) => {
  localStorage.setItem(ANIMALS_LS_KEY, JSON.stringify(animals));
};
