const express = require("express");
const cors = require("cors");
const app = express();
const { v4: uuidv4 } = require("uuid");

const port = 3001;

app.use(express.json());
app.use(cors());
const db = {
  propertyDetails: [
    {
      id: uuidv4(),
      propertyName: "Perl Harbor",
      propertyType: "apartment",
      monthlyRent: 2_095,
      beds: 2,
      bathrooms: 2,
      dimensionsInMeters: "5x7",
      address: "2699 Green Valley, Highland Lake",
      location: "New York",

      country: "USA",

      rating: 5,
      image: "",
    },
    {
      id: uuidv4(),
      propertyName: "Beverly Springfield",
      propertyType: "detached",
      monthlyRent: 2_700,
      beds: 2,
      bathrooms: 2,
      dimensionsInMeters: "5x7",
      address: "2811 Lake, Sveilla",
      location: "Chicago",
      country: "USA",
      rating: 5,
      image: "",
    },
    {
      id: uuidv4(),
      propertyName: "Berkishare",
      propertyType: "room",
      monthlyRent: 800,
      beds: 2,
      bathrooms: 2,
      dimensionsInMeters: "5x7",
      address: "323 park avenue",
      location: "Boston",
      country: "USA",
      rating: 5,
      image: "",
    },
    {
      id: uuidv4(),
      propertyName: "Amori",
      propertyType: "villa",
      monthlyRent: 5000,
      beds: 2,
      bathrooms: 2,
      dimensionsInMeters: "5x7",
      address: "323 park avenue",
      location: "Dallas",
      country: "USA",
      rating: 5,
      image: "",
    },
    {
      id: uuidv4(),
      propertyName: "Lake Princess",
      propertyType: "apartment",
      monthlyRent: 2_100,
      beds: 2,
      bathrooms: 2,
      dimensionsInMeters: "5x7",
      address: "323 park avenue",
      location: "Detroit",
      country: "USA",
      rating: 5,
      image: "",
    },
    {
      id: uuidv4(),
      propertyName: "Sand Flower",
      propertyType: "room",
      monthlyRent: 500,
      beds: 2,
      bathrooms: 2,
      dimensionsInMeters: "5x7",
      address: "323 park avenue",
      location: "Miami",
      country: "USA",
      rating: 5,
      image: "",
    },
  ],
};

app.listen(process.env.PORT || port, () => {
  console.log("works");
});

app.get("/", (req, res) => {
  res.send("Lorem ipsum");
});

app.get("/properties", (req, res) => {
  const { propertyDetails } = db;
  res.json({ propertyDetails });
});
