const userRoutes = require('./user/routes');
const postRoutes = require('./post/routes');
const emailRoutes = require('./E-mail/emailRoutes');

function setupRoutes(app) {    
    app.use('/api/users', userRoutes);  
    app.use('/api/posts', postRoutes);  
    app.use('/api/email', emailRoutes);
};

module.exports = setupRoutes;