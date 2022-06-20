const express = require('express');

const app = express();


app.get('/', (req, res) =>{
    res.send("hello")
})

app.get('/createMeeting', (req, res) =>{
    const token = getToken;
    const url= createMeeting(token);
    alert(url);
})

app.get("/api", (req, res) => {
    res.json({
        "users":["userOne", "userTwo", "userThree"]
    })
})

app.listen(5000, () => {
    console.log('listening on port 5000');
})