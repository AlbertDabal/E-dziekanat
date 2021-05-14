import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NewsTemplate from 'templates/NewsTemplate';

const NewsBig = ({ match }) => (
  <NewsTemplate>
    <h1>{match.params.id}</h1>
  </NewsTemplate>
);

export default NewsBig;

NewsBig.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};
