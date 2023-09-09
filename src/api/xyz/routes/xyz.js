module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/xyz',
     handler: 'xyz.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
