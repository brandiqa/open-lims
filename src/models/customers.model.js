// customers-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
require('mongoose-type-email');

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const customers = new mongooseClient.Schema({
    name: { type: String, required: true },
    phone: { type: String, required:false },
    email: { type: mongooseClient.SchemaTypes.Email, required: true, unique: true },
    address: { type: String, required:true },
    creditLimit: { type: Number, required:true, default:0 },
    invoices: [{ type: mongooseClient.Schema.Types.ObjectId, ref: 'invoices' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('customers', customers);
};
