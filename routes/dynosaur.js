const express = require("express")
const app = express()
const { Dynosaur } = require("../models/index")

app.post("/", async (req, res) => {
  try {
    const dynosaur = await Dynosaur.create(req.body)
    res.json(dynosaur)
  } catch (e) {
    console.log(e)
    res.status(500).json("Internal server error")
  }
})

app.get("/", async (req, res) => {
  try {
    const dynosaurs = await Dynosaur.findAll({
      attributes: [
        "name",
        "scientific",
        "appearance",
        "disappearance",
        "description",
        "color",
      ],
    })

    res.json(dynosaurs)
  } catch (e) {
    console.log(e)
    res.status(500).json("Internal server error")
  }
})

module.exports = app
