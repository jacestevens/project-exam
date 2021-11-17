import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { Link } from '@reach/router';
import PetsIcon from '@mui/icons-material/Pets';



const AllPets = ({PetList, setPetList}) => {

    useEffect(() => {
        axios.get("http://localhost:8000/api/Pets")
            .then((res) => {
                console.log("hello", res.data)
                setPetList(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    return (

                <TableContainer component={Paper}>
                    <Table sx={{ 
                        minWidth: 650,
                        }} aria-label="simple table">
                      <TableHead className=" bg-gray-50 ">
                        <TableRow>
                          <TableCell>Pet Name</TableCell>
                          <TableCell align="left">Pet Type</TableCell>
                          <TableCell align="left">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {
                          PetList? PetList.map((pet, i) => {
                            return(
                              <TableRow key={pet._id}>
                              <TableCell>{pet.name}</TableCell>
                              <TableCell>{pet.type}</TableCell>
                              <TableCell >
                                <Link to ={(`/Pet/${pet._id}`)}><Button variant="outlined" startIcon={<PetsIcon />} className="px-2">Look at me!</Button></Link>
                                <Link to ={(`/EditPet/${pet._id}`)}> <Button variant="outlined" startIcon={<EditIcon />} className="px-2">Edit</Button></Link>
                              </TableCell>
                            </TableRow>
                            )
                          }): null
                        } 
                      </TableBody>
                    </Table>
                  </TableContainer>
                   )


}

export default AllPets
