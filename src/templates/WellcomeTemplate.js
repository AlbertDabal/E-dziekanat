import React from 'react';
import PropTypes from 'prop-types';

const WellcomeTemplate = ({ children }) => (
  <div>
    <div>{children}</div>
  </div>
);

WellcomeTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WellcomeTemplate;
