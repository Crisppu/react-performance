import React from 'react';
import PropTypes from 'prop-types';
/*
    !sintaxis
*/

const Count = (props) => {
    return (
        <div>
            {props.count}
        </div>
    );
};

// Función de comparación personalizada para React.memo
const areEqual = (prevProps, nextProps) => {
    // Solo re-renderizar si la prop 'count' ha cambiado
    return prevProps.count === nextProps.count;
  };

Count.propTypes = {
    count: PropTypes.number.isRequired
};



export const CountWhiteMemo = React.memo(Count, areEqual);

