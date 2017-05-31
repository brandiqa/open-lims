// services-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const services = new mongooseClient.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    tasks: [{ type: mongooseClient.Schema.Types.ObjectId, ref: 'tasks' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('services', services);
};
