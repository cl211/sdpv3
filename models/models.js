var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate')

module.exports = function (usersDb, groupesDb, eventsDb) {
    var Schema = mongoose.Schema;

    var UserSchema = new Schema({
      googleId: String,
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
      buquages: [BuquageSchema]
    });
    UserSchema.plugin(findOrCreate);

    var RoleSchema = new Schema({
      name: String,
      administration: Boolean
    });

    var BuquageSchema = new Schema({
      listeBuquage: String,
      ecritureComptable: EcritureComptableSchema,
      contestation: ContestationSchema,
      isContested: Boolean
    });

    var ListeBuquageSchema = new Schema({
      date: Date,
      name: String
    });

    var ContestationSchema = new Schema({
      date: Date,
      description: String,
      ecritureComptable: EcritureComptableSchema
    });

    var EcritureComptableSchema = new Schema({
      montant: Number,
      isFromPgtoProms: Boolean
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

    var NotificationSchema = new Schema({

    });

    return {
        User: usersDb.model('User', UserSchema),
        Groupe: groupesDb.model('Groupe', GroupeSchema),
        Event: eventsDb.model('Event', EventSchema),
        Buquage: usersDb.model('Buquage', BuquageSchema),
        Role: usersDb.model('Role', RoleSchema),
        Contestation: usersDb.model('Contestation', ContestationSchema)
    }
}
