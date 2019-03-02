// Import express
const express = require("express");
// Create the app
const app = express();
// Use it with post
app.use(express.json());

// We will treat this array of events as our database for now
const events = [
  {
    id: "1",
    title: "First Conference",
    summary: "This is GUCMUNs first conference",
    MoreDetails: "www.gucmun/conference1.com"
  },

  {
    id: "2",
    title: "Second Conference",
    summary: "This is GUCMUNs second conference",
    MoreDetails: "www.gucmun/conference2.com"
  },

  {
    id: "3",
    title: "Third Conference",
    summary: "This is GUCMUNs third conference",
    MoreDetails: "www.gucmun/conference3.com"
  }
];

// Default route (entry point)
app.get("/", (req, res) => {
  res.send(`<h1>Welcome</h1>`);
});

// Get all events
app.get("/api/events", (req, res) => {
  res.send(events);
});

// Get a certain event
app.get("/api/events/:id", (req, res) => {
  const eventId = req.params.id;
  const event = events.find(event => event.id === eventId);
  res.send(event);
});

// Create an event
app.post("/api/events/", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const summary = req.body.summary;
  const MoreDetails = req.body.MoreDetails;

  const event = {
    id: events.length + 1,
    title,
    summary,
    MoreDetails
    
  };
  events.push(event);
  res.send(events);
});

// Update events attributes
app.put("/api/events/:id", (req, res) => {
  const eventId = req.params.id;
  const updatedTitle = req.body.title;
  const updatedsummary = req.body.summary;
  const updatedMoreDetails = req.body.MoreDetails;

  const event = events.find(event => event.id === eventId);

  event.title = updatedTitle;
  event.summary = updatedsummary;
  event.MoreDetails = updatedMoreDetails;

  res.send(events);
});

//Delete an event
app.delete("/api/events/:id", (req, res) => {
  const eventId = req.params.id;
  const event = events.find(event => event.id === eventId);
  const index = events.indexOf(event);
  events.splice(index, 1);
  res.send(events);
});

//Define the port
const port = process.env.PORT | 3000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));
