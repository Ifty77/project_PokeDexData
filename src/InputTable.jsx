import React, { useState } from 'react';

const InputTable = () => {
  const [inputs, setInputs] = useState({
    name: '',
    class: '',
    roll: '',
    gender: '',
    bloodGroup: '',
    nationality: '',
    religion: ''
  });

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => [...prevData, inputs]);
    setInputs({
      name: '',
      class: '',
      roll: '',
      gender: '',
      bloodGroup: '',
      nationality: '',
      religion: ''
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="class"
          placeholder="Class"
          value={inputs.class}
          onChange={handleChange}
        />
        <input
          type="text"
          name="roll"
          placeholder="Roll"
          value={inputs.roll}
          onChange={handleChange}
        />
        
        <div>
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={inputs.gender === 'Male'}
            onChange={handleChange}
          /> Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={inputs.gender === 'Female'}
            onChange={handleChange}
          /> Female
        </div>

        <div>
          <label>Blood Group:</label>
          <input
            type="radio"
            name="bloodGroup"
            value="A"
            checked={inputs.bloodGroup === 'A'}
            onChange={handleChange}
          /> A
          <input
            type="radio"
            name="bloodGroup"
            value="B"
            checked={inputs.bloodGroup === 'B'}
            onChange={handleChange}
          /> B
          <input
            type="radio"
            name="bloodGroup"
            value="AB"
            checked={inputs.bloodGroup === 'AB'}
            onChange={handleChange}
          /> AB
          <input
            type="radio"
            name="bloodGroup"
            value="O"
            checked={inputs.bloodGroup === 'O'}
            onChange={handleChange}
          /> O
        </div>

        <div>
          <label>Nationality:</label>
          <input
            type="radio"
            name="nationality"
            value="American"
            checked={inputs.nationality === 'American'}
            onChange={handleChange}
          /> American
          <input
            type="radio"
            name="nationality"
            value="Canadian"
            checked={inputs.nationality === 'Canadian'}
            onChange={handleChange}
          /> Canadian
          <input
            type="radio"
            name="nationality"
            value="Other"
            checked={inputs.nationality === 'Other'}
            onChange={handleChange}
          /> Other
        </div>

        <div>
          <label>Religion:</label>
          <input
            type="radio"
            name="religion"
            value="Christianity"
            checked={inputs.religion === 'Christianity'}
            onChange={handleChange}
          /> Christianity
          <input
            type="radio"
            name="religion"
            value="Islam"
            checked={inputs.religion === 'Islam'}
            onChange={handleChange}
          /> Islam
          <input
            type="radio"
            name="religion"
            value="Hinduism"
            checked={inputs.religion === 'Hinduism'}
            onChange={handleChange}
          /> Hinduism
          <input
            type="radio"
            name="religion"
            value="Other"
            checked={inputs.religion === 'Other'}
            onChange={handleChange}
          /> Other
        </div>

        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Roll</th>
            <th>Gender</th>
            <th>Blood Group</th>
            <th>Nationality</th>
            <th>Religion</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.class}</td>
              <td>{entry.roll}</td>
              <td>{entry.gender}</td>
              <td>{entry.bloodGroup}</td>
              <td>{entry.nationality}</td>
              <td>{entry.religion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InputTable;

