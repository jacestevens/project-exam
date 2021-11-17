import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router'
import Main from './components/Main';
import AllPets from './components/AllPets';
import OnePet from './components/OnePet';
import { useState } from 'react';
import EditPet from './components/EditPet';
import { Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AddNewPet from './components/AddNewPet';
import Form from './components/Form';


function App() {

  

  return (
    <div className="App">
        <Router>
            <Main path={("/")} />
            <AllPets path={("/AllPets")} Typography = {Typography}/>
            <OnePet path = {("/Pet/:id")} Typography = {Typography}/>
            <EditPet path ={("/EditPet/:id")} Typography = {Typography}/>
            <AddNewPet path={("/AddPet")} Typography = {Typography}/>
            <Form path={("/Form")}/>
        </Router>  
    </div>
  );
}

export default App;
