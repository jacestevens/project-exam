import React from 'react'
import { Link, navigate } from '@reach/router'
import axios from 'axios'
import { useState } from 'react'
import Form from './Form'
import { Button, Typography } from '@mui/material'


const AddNewPet = () => {

    const [newPet, setnewPet] = useState({
        name: "",
        type: "",
        petDescription: "",
        firstSkill: "",
        secondSkill: "",
        thirdSkill: ""
    })
    
    const [Errors, setErrors] = useState([])
    
    const submitHandler = (e) => { 
        e.preventDefault();
    
        axios.post("http://localhost:8000/api/Pet", newPet)
            .then((res) => {
                console.log(res)
                console.log(res.data)
                setnewPet(res.data)
                navigate("/")
            })
            .catch((err => {
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            }))
            
    }


    return (
        <div className="flex flex-col items-center my-10">

            <div className="flex flex-col text-left card p-5 w-7/12 text-white">
            <div>
                    <Typography variant="h1" component="h2" sx={{ 
                        minWidth: 650,
                        }}>Pet Shelter</Typography>
                    <p></p>
                </div>
                <Typography variant="h4" component ="h4" sx={{ 
                        minWidth: 650,
                        }}>Know a Furball needing a Home?</Typography>
            </div>
            <div className="flex flex-col my-3 mx-auto w-8/12">

            <Form submitHandler = {submitHandler} Pet = {newPet} setPet = {setnewPet} Errors = {Errors} setErrors = {setErrors}/>
            </div>
            <div>
            <Link to = {("/")}><Button variant="contained" size="large" sx={{
                    paddingX: 10,
                    paddingY: 2,
                    marginY: 2,
                    marginX: "auto"
                }}>Return To Homepage</Button></Link>
            </div>

        </div>
    )

    }
export default AddNewPet
