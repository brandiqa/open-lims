module.exports = function () {
  const app = this;

  // Initialize Default Admin User
  const userService = app.service('users');
  userService.find()
    .then(function(response) {
      if(response.data.length === 0) {
        userService.create({
          firstName: 'Admin',
          username: 'admin',
          email: 'admin@example.com',
          password: 'admin',
          role: 'admin'
        })
          .then(function(){
            console.info('Default Admin User Created...'); // eslint-disable-line no-console
          });
      }
    });
};
