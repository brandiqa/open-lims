module.exports = {
  disabled: false,
  services:[
    {
      path: '/api/vendors',
      count: 25,
      template: {
        name: '{{company.companyName}}',
        address: '{{address.streetAddress}}',
        phone: '{{phone.phoneNumber}}',
        email: '{{internet.email}}'
      }
    },
    {
      path: '/api/products',
      count: 50,
      template: {
        name: '{{lorem.word}}',
        cost: '{{finance.amount}}'
      }
    },
    {
      path: '/api/tasks',
      count: 100,
      template: {
        name: '{{lorem.word}}',
        description: '{{lorem.sentence}}',
        duration: () => Math.floor(Math.random() * (24 - 1)) + 1,
        cost: () => Math.floor(Math.random() * (8000 - 500)) + 500
      }
    },
    {
      path: '/api/services',
      count: 10,
      template: {
        name: '{{lorem.slug}}',
        description: '{{lorem.sentence}}',
        duration: () => Math.floor(Math.random() * (14 - 2)) + 2,
        price: () => Math.floor(Math.random() * (25000 - 5000)) + 5000
      }
    },
    {
      path: '/api/customers',
      count: 35,
      template: {
        name: '{{company.companyName}}',
        address: '{{address.streetAddress}}',
        phone: '{{phone.phoneNumber}}',
        email: '{{internet.email}}'
      }
    }
  ]
};
