const express = require("express")
const routes = require("./routes")
const app = express()
app.use(bodyParser.json())
const port = 3001 // Port of the project

app.set("port", port) // Set the port of the project
app.use("/", routes)
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
}) 