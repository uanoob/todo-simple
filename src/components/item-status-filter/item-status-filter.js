import React from 'react';
import PropTypes from 'prop-types';

import './item-status-filter.css';

const ItemStatusFilter = ({ onStatusFilter, active }) => (
  <div className="btn-group">
    <button
      type="button"
      className={`btn btn-outline-info ${active === 'all' ? 'active' : ''}`}
      aria-pressed="true"
      onClick={() => onStatusFilter('all')}
    >
      All
    </button>
    <button
      type="button"
      className={`btn btn-outline-info ${active === 'active' ? 'active' : ''}`}
      onClick={() => onStatusFilter('active')}
    >
      Active
    </button>
    <button
      type="button"
      className={`btn btn-outline-info ${active === 'done' ? 'active' : ''}`}
      onClick={() => onStatusFilter('done')}
    >
      Done
    </button>
  </div>
);

ItemStatusFilter.propTypes = {
  onStatusFilter: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};

export default ItemStatusFilter;
