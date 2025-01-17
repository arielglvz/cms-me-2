const router = require("express").Router();
const { 
  Hero,
  About,
  Project,
  Contact,
  Experience,
  Course, 
} = require("../models/portfolioModel");

// get all portfolioData
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const heros = await Hero.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    const courses = await Course.find();

    res.status(200).send({
      hero: heros[0],
      about: abouts[0],
      projects: projects,
      contact: contacts[0],
      experiences: experiences,
      courses: courses,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send(error);
  }
});

// update Hero
router.put("/update-hero", async (req, res) => {
  try {
    const hero = await Hero.findOneAndUpdate();
  } catch (error) {
    console.error("Error updating hero:", error);
     res.status(500).send(error);
  }
})

module.exports = router;