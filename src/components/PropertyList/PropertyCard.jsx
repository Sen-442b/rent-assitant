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
  //TODO :- Add real image links in backend
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
            $<span>{monthlyRent}</span>/month
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="capitalize"
          >
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
            className="capitalize"
          >
            {location}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography variant="body2" color="text.secondary" component="p">
            Beds {beds}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="p">
            Dimensions {dimensionsInMeters}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="p">
            Bathrooms {bathrooms}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="p">
            Property Type {propertyType}
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default PropertyCard;
