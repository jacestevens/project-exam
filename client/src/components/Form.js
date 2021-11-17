import React from 'react'
import { Button, Paper, TextField, Typography, TextareaAutosize } from '@mui/material';



const Form = ({submitHandler, Pet, setPet, Errors, EditPet, setEditPet}) => {


    const onChangeHandler = (e) => {

        let newStateObject = {...Pet};
        newStateObject[e.target.name] = e.target.value;
        setPet(newStateObject)
        console.log("e.target.name:  " + e.target.name);
        console.log("e.target.value: " + e.target.value);

    }

    return (

        <div >
        <Paper elevation={3} className=" my-2 mx-auto text-2xl">
            
                <form className=" w-11/12 my-10 mx-auto flex flex-col justify-between  p-14" onSubmit={submitHandler}>
                    <div className="flex flex-row justify-between my-3">
                        <label>Name:</label>
                        <div>
                        <TextField id="outlined-basic" label="Name" variant="outlined"  size="medium" name="name" onChange={onChangeHandler} value={Pet.name}/>
                        {/* <input type="text" name="name" className=" border-solid border-black border-2 px-7 "   onChange={onChangeHandler} value={Pet.name}/> */}
                        {Errors.name ? <p className="text-sm">{Errors.name.message}</p> : null }
                        </div>
                    </div>
                    <div className="flex flex-row justify-between my-3">
                        <label htmlFor="type">Type:</label>
                        <div>
                        <TextField id="outlined-basic" label="Type" variant="outlined"  size="medium" name="type" onChange={onChangeHandler} value={Pet.type}/>
                        {/* <input type="text" name="type"  className=" border-solid border-black border-2 px-7 " onChange={onChangeHandler} value={Pet.type}/> */}
                        {Errors.type ? <p className="text-sm">{Errors.type.message}</p> : null }
                        </div>
                    </div>
                    <div className="flex flex-row justify-between my-3">
                        <label htmlFor="petDescription">Pet Description:</label>
                        <div>
                        <TextField id="outlined-basic" label="Description" variant="outlined"  size="medium" fullWidth name="petDescription" onChange={onChangeHandler} value={Pet.petDescription}/>
                        {/* <input type="text" name="type"  className=" border-solid border-black border-2 px-7 " onChange={onChangeHandler} value={Pet.type}/> */}
                        {Errors.type ? <p className="text-sm">{Errors.type.message}</p> : null }
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <p>Skills</p>
                        <div className="flex flex-col justify-evenly h-48">

                        <TextField id="outlined-basic" label="First Skill" variant="outlined"  size="medium" name="firstSkill" onChange={onChangeHandler} value={Pet.firstSkill}/>
                        <TextField id="outlined-basic" label="Second Skill" variant="outlined" size="medium" name="secondSkill" onChange={onChangeHandler} value={Pet.secondSkill}/>
                        <TextField id="outlined-basic" label="Third Skill" variant="outlined" size="medium" name="thirdSkill" onChange={onChangeHandler} value={Pet.thirdSkill}/>
                        </div>
                    </div>
                    <input type="submit" className=" border-solid border-black border-2 px-7 align-center"/>
                </form>
        </Paper>
        
        </div>



    )
}

export default Form
