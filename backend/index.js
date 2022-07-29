const express = require("express");
const app = express();

const port = 3001;

app.use(express.json());

const db = {
  propertyDetails: [
    {
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
      propertyName: "Beverly Springfield",
      propertyType: "detached",
      monthlyRent: 2_700,
      beds: 2,
      bathrooms: 2,
      dimensionsInMeters: "5x7",
      address: "2811 Lake, Sveilla",
      location: "New York",
      country: "USA",
      rating: 5,
      image: "",
    },
    {
      propertyName: "Berkishare",
      propertyType: "room",
      monthlyRent: 2_700,
      beds: 2,
      bathrooms: 2,
      dimensionsInMeters: "5x7",
      address: "323 park avenue",
      location: "New York",
      country: "USA",
      rating: 5,
      image: "",
    },
    {
      propertyName: "Amori",
      propertyType: "villa",
      monthlyRent: 2_700,
      beds: 2,
      bathrooms: 2,
      dimensionsInMeters: "5x7",
      address: "323 park avenue",
      location: "New York",
      country: "USA",
      rating: 5,
      image: "",
    },
  ],
};

app.get("/", (req, res) => {
  res.send("Lorem ipsum");
});

app.get("/properties", (req, res) => {
  const { propertyDetails } = db;
  res.json({ propertyDetails });
});

app.listen(port, () => {
  console.log("works");
});
