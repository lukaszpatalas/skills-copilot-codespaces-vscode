// Create web server 
// 1. Create web server
// 2. Create route for comments
// 3. Create route for comments/new
// 4. Create route for comments/:id
// 5. Create route for comments/:id/edit
// 6. Create route for comments/:id/update
// 7. Create route for comments/:id/delete

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create route for comments
app.get('/comments', (req, res) => {
    res.send('Index of comments');
});

// 3. Create route for comments/new
app.get('/comments/new', (req, res) => {
    res.send('Create a new comment');
});

// 4. Create route for comments/:id
app.get('/comments/:id', (req, res) => {
    res.send('Show comment ' + req.params.id);
});

// 5. Create route for comments/:id/edit
app.get('/comments/:id/edit', (req, res) => {
    res.send('Edit comment ' + req.params.id);
});

// 6. Create route for comments/:id/update
app.get('/comments/:id/update', (req, res) => {
    res.send('Update comment ' + req.params.id);
});

// 7. Create route for comments/:id/delete
app.get('/comments/:id/delete', (req, res) => {
    res.send('Delete comment ' + req.params.id);
});

// Start web server
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});
