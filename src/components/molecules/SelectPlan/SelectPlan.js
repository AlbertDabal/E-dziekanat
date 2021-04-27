import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function SelectPlan({ TypePlan }) {
  const [dataSelect, setDataSelect] = useState(null);
  const [itemSelected, setItemSelected] = useState(null);
  const [roleSelected, setRoleSelected] = useState('student');

  useEffect(() => {
    if (roleSelected === 'student') {
      FetchSelectStudent();
    } else {
      FetchSelectTeacher();
    }

    TypePlan(roleSelected, itemSelected);
  }, [roleSelected]);

  async function FetchSelectStudent() {
    const res = await axios
      .post('http://178.43.155.21/api/plan/wypelnij_combobox_domyslnie', {
        Id_uzytkownika: 2,
        Kod_roli: 'student',
      })
      .catch((error) => {
        console.log(error);
      });

    setItemSelected(res.data.IdDomyslne);
    setDataSelect(res.data);
  }

  async function FetchSelectTeacher() {
    const res = await axios
      .post('http://178.43.155.21/api/plan/wypelnij_combobox', {
        Id_uzytkownika: 2,
        Kod_roli: 'student',
        KodPlanu: 'wykladowca',
      })
      .catch((error) => {
        console.log(error);
      });

    setDataSelect(res.data);
  }

  const handleChange = (event) => {
    setItemSelected(event.target.value);
  };

  const handleChangeRole = (event) => {
    setRoleSelected(event.target.value);
  };
  if (dataSelect !== null) {
    return (
      <div>
        <select value={roleSelected} onChange={handleChangeRole}>
          <option value="student">Student</option>
          <option value="wykładowca">Wykładowca</option>
        </select>
        <select value={itemSelected} onChange={handleChange}>
          {dataSelect.dane.map((item) => (
            <option value={item.value}>{item.visible}</option>
          ))}
        </select>
      </div>
    );
  }
  return null;
}

SelectPlan.propTypes = {
  TypePlan: PropTypes.func.isRequired,
};

export default SelectPlan;
