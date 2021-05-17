/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import { SetSelect, SetSelectDefault } from 'api/FetchPlan';
import { nanoid } from 'nanoid';

const Select = styled.select`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 0px 30px 0 20px;
`;

const Wrapper = styled.div`
  margin-left: 10px;
  display: flex;
  margin-bottom: 25px;
`;

function SelectPlan({ TypePlan }) {
  const [dataSelect, setDataSelect] = useState(null);
  const [itemSelected, setItemSelected] = useState(null);
  const [roleSelected, setRoleSelected] = useState(sessionStorage.getItem('Kod_roli'));

  useEffect(() => {
    FetchSelectDefult();
  }, []);

  async function FetchSelectDefult() {
    const res = await SetSelectDefault();
    try {
      setItemSelected(res.data.IdDomyslne);
      setDataSelect(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function FetchSelect() {
    const res = await SetSelect(roleSelected);
    try {
      setItemSelected(0);
      setDataSelect(res.data);
      TypePlan(roleSelected, itemSelected);
    } catch (err) {
      console.log(err);
    }
  }

  function handleChange(event) {
    setItemSelected(event.target.value);
    TypePlan(roleSelected, event.target.value);
  }

  function handleChangeRole(event) {
    setRoleSelected(event.target.value);
    console.log(event.target.value);
    FetchSelect();
    TypePlan(event.target.value, itemSelected);
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
            <option value={item.value} key={nanoid()}>
              {item.visible}
            </option>
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
