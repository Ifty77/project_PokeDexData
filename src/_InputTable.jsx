import React, { useState, useEffect } from 'react';
import './_InputTable.css';
import { useHistory } from 'react-router-dom';

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
  const [search, setSearch] = useState('');
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login');
    }
    localStorage.setItem('pokemonData', JSON.stringify(data));
  }, [data, history]);

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

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((entry) => {
    const searchTerm = search.toLowerCase();
    const types = Object.keys(entry.type)
      .filter((type) => entry.type[type])
      .join(', ')
      .toLowerCase();
    return (
      entry.pokemon.toLowerCase().includes(searchTerm) ||
      types.includes(searchTerm) ||
      entry.number.includes(searchTerm)
    );
  });

  return (
    <div className="container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search by name, type, or number"
        value={search}
        onChange={handleSearchChange}
      />
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-row">
          <input
            type="text"
            name="pokemon"
            className="form-control"
            placeholder="Pokemon"
            value={inputs.pokemon}
            onChange={handleChange}
          />
          <input
            type="text"
            name="number"
            className="form-control"
            placeholder="Number"
            value={inputs.number}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="height"
            className="form-control"
            placeholder="Height"
            value={inputs.height}
            onChange={handleChange}
          />
          <input
            type="text"
            name="weight"
            className="form-control"
            placeholder="Weight"
            value={inputs.weight}
            onChange={handleChange}
          />
        </div>
        <div className="checkbox-container">
          <label>Type:</label>
          <div>
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
        </div>
        <div className="button-container">
          <button type="submit" className={editIndex !== null ? 'update' : 'submit'}>
            {editIndex !== null ? 'Update' : 'Submit'}
          </button>
        </div>
      </form>
      <div className="table-container">
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
            {filteredData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.pokemon}</td>
                <td>{Object.keys(entry.type).filter((type) => entry.type[type]).join(', ')}</td>
                <td>{entry.number}</td>
                <td>{entry.height}</td>
                <td>{entry.weight}</td>
                <td className="actions">
                  <button className="btn btn-secondary btn-sm" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default _InputTable;
