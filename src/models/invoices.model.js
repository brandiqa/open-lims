// invoices-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const invoices = new mongooseClient.Schema({
    invoiceNo: { type: String, required: true, unique:true },
    customer: { type: mongooseClient.Schema.Types.ObjectId, ref: 'customers', required: true},
    service: { type: mongooseClient.Schema.Types.ObjectId, ref: 'services', required: true},
    amount: { type: Number, required: true },
    payment: { type: mongooseClient.Schema.Types.ObjectId, ref: 'payments' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('invoices', invoices);
};
