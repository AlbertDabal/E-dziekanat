/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import { nanoid } from 'nanoid';
import Button from 'components/atoms/Button/Button';

const Select = styled.select`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 0px 30px 0 20px;
  border-radius: 30px;
  padding: 5px 10px;
  outline: none;
`;

const Wrapper = styled.div`
  margin-top: 0px;
  margin-left: 10px;
  display: flex;
  margin-bottom: 25px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledButton = styled(Button)`
  height: 40px;
  cursor: pointer;
  margin-right: 30px;
  text-transform: uppercase;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div``;

function SelectPlan({ TypePlan, dataSelect, FetchSelect, itemSelected, setItemSelected, NextDay, PrevDay }) {
  const [roleSelected, setRoleSelected] = useState(sessionStorage.getItem('Kod_roli'));

  function handleChange(event) {
    setItemSelected(event.target.value);
    TypePlan(roleSelected, event.target.value);
  }

  function handleChangeRole(event) {
    setRoleSelected(event.target.value);
    FetchSelect(event.target.value);
  }
  if (dataSelect) {
    return (
      <Wrapper>
        <StyledButton style={{ backgroundColor: '#457B9D' }} onClick={() => PrevDay(roleSelected)}>
          Poprzedni
        </StyledButton>
        <Left>
          <Heading>Rola</Heading>
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
        </Left>
        <Right>
          <StyledButton onClick={() => NextDay(roleSelected)}>Następny</StyledButton>
        </Right>
      </Wrapper>
    );
  }
  return null;
}

SelectPlan.propTypes = {
  TypePlan: PropTypes.func.isRequired,
  setItemSelected: PropTypes.func.isRequired,
  dataSelect: PropTypes.element.isRequired,
  itemSelected: PropTypes.element.isRequired,
  FetchSelect: PropTypes.func.isRequired,
  NextDay: PropTypes.func.isRequired,
  PrevDay: PropTypes.func.isRequired,
};

export default SelectPlan;
