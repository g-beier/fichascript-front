"use client";
import { useEffect, useState } from "react";
import { OriginCard } from "@/components/OriginCard";

export const OriginContainer = () => {
  const [origins, setOrigins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/origins")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((origins) => setOrigins(origins))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {origins.map((origin, index) => (
        <OriginCard origin={origin} key={index} />
      ))}
    </>
  );
};
