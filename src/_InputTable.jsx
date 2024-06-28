import React, { useState, useEffect } from 'react';

const _InputTable = () => {
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

  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('pokemonData');
    return savedData ? JSON.parse(savedData) : [];
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('pokemonData', JSON.stringify(data));
  }, [data]);

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
    if (editIndex !== null) {
      setData((prevData) =>
        prevData.map((item, index) => (index === editIndex ? inputs : item))
      );
      setEditIndex(null);
    } else {
      setData((prevData) => [...prevData, inputs]);
    }
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

  const handleEdit = (index) => {
    setInputs(data[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
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
          {[
            'Fire',
            'Water',
            'Grass',
            'Electric',
            'Ice',
            'Flying',
            'Psychic',
            'Ghost',
            'Fighting',
            'Poison'
          ].map((type) => (
            <label key={type}>
              <input
                type="checkbox"
                name={type}
                checked={inputs.type[type]}
                onChange={handleChange}
              />{' '}
              {type}
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
        <button type="submit">{editIndex !== null ? 'Update' : 'Submit'}</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Pokemon</th>
            <th>Type</th>
            <th>Number</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.pokemon}</td>
              <td>{Object.keys(entry.type).filter((type) => entry.type[type]).join(', ')}</td>
              <td>{entry.number}</td>
              <td>{entry.height}</td>
              <td>{entry.weight}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default _InputTable;
