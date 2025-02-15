const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;

app.use(cors());

const rappers = {
    '21 savage':{
        'age': 31,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'borthLocation': 'London, England'
    },
    'killer mike':{
        'age': 49,
        'birthName': 'Michael Santiago Render',
        'borthLocation': 'Atlanta, Georgia'
    },
    'dylan':{
        'age': 44,
        'birthName': 'Dylan Dilinjah ',
        'borthLocation': 'Brooklyn, New York'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLowerCase();
    if (rappers[rapperName]) {
        res.json(rappers[rapperName])
    }
    res.json(rappers['dylan'])
})

app.listen(port, () => {
    console.log(`The server is now running on PORT: ${port}`)
})