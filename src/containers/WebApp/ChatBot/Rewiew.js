import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Review = (props)  => {
  const [state, setState] = useState({ name: '', service: '', business: ''});
  
  useEffect(() => {
    const { steps } = props;
    const { name, service, business } = steps;
    setState({ name, service, business });
  }, [props])

    const { name, service, business } = state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Service</td>
              <td>{service.value}</td>
            </tr>
            <tr>
              <td>Business</td>
              <td>{business.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;