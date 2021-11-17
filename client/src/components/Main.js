import React from 'react'
import { useState } from 'react'
import AllPets from './AllPets'
import { Button, Typography } from '@mui/material';
import { Link } from '@reach/router';


const Main = () => {

    const [PetList, setPetList] = useState([])

    return (
        <div className="my-9 mx-24" >
            <div className="flex flex-col text-left card p-5 w-7/12 text-white">
                <div>
                    <Typography variant="h1" component="h2" sx={{ 
                        minWidth: 650,
                        }}>Pet Shelter</Typography>
                    <p></p>
                </div>
                <Typography variant="h4" component ="h4" sx={{ 
                        minWidth: 650,
                        }}>These pets are looking for a good Home!</Typography>
            </div>
            <div className="w-3/5  my-8"> 
                <AllPets PetList={PetList} setPetList={setPetList}/>
            </div>
            <div className="p-3 w-7/12 text-white" align="center">
                <Link to = {("/AddPet")}><Button variant="contained" size="large" sx={{
                    paddingX: 10,
                    paddingY: 2,
                }} >Introduce Us To a New Pet</Button></Link>
            </div>
        </div>

    )
}

export default Main
