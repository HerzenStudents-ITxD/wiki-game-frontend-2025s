import { useState } from 'react';
import * as React from 'react';
//import Button from '@mui/material/Button';
import { TextField, Button, Container, Typography, Paper, Box } from '@mui/material';
//import './App.css';

const serviceList = ["Service 1", "Service 2", "Service 3"];

function App() {
  return (
    <Container
      sx={{
        bgcolor: "white",
        height: "100vh",
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
      }}>
      <section>
        <header>
          <Box sx={{ flexDirection: "row" }}>
            <Button>Menu</Button>
            <Button>Search</Button>
          </Box>
        </header>
      <div>
        <form>
          <Typography variant="h2" sx={{ my: 1, textAlign: "center", color: "primary.main" }}>Create note</Typography>
          <TextField id="outlines-basic" label="Outlined" variant="outlined" placeholder="Title" />
          <TextField id="outlines-basic" label="Outlined" variant="outlined" placeholder="Description" />
          <Button sx={{ ":hover": {bgcolor: "darkblue"} }} variant="contained">Create</Button>
          <Box sx={{ pt: 4, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", gap: 4, }}>
            {serviceList.map((service) => (
            <Paper elevation={1} sx={{ width: {xs: 1, md: 320} }}>
              <Box sx={{ m: 3 }}>
                <Typography variant="h3">{service}</Typography>
                <Typography sx={{ mt: 2 }}>
                  Meowmeowmeow
                </Typography>
              </Box>
            </Paper>
            ))}
          </Box>
        </form>
      </div>
      </section>
    </Container>
  );
}

export default App;