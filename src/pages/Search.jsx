import { useState } from 'react';
import * as React from 'react';
//import Button from '@mui/material/Button';
import { TextField, Button, Container, Typography, Paper, Box } from '@mui/material';
//import './App.css';
import { Link } from 'react-router-dom';

export function Search() {
    return (
        <Container
            sx={{
            //bgcolor: "white",
            height: "100vh",
            display: "flex",
            //alignItems: "center",
            justifyContent: "center",
        }}
        >
            <section>
            <div>
            <form>
                <Typography variant="h1" sx={{ my: 1, textAlign: "center", color: "secondary.main" }}>What you want to find?</Typography>
                <TextField variant="outlined" color="primary" focused placeholder="Example: characters" sx={{ width: 500 }}/>
                <Button sx={{ ":hover": {bgcolor: "#da7b1b"}, height: 55, mx: 2, px: 5 }} variant="contained">Find</Button>
            </form>
            </div>
            </section>
        </Container>
    )
}