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
        "id",
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

app.get("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const dynosaurs = await Dynosaur.findOne({
      where: {
        id,
      },
    })

    if (dynosaurs) {
      res.json(dynosaurs)
    } else {
      res.status(404).json("Dynosaur not found")
    }
  } catch (e) {
    console.log(e)
    res.status(500).json("Internal server error")
  }
})

app.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    await Dynosaur.destroy({
      where: { id },
    })

    res.status(204).json("Deleted")
  } catch (e) {
    console.log(e)
    res.status(500).json("Internal server error")
  }
})

app.put("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const dynosaurs = await Dynosaur.update(req.body, {
      where: {
        id,
      },
    })

    res.json(dynosaurs)
  } catch (e) {
    console.log(e)
    res.status(500).json("Internal server error")
  }
})

module.exports = app
