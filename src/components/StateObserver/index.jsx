/*
 *  @author Serhii Kondrashov <garphild@garphild.pro>
 *  @copyright  2020 Serhii Kondrashov
 */

import React from 'react';
import PropTypes from 'prop-types';
import './StateObserver.scss';

function StateObserver(props) {
  const {
    state,
    onChange,
  } = props;
  return (
    <div className="testPannel">
      <div className="table-container" role="table" aria-label="Destinations">
        <div className="flex-table header" role="rowgroup">
          <div className="flex-row first" role="columnheader">Name</div>
          <div className="flex-row" role="columnheader">Value</div>
        </div>
        {Object.keys(state).map((v) => (
          <div className="flex-table row" role="rowgroup">
            <div className="flex-row first" role="cell">
              <div>{v}</div>
            </div>
            <div className="flex-row" role="cell">
              <div>
                {
                  (typeof state[v] === 'string'
                    || typeof state[v] === 'number')
                  && (
                    <input
                      className="reset"
                      value={state[v]}
                      onInput={(e) => {
                        const { value } = e.target;
                        onChange(v, value);
                      }}
                    />
                  )
                }
                {typeof state[v] === 'boolean' && (
                  <input
                    className="reset"
                    checked={state[v]}
                    type="checkbox"
                    onChange={() => {
                      onChange(v, !state[v]);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

StateObserver.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  state: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StateObserver;
