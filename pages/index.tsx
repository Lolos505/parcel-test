import styles from "../styles/Home.module.css";
import Card from "@/components/Card";
import React, { useEffect, useState } from "react";

interface House {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
}

export default function Home() {
  const [houses, setHouses] = useState<House[]>([]);

  useEffect(() => {
    // fetch("http://localhost:8080/houses") uncomment this line and comment bellow line to check app in localhost
    fetch("https://parcel-test-green.vercel.app/houses")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Check the fetched data
        setHouses(data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <main className={styles.main}>
      <div>
        <h1>Welcome to Hogwarts houses!</h1>
        {houses.map((house) => (
          <Card
            key={house.id}
            name={house.name}
            houseColours={house.houseColours}
            founder={house.founder}
            animal={house.animal}
          />
        ))}
      </div>
    </main>
  );
}
