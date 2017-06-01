module.exports = {
  disabled: true,
  services:[
    {
      path: '/api/vendors',
      count: 60,
      template: {
        name: '{{company.companyName}}',
        address: '{{address.streetAddress}}',
        phone: '{{phone.phoneNumber}}',
        email: '{{internet.email}}'
      }
    },
    {
      path: '/api/products',
      count: 200,
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
      count: 72,
      template: {
        name: '{{lorem.slug}}',
        description: '{{lorem.sentence}}',
        duration: () => Math.floor(Math.random() * (14 - 2)) + 2,
        price: () => Math.floor(Math.random() * (25000 - 5000)) + 5000
      }
    },
    {
      path: '/api/customers',
      count: 150,
      template: {
        name: '{{company.companyName}}',
        address: '{{address.streetAddress}}',
        phone: '{{phone.phoneNumber}}',
        email: '{{internet.email}}'
      }
    }
  ]
};
