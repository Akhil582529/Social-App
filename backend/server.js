import express from 'express'

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("This is a test message to check the server")
})

app.listen(PORT, ()=>{
    console.log(`App is listening on PORT: http://localhost:${PORT}`);
})