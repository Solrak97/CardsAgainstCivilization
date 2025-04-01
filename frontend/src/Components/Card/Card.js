import React from "react";
import { Card as MUICard, CardContent, Typography, CardMedia } from "@mui/material";

function Card({ image, name, description, cost }) {
    return (
        <MUICard sx={{ minWidth: 200, padding: 2, textAlign: "center" }}>
            {image && (
                <CardMedia
                    component="img"
                    sx={{ height: 200, objectFit: "contain" }}
                    image={process.env.PUBLIC_URL + image}
                    alt={name}
                />
            )}
            <CardContent>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="h7">{cost}</Typography>
            </CardContent>
        </MUICard>
    );
}

export default Card;