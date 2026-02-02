import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";



const __dirname = dirname(fileURLToPath(
    import.meta.url));

const TINYMCE_API_KEY = process.env.TINYMCE_API_KEY;
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
    res.render(__dirname + "/views/index.ejs");
})

app.get('/write', (req, res) => {
    res.render(__dirname + "/views/write.ejs", { TINYMCE_API_KEY: TINYMCE_API_KEY });
})
app.post('/write', (req, res) => {
    console.log(req.body);
    res.render(__dirname + "/views/index.ejs", { post: req.body.post });
})
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})