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
        duration: () => Math.floor(Math.random() * 10)
      }
    },
    {
      path: '/api/services',
      count: 10,
      template: {
        name: '{{lorem.word}}',
        description: '{{lorem.sentence}}',
        price: () => Math.floor(Math.random() * (25000 - 5000)) + 5000
      }
    }
  ]
};
