import React from 'react';
import PropTypes from 'prop-types';

const DashboardTemplate = ({ children }) => (
  <div>
    <div>
      <h1>Test h1</h1>
      {children}
    </div>
  </div>
);

DashboardTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DashboardTemplate;
