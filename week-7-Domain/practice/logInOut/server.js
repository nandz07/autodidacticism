const express = require('express');
const session = require('express-session');
const app = express();
const nocache = require('nocache');  

app.use(nocache());

// Configure session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

// Middleware to check if user is logged in
const isLoggedIn = (req, res, next) => {
  if (req.session && req.session.loggedIn) {
    next();
  } else {
    res.redirect('/login');
  }
};

// Login route
app.get('/login', (req, res) => {
  let session=req.session.loggedIn
  if(!session){
    res.send(`
    <h1>Login Page</h1>
    <form method="post" action="/login">
      <input type="text" name="username" placeholder="Username" required><br>
      <input type="password" name="password" placeholder="Password" required><br>
      <button type="submit">Login</button>
    </form>
  `);
  }else{
    res.redirect('/dashboard')
  }
  
});

// Handle login form submission
app.post('/login', (req, res) => {
  // const { username, password } = req.body;
  // Add your authentication logic here
  // console.log(req.body);
  // req.session =req.body
  // Set session variable
  req.session.loggedIn = true;
  res.redirect('/dashboard');
});

// Dashboard route
app.get('/dashboard', isLoggedIn, (req, res) => {
  let session=req.session.loggedIn
  if(session){
    res.send(`
    <h1>Welcome to the Dashboard!</h1>
    <p><a href="/logout">Logout</a></p>
  `);
  }
  else{
    res.redirect('/login');
  }
  
});

// Logout route
app.get('/logout', (req, res) => {
  // Destroy session
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

// Prevent caching of back pages
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  next();
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
