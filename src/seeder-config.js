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
    }
  ]
};
