// tasks-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const tasks = new mongooseClient.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    consumables: [{ type: mongooseClient.Schema.Types.ObjectId, ref: 'products' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('tasks', tasks);
};
