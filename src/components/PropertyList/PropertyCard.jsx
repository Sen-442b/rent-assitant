import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const PropertyCard = ({ property }) => {
  const {
    propertyName,
    propertyType,
    monthlyRent,
    beds,
    bathrooms,
    dimensionsInMeters,
    address,
    location,
    country,
    image,
  } = property;
  return (
    <div className="property-card">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            $<span>{monthlyRent}</span> /month
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {propertyName}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="address"
          >
            {address}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="address"
          >
            {location}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PropertyCard;
