import { useState } from 'react';
import * as React from 'react';
import { TextField, Button, Container, Typography, Paper, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import BasicMenu from './Menu';


export function Navbar() {
    return (
        <section>
            <Link to="/">
                <Button sx={{ ":hover": {bgcolor: "#da7b1b"}, py: 1.5, px: 2.5 }} variant="contained">Home</Button>
            </Link>
            <Button sx={{ ":hover": {bgcolor: "#da7b1b"}, m: 1 }} variant="contained">{<BasicMenu/>}</Button>
            <Link to="/search">
                <Button sx={{ ":hover": {bgcolor: "#da7b1b"}, py: 1.5, px: 2.5 }} variant="contained">Search</Button>
            </Link>
        </section>
    )
}