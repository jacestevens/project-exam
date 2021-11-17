import React from 'react'
import axios from 'axios'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/DeleteOutline'
import { navigate } from '@reach/router'
import { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';

const AdoptButton = (props) => {

    const {adoptPetId, PetList, setPetList} = props
    
    const filterDeleted = (adoptPetId) => {
       const newList =  PetList.filter((Pet, i) => Pet._id !== adoptPetId);
        setPetList(newList)
        console.log("Did this work", newList)
    }
    const adoptHandler = (e) => {

        

        axios.delete(`http://localhost:8000/api/Pet/${adoptPetId}`)


            .then((res)=>{
                console.log(res.data);

                if(PetList){
                    filterDeleted(adoptPetId);
                }
                else{
                    navigate("/");
                }
    
            })
            .catch((err)=>{
                console.log(err);
            })
        }


    return (
        <div>
           <Button variant="contained" size="large" startIcon={<HomeIcon />} sx={{padding: ".5rem 3rem", minWidth: 75, }} onClick={adoptHandler}>Adopt Me!</Button>
        </div>
    )
}

export default AdoptButton