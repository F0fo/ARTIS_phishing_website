 ARTIS Password Change Application

A simple phishing web application that is sent to users stating " DATA BREACH: change password" allowing users to change their password. The application saves the old and new passwords to a text file .

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- npm (comes with Node.js)

## Project Structure
```
login-app/
├── src/
│   ├── App.js          # React frontend code
│   └── App.css         # Styling
├── server.js           # Backend server
├── package.json        # Project dependencies
└── login_data.txt      # Output file (created automatically)
```

## Installation

1. Clone or download this project
2. Navigate to the project folder:
```bash
   cd login-app
```

3. Install dependencies:
```bash
   npm install
   npm install express cors
   npm install react-router-dom
```

## Running the Application

You need to run **TWO servers** - the backend and the frontend.

### Step 1: Start the Backend Server

Open a terminal/command prompt in the project folder and run:
```bash
node server.js
```

You should see:
```
Server running on http://localhost:5000
```

**Keep this terminal open!** ✅

### Step 2: Start the Frontend Server

Open a **NEW** terminal/command prompt in the same project folder and run:
```bash
npm start
```

Your browser should automatically open to `http://localhost:3000`

**Keep this terminal open too!** ✅

### Step 3: Access the Application

Open your browser and navigate to:
```
http://artis.corn:3000/changePassword
```

**Note:** Make sure you've added `127.0.0.1    artis.corn` to your hosts file:
- **Windows:** Run notepad or your text editor as Administrator
- Click File → Open
- Navigate to: `C:\Windows\System32\drivers\etc\hosts`
- Change "Text Documents" to "All Files" in the file type dropdown so intended file appears
- Open the file named `hosts`
- Add this line at the bottom:  `127.0.0.1    artis.corn`


## How to Use

1. Enter any email address in the first field
2. Enter any password as an **old password** in the second field
2. Enter your **new password** in the third field 
3. Click the **"Change Password"** button
4. You'll see a success message if everything works correctly

## Checking the Output

After submitting the form, check the project folder for a file called **`login_data.txt`**

The file will contain entries like this:
```
Timestamp: 2024-12-21T10:30:45.123Z
Email: idk@gmail.com
Old Password: myoldpass123
New Password: mynewpass456
==================================================

Timestamp: 2024-12-21T10:35:20.789Z
Email: idk2@gmail.com
Old Password: anotherold
New Password: anothernew
==================================================
```

Each submission appends a new entry to this file.

## Troubleshooting

### "Could not connect to server" error
- Make sure the backend server is running (`node server.js`)
- Check that it's running on port 5000

### "Module not found" errors
- Run `npm install` to install all dependencies
- Make sure you're in the correct project folder

### Page not loading at artis.com
- Verify you've edited the hosts file correctly
- Try accessing `http://localhost:3000/changePassword` instead
- Restart your browser after editing hosts file

### Port already in use
If you see "Port 3000 is already in use":
- Close any other React apps running
- Or kill the process using that port

If you see "Port 5000 is already in use":
- Stop any other servers running on port 5000
- Or change the PORT in `server.js`

## Stopping the Servers

To stop the servers:
- Press `Ctrl + C` in each terminal window
- Or simply close the terminal windows


