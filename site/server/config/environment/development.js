'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/followme-dev'
  },
  auth: {
  	instagram: {
  		clientID: 'e39a4047b44b439f8a21ea6a52a8c207',
  		clientSecret: 'bf96a7c92b6249eebf97b31365efad53',
  		callbackURL: 'http://localhost:9000/auth/instagram/callback'
  	}
  },
  seedDB: true
};
