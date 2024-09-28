require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const taskRoutes = require('./routes/task.routes');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(taskRoutes);

app.use((err, req, res, next) => {
    return res.json({message: err.message})
});

const PORT = process.env.PORT || 4000;
console.log(process.env.PORT)
app.listen(PORT);
console.log(`192.168.100.56:${PORT}`);