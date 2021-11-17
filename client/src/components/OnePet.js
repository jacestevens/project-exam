import { Button, Paper } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from '@reach/router';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AdoptButton from './AdoptButton';
import LikeButton from './LikeButton';




const OnePet = ({id, Typography}) => {

    const [Clicked, setClicked] = useState(false)
    const [IndPet, setIndPet] = useState({})
    const [likes, setlikes] = useState(0)

    useEffect(() => {

        axios.get(`http://localhost:8000/api/Pet/${id}`)
            .then((res) => {
                console.log("hello", res.data)
                setIndPet(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);


    const likeHandler = (e) => {

        e.preventDefault()
        setlikes(likes + 1)
        setClicked(!Clicked)


        }

    return (
        <div className="flex flex-col text-left card p-10 w-7/12 text-white m-20">
            <div >
                    <Typography variant="h1" component="h2" sx={{ 
                        minWidth: 650,
                        }}>Pet Shelter</Typography>
                    <p></p>
                </div>
                
                <div className="flex flex-row justify-between items-center">
                    <Typography variant="h4" component ="h4" sx={{ 
                        minWidth: 650,
                        }}>Details about: <b>{IndPet.name}</b></Typography>
                    <AdoptButton adoptPetId = {IndPet._id} />
                </div>
                <Paper elevation={3} className=" flex flex-col my-5 p-7 text-2xl h-56 justify-evenly items-center">
                    <div className="flex flex-row w-10/12 justify-between">
                        <p>Pet Type:</p>
                        <p>{IndPet.type}</p>
                    </div>
                    <div className="flex flex-row w-10/12 justify-between">
                        <p>Description:</p>
                        <p>{IndPet.petDescription}</p>
                    </div>
                    <div className="flex flex-row w-10/12 justify-between">
                        <p>Skills:</p>
                        <div>
                            <ul className="flex flex-col">
                               {
                                   IndPet.firstSkill? 
                                   <li>{IndPet.firstSkill}</li> : null
                               }
                               {
                                   IndPet.secondSkill? 
                                   <li>{IndPet.secondSkill}</li> : null
                               }
                               {
                                   IndPet.thirdSkill? 
                                   <li>{IndPet.thirdSkill}</li> : null
                               }
                            </ul>
                        </div>
                    </div>
                </Paper>
                <div className="flex flex-row items-center justify-between w-full">
                    <Button variant="contained" size="large" sx={{
                    paddingX: 10,
                    paddingY: 2,
                    marginY: 2,
                    marginX: 1
                }}><Link to = {("/")}>Return To Homepage</Link></Button>
                <div>


                {
                    Clicked? 
                        <Button startIcon={<FavoriteIcon/>} variant="contained" size="large" sx={{
                    paddingX: 10,
                    paddingY: 2,
                    marginY: 2,
                    marginX: "auto",
                    background: "Red"}} onClick={likeHandler} disabled>I Love {IndPet.name}</Button>
                    : 
                    <Button startIcon={<FavoriteIcon/>} variant="contained" size="large" sx={{
                    paddingX: 10,
                    paddingY: 2,
                    marginY: 2,
                    marginX: "auto",
                    background: "Red"}} onClick={likeHandler} >I Love {IndPet.name}</Button>
                    
                    
                }
                <Typography variant="h6" component ="h6" sx={{ 
                        minWidth: 650,
                        }}><b>{likes}</b> likes</Typography>
                </div>
                </div>
                
                
        </div>

    )
}

export default OnePet
