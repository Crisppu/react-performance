import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, age }) => {
  console.log('Rendering MyComponent');
  return (
    <div>
      <h1>{name}</h1>
      <p>{age} years old</p>
    </div>
  );
};
const StateAreEqual = (prevProps, nextProps) => {
  return prevProps.name === nextProps.name && prevProps.age === nextProps.age;
};

const MemoizedMyComponent = React.memo(MyComponent, StateAreEqual);

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default MemoizedMyComponent;



