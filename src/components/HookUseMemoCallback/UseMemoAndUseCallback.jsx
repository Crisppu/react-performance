import React,{  useCallback, useState } from 'react'
import PropTypes from 'prop-types';

const listaName = ["Cris", "John"];

export default function UseMemoAndUseCallback() {
    const [name, setName] = useState(listaName[0]);

    const getName = useCallback(() => {
        //console.log('useCallback')
        const randomName = listaName[Math.floor(Math.random() * listaName.length)];
        //console.log(randomName);
        setName(randomName);
    }, []);

    const clearName = useCallback(() => {
        console.log('clear name');
        setName(null);
    }, []);

  return (
    <div>
        {
            React.useMemo(() => {
                console.log('renderizar nombre')
                return (
                    <div>
                        <h1>nombre Generado: {name ? name : 'No tiene nombre'}</h1>
                    </div>
                );
            }, [name])
        }
        <Button label="GetName" click={getName}></Button>
        <Button label="ClearName" click={clearName}></Button>
        <p>{name}</p>
    </div>

  )
}

function WrapperButton(props) {
    console.log('renderizando WrapperButton')
    return (
        <>
            <button onClick={()=>props.click()}>{props.label}</button>
        </>

    )
}

export const Button = React.memo(WrapperButton);

WrapperButton.propTypes = {
    click: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,

}
// UseMemoAndUseCallback.propTypes = {
//     name: PropTypes.string.isRequired
// }

