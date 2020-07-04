import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            id={pet.id}
            name={pet.name}
            key={pet.id}
            breed={pet.breeds.primary}
            animal={pet.type}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
