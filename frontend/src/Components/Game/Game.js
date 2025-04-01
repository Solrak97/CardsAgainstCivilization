import React from "react";
import Card from "../Card/Card";
import { Container, Grid, Typography, Button } from "@mui/material";

function Game() {
    const cards = [
        { name: "House", description: "A place to live.", cost: 5 },
        { name: "Church", description: "A place of worship.", cost: 3 },
        { name: "Tavern", description: "A place to drink and chat.", cost: 7 }
    ];

    const handleMenuClick = () => {
        // Empty function for now
    };

    return (
        <Container sx={{ textAlign: "center", marginTop: 4 }}>
            <Button variant="contained" onClick={handleMenuClick} sx={{ marginBottom: 2 }}>
                Menu
            </Button>
            <Typography variant="h4" gutterBottom>
                Card Game
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {cards.map((card, index) => (
                    <Grid item key={index}>
                        <Card name={card.name} description={card.description} cost={card.cost} image="base_house.png" />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Game;