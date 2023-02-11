import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';



const Home = () => {
    
    const handleUserInfo = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const userInfo ={
            name,
            email,
            phone,
        }

        localStorage.setItem('userInfo', JSON.stringify(userInfo))

        const user = localStorage.getItem('userInfo')
        console.log(JSON.parse(user))
        // console.log(user)
    }
    
    return (
        <div className='info'>
            <Box
                sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: '#f2e9e4',
                    
                    display: 'grid',
                    placeItems: 'center',

                    '& Button':{
                        marginTop: 2,
                    }


                }}
            >
                <form onSubmit={handleUserInfo}>
                    <TextField required name='name' id="standard-basic" label="Name" variant="standard" />
                    <br />
                    <TextField required name='email' id="standard-basic" label="Email" variant="standard" />
                    <br />
                    <TextField required name='phone' id="standard-basic" label="Phone" variant="standard" />
                    <br />
                    <Button  variant="contained" type='submit'>Submit</Button>
                  
                </form>
                
            </Box>
        </div>
    );
};

export default Home;