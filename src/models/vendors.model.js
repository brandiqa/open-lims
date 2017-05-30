// vendors-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const vendors = new mongooseClient.Schema({
    name: { type: String, required: true },
    address: { type: String, required:false },
    email: { type: mongooseClient.SchemaTypes.Email, unique: true, required:false },
    phone: { type: String, required:true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('vendors', vendors);
};
