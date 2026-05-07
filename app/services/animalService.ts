import { Animal } from "../models/Animal";
import { get } from "./serviceBase";

const BASE_URL = "https://animals.azurewebsites.net/api/animals";

export const getAnimal = async () => {
  const animals = await get<Animal[]>(BASE_URL);

  return animals;
};
