import * as express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
})

app.listen(9000, () => {
    console.log(`App listening on port 9000`);
})