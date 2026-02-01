const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/events', require('./routes/eventRoutes'));
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/registrations', require('./routes/registrationRoutes'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
