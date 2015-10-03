var mongoose = require('mongoose');

module.exports = function (usersDb, groupesDb, eventsDb) {
    var Schema = mongoose.Schema;

    var UserSchema = new Schema({
      buque: String,
      fams: String,
      picture: String,
      firstname: String,
      lastname: String,
      adress: String,
      phone: String,
      bande: String,
      email1: String,
      email2: String,
      isAdmin: Boolean,
      isDDP: Boolean
    });

    var GroupeItemSchema = new Schema({
      name: String,
      date: Date,
      sticked: Boolean
    });

    var GroupeSchema = new Schema({
      name: String,
      stream: [GroupeItemSchema],
      members: [UserSchema]
    });

    var PollSchema = new Schema({
      choix: [String],
      multiple: Boolean,
      private: Boolean
    });

    var PostSchema = new Schema({
      title: String,
      text: String,
      picture: String
    });

    var EventSchema = new Schema({
      name: String,
      description: String,
      date: String,
      members: [UserSchema],
      admin: [UserSchema]
    });

    return {
        User: usersDb.model('User', UserSchema),
        Groupe: groupesDb.model('Groupe', GroupeSchema),
        Event: eventsDb.model('Event', EventSchema)
    }
}
