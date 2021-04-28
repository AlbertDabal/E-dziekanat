import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';

const Select = styled.select`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 0px 10px;
`;

const Wrapper = styled.div`
  margin-left: 10px;
  display: flex;
  margin-bottom: 25px;
`;

function SelectPlan({ TypePlan }) {
  const [dataSelect, setDataSelect] = useState(null);
  const [itemSelected, setItemSelected] = useState(null);
  const [roleSelected, setRoleSelected] = useState('student');

  useEffect(() => {
    if (roleSelected === 'student') {
      FetchSelectStudent();
    } else {
      FetchSelectTeacher();
      console.log(`ROLE:${roleSelected}`);
      console.log(`ITEM:${itemSelected}`);
      TypePlan(roleSelected, itemSelected);
    }
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
    TypePlan(roleSelected, res.data.IdDomyslne);
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

    setItemSelected(0);

    setDataSelect(res.data);
  }

  function handleChange(event) {
    setItemSelected(event.target.value);

    TypePlan(roleSelected, event.target.value);
  }

  function handleChangeRole(event) {
    setRoleSelected(event.target.value);
  }
  if (dataSelect !== null) {
    return (
      <Wrapper>
        <Heading>Rola:</Heading>
        <Select value={roleSelected} onChange={handleChangeRole}>
          <option value="student">Student</option>
          <option value="wykladowca">Wykładowca</option>
        </Select>
        <Heading>{roleSelected === 'wykladowca' ? 'Wykładowca:' : 'Grupa:'}</Heading>
        <Select value={itemSelected} onChange={handleChange} defaultValue={dataSelect.IdDomyslne}>
          {roleSelected === 'wykladowca' ? <option value={0}>-------------</option> : null}
          {dataSelect.dane.map((item) => (
            <option value={item.value}>{item.visible}</option>
          ))}
        </Select>
      </Wrapper>
    );
  }
  return null;
}

SelectPlan.propTypes = {
  TypePlan: PropTypes.func.isRequired,
};

export default SelectPlan;
