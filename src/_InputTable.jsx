import React, { useState, useEffect } from 'react';

const InputTable = () => {
  const [inputs, setInputs] = useState({
    pokemon: '',
    type: {
      Fire: false,
      Water: false,
      Grass: false,
      Electric: false,
      Ice: false,
      Flying: false,
      Psychic: false,
      Ghost: false,
      Fighting: false,
      Poison: false
    },
    number: '',
    height: '',
    weight: ''
  });

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setInputs((prevInputs) => ({
        ...prevInputs,
        type: {
          ...prevInputs.type,
          [name]: checked
        }
      }));
    } else {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => [...prevData, inputs]);
    setInputs({
      pokemon: '',
      type: {
        Fire: false,
        Water: false,
        Grass: false,
        Electric: false,
        Ice: false,
        Flying: false,
        Psychic: false,
        Ghost: false,
        Fighting: false,
        Poison: false
      },
      number: '',
      height: '',
      weight: ''
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="pokemon"
          placeholder="Pokemon"
          value={inputs.pokemon}
          onChange={handleChange}
        />
        
        <div>
          <label>Type:</label>
          {['Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Flying', 'Psychic', 'Ghost', 'Fighting', 'Poison'].map((type) => (
            <label key={type}>
              <input
                type="checkbox"
                name={type}
                checked={inputs.type[type]}
                onChange={handleChange}
              /> {type}
            </label>
          ))}
        </div>

        <input
          type="text"
          name="number"
          placeholder="Number"
          value={inputs.number}
          onChange={handleChange}
        />
        <input
          type="text"
          name="height"
          placeholder="Height"
          value={inputs.height}
          onChange={handleChange}
        />
        <input
          type="text"
          name="weight"
          placeholder="Weight"
          value={inputs.weight}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Pokemon</th>
            <th>Type</th>
            <th>Number</th>
            <th>Height</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.pokemon}</td>
              <td>{Object.keys(entry.type).filter(type => entry.type[type]).join(', ')}</td>
              <td>{entry.number}</td>
              <td>{entry.height}</td>
              <td>{entry.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default _InputTable;
