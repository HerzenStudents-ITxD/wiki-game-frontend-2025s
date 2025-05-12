import { useState } from 'react';
import * as React from 'react';
import { TextField, Button, Container, Typography, Paper, Box } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';

export function Layout() {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}