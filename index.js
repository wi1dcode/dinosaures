const express = require("express")
const app = express()
const port = 5000
const dinoRoutes = require("./routes/dynosaur")

require("./models/index")

app.use(express.json())
app.use("/dynosaurs", dinoRoutes)

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})
