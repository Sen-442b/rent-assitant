const express = require("express");
const cors = require("cors");
const app = express();
const { v4: uuidv4 } = require("uuid");

const port = 3001;

app.use(express.json());
app.use(cors());

const currentDate = new Date();
const addDate = (date, days) => {
  const outputDate = new Date(date);
  outputDate.setDate(outputDate.getDate() + days);
  return outputDate;
};
const db = {
  propertyDetails: [
    {
      id: uuidv4(),
      propertyName: "perl harbor",
      propertyType: "apartment",
      monthlyRent: 2_095,
      beds: 2,
      bathrooms: 2,
      dimensionsInMeters: "5x7",
      address: "2699 green valley, highland lake",
      location: "new york",

      country: "USA",

      rating: 5,
      image: "",
      checkInDate: addDate(currentDate, 1),
    },
    {
      id: uuidv4(),
      propertyName: "proxima centauri",
      propertyType: "detached",
      monthlyRent: 6_500,
      beds: 2,
      bathrooms: 2,
      dimensionsInMeters: "5x7",
      address: "432 revenant park",
      location: "new york",

      country: "USA",

      rating: 5,
      image: "",
      checkInDate: addDate(currentDate, 2),
    },
    {
      id: uuidv4(),
      propertyName: "blake villa",
      propertyType: "villa",
      monthlyRent: 7_200,
      beds: 2,
      bathrooms: 2,
      dimensionsInMeters: "5x7",
      address: "48378 lincoln park",
      location: "new york",

      country: "USA",

      rating: 5,
      image: "",
      checkInDate: addDate(currentDate, 3),
    },
    {
      id: uuidv4(),
      propertyName: "beverly springfield",
      propertyType: "detached",
      monthlyRent: 2_700,
      beds: 2,
      bathrooms: 2,
      dimensionsInMeters: "5x7",
      address: "2811 lake, sveilla",
      location: "chicago",
      country: "USA",
      rating: 5,
      image: "",
      checkInDate: addDate(currentDate, 4),
    },
    {
      id: uuidv4(),
      propertyName: "beach park",
      propertyType: "apartment",
      monthlyRent: 3_900,
      beds: 2,
      bathrooms: 2,
      dimensionsInMeters: "5x7",
      address: "2811 lake, sveilla",
      location: "chicago",
      country: "USA",
      rating: 5,
      image: "",
      checkInDate: addDate(currentDate, 10),
    },
    {
      id: uuidv4(),
      propertyName: "berkishare",
      propertyType: "room",
      monthlyRent: 800,
      beds: 2,
      bathrooms: 2,
      dimensionsInMeters: "5x7",
      address: "323 park avenue",
      location: "boston",
      country: "USA",
      rating: 5,
      image: "",
      checkInDate: addDate(currentDate, 15),
    },
    {
      id: uuidv4(),
      propertyName: "amori",
      propertyType: "villa",
      monthlyRent: 5000,
      beds: 2,
      bathrooms: 2,
      dimensionsInMeters: "5x7",
      address: "343 republican city",
      location: "dallas",
      country: "USA",
      rating: 5,
      image: "",
      checkInDate: addDate(currentDate, 20),
    },
    {
      id: uuidv4(),
      propertyName: "lake princess",
      propertyType: "apartment",
      monthlyRent: 2_100,
      beds: 2,
      bathrooms: 2,
      dimensionsInMeters: "5x7",
      address: "434 near pixar studios ",
      location: "detroit",
      country: "USA",
      rating: 5,
      image: "",
      checkInDate: addDate(currentDate, 25),
    },
    {
      id: uuidv4(),
      propertyName: "sand flower",
      propertyType: "room",
      monthlyRent: 500,
      beds: 2,
      bathrooms: 2,
      dimensionsInMeters: "5x7",
      address: "335 park avenue",
      location: "Miami",
      country: "USA",
      rating: 5,
      image: "",
      checkInDate: addDate(currentDate, 30),
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
