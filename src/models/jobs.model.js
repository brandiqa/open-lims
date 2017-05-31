// jobs-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const jobs = new mongooseClient.Schema({
    invoice: { type: mongooseClient.Schema.Types.ObjectId, ref: 'invoices' },
    service: { type: mongooseClient.Schema.Types.ObjectId, ref: 'services' },
    notes: { type: String, required: true },
    expected: { type: Number, required: true },
    startDate: { type: Date, default: Date.now },
    finishDate: { type: Date, default: Date.now }
  });

  return mongooseClient.model('jobs', jobs);
};
