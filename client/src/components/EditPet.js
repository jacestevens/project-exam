import React from 'react'
import { Link, navigate } from '@reach/router'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Form from './Form'
import { Button, Typography } from '@mui/material'



const EditPet = ({id}) => {

    const [EditPet, setEditPet] = useState({
        name: "",
        type: "",
        petDescription: "",
        firstSkill: "",
        secondSkill: "",
        thirdSkill: ""
    })
    const [Errors, setErrors] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Pet/${id}`)
            .then((res)=> {
                console.log("Hello",res.data);
                setEditPet(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    const submitHandler = (e) => {

        e.preventDefault()

        axios.put(`http://localhost:8000/api/Pet/${id}`, EditPet)
            .then((res) => {
                console.log(res.data)    
                navigate("/")   
            })
            .catch((err) => {
                console.log(err.response.data.errors)
                console.log(err.response)
                setErrors(err.response.data.errors)
            })



    }


    return (
        <div className="flex flex-col items-center my-4">
            <div className="flex flex-col text-left card p-5 w-7/12 text-white">
            <div>
                    <Typography variant="h1" component="h2" sx={{ 
                        minWidth: 650,
                        }}>Pet Shelter</Typography>
                    <p></p>
                </div>
                <Typography variant="h4" component ="h4" sx={{ 
                        minWidth: 650,
                        }}>Edit {EditPet.name}</Typography>
            </div>

            <div className="flex flex-col my-3 mx-auto w-8/12">
            <Form submitHandler = {submitHandler} Pet = {EditPet} setPet = {setEditPet} Errors= {Errors} setErrors={setErrors} />
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
export default EditPet
