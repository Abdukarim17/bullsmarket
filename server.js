import express from "express"
import { dirname } from "path"
import { fileURLToPath } from "url";
import kit from "./routes/projectkits/kit.js";
import path from "path"

const app = express()
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url))
app.set('views'), path.join(__dirname, 'views')
app.set('view engine', 'ejs')

app.use(express.static('public'))
// app.use(express.static('public/stylesheets'))

// routes
app.use('/projectkits', kit)

app.get('/', (req, res)=>{
    console.log(__dirname)
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(port, ()=>{
    console.log("server runnning")
})