import React, {useState} from "react";

import './App.css';
import Button from './components/Button';
import Hello from './components/Hello';
import HelloProps from './components/HelloProps/HelloProps';
import ButtonProps from './components/ButtonProps/ButtonProps';
import HookForm from './components/HookForm/HookForm';
import BasicForm from './components/BasicForm/BasicForm';
import PorfileCard from './components/ProfileCard/PorfileCard'
import EjHookForm from "./components/EjHookForm/EjHookForm";

const App = () => {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (profile) => {
    const newProfiles = [ ...profiles, profile ];
    setProfiles(newProfiles);
  };

  return (
  
      <div className="App-header">
        <Button/>

        <Hello/>

        <HelloProps name='Isabel' surname='Gutiérrez'/>

        <ButtonProps text='Enviar'/>
        <ButtonProps text='Cancelar'/>
        <ButtonProps text='Eliminar'/>

        <HookForm/>

        <h1>Listado de perfiles</h1>
        <BasicForm addProfile={addProfile} />
        <PorfileCard profiles={profiles} />

        <EjHookForm/>
      </div>
      
        
      
  
  );
}

export default App;
