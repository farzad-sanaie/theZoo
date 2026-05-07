"use client";

import { useParams } from "next/navigation";

const AnimalDetails = () => {
  const { id } = useParams;

  return <>AnimalDetails: {id}</>;
};

export default AnimalDetails;
