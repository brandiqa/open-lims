module.exports = {
  disabled: false,
  services:[
    {
      path: '/api/vendors',
      count: 25,
      template: {
        name: '{{company.companyName}}',
        address: '{{address.streetAddress}}'
      }
    }
  ]
}
