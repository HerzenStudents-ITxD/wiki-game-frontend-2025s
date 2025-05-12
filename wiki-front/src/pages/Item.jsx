import { useState } from 'react';
import * as React from 'react';
//import Button from '@mui/material/Button';
import { TextField, Button, Container, Typography, Paper, Box } from '@mui/material';
//import './App.css';
import { Link } from 'react-router-dom';

export function Item() {
    return (
        <Container
            sx={{
            //bgcolor: "white",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        >
            <section>
                <div>
                    <Typography variant="h2" sx={{ my: 1, textAlign: "center", color: "primary.main" }}>This is the item page</Typography>
                </div>
                
            </section>
        </Container>
    )
}