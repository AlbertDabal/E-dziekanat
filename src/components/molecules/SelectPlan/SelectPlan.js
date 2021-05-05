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
  const [roleSelected, setRoleSelected] = useState('student');

  useEffect(() => {
    if (roleSelected === 'student') {
      FetchSelectStudent();
    } else {
      FetchSelectTeacher();
      TypePlan(roleSelected, itemSelected);
    }
  }, [roleSelected]);

  async function FetchSelectStudent() {
    const res = await SetSelectDefault();

    setItemSelected(res.data.IdDomyslne);
    setDataSelect(res.data);
    TypePlan(roleSelected, res.data.IdDomyslne);
  }

  async function FetchSelectTeacher() {
    const res = await SetSelect();

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
