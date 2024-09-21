/*import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './detailspage.css'; // Create this CSS file for styling

const DetailsPage = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem('pokemonData');
    if (savedData) {
      const data = JSON.parse(savedData);
      if (data[index]) {
        setPokemon(data[index]);
      } else {
        // If no Pokémon found at this index, redirect or show an error
        alert('Pokémon not found');
        navigate('/');
      }
    } else {
      // If no data in localStorage, redirect or show an error
      alert('No Pokémon data available');
      navigate('/');
    }
  }, [index, navigate]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const { pokemon: name, type, number, height, weight } = pokemon;

  return (
    <div className="details-container">
      <button onClick={() => navigate(-1)} className="back-button">
        &larr; Back
      </button>
      <h2>{name} Details</h2>
      <div className="details-content">
        <div className="details-image">
          {/* Optionally, you can include an image based on the Pokémon name or number }
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`}
            alt={name}
          />
        </div>
        <div className="details-info">
          <p><strong>Number:</strong> {number}</p>
          <p><strong>Type:</strong> {Object.keys(type).filter(t => type[t]).join(', ')}</p>
          <p><strong>Height:</strong> {height}</p>
          <p><strong>Weight:</strong> {weight}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
*/