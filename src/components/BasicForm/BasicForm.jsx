import React, { useState } from 'react';

const INITIAL_STATE = {
    name: '',
    address: '',
    location: '',
    image: '',
};


const BasicForm = (props) => {
    const [state, setState] = useState(INITIAL_STATE);

    const submitForm = (ev) => {
        ev.preventDefault();
        const { name, address, location, image } = state;
    
            if (!name || !address || !location || !image) {
                console.log('Debes rellenar todos los campos');
                return;
            }
    
            console.log(state);
            props.addProfile(state);
            setState(INITIAL_STATE);
        };
   
    const handleInput = (ev) => {
    const {name, value} = ev.target;
    setState({...state, [name]: value});
    };

    return (
        <form onSubmit={submitForm}>
            <fieldset>
                <label>
                    <p>Nombre</p>
                    <input type="text" name="name" value={state.name} onChange={handleInput} />
                </label>

                <label>
                    <p>Apellidos</p>
                    <input type="text" name="address" value={state.address} onChange={handleInput} />
                </label>

                <label>
                    <p>Ciudad</p>
                    <input type="text" name="location" value={state.location} onChange={handleInput} />
                </label>

                <label>
                    <p>Imagen</p>
                    <input type="text" name="image" value={state.image} onChange={handleInput} />
                </label>

                <div>
                    <button type="submit">Guardar Perfil</button>
                </div>
            </fieldset>
        </form>
    )
};
export default BasicForm;
