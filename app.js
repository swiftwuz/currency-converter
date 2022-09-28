const express = require('express')
const app = express()

const port = process.env.PORT || 3000
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
    res.render("pages/index")
})

app.listen(port)
console.log("app listening on port 3000")