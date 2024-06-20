import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function NamesRandom () {
    const listNames = ['Juan', 'Maria'];
    const [nameInitial, setNameInitial] = useState('');
    const [numero, setnumero] = useState(0);
    const getName = () => {
        const randomName = Math.floor(Math.random() * (listNames.length - 1));
        console.log(randomName)
        return setNameInitial(listNames[randomName]);
    }
    const clearName = () => {
        setNameInitial('');
    }
    const obtainName = () => {
        getName();
    }
    return (
        <div>
            <h1>Ejemplo de Uso de React.memo Nombres aleatorios</h1>
            <p>Nombre: {nameInitial}</p>
            <p>Número: {numero}</p>
            <button onClick={() => setnumero(r=> r+ 1)}>Generar numero</button>
            {/* <button onClick={() => getName()}>Generar Nombre</button> */}
            {/* <button onClick={() => clearName()}>Limpiar Nombre</button> */}
            <NamesRandomMemo name={nameInitial} clearName={clearName}></NamesRandomMemo>
            <button onClick={() => obtainName()}>Obtener Nombre</button>
        </div>
    );
}
const NamesComponent = (props) => {
    console.log('renderizando de nuevo')
    return (
        <div>
            <h1>{props.name}</h1>
            <button onClick={() => props.clearName()}>Limpiar Nombre</button>

        </div>
    );
};
NamesComponent.propTypes = {
    name: PropTypes.string,
    clearName: PropTypes.func
}

const areEqual = (prevProps, nextProps) => {
  return prevProps.name === nextProps.name;
}


const NamesRandomMemo = React.memo(NamesComponent, areEqual);
