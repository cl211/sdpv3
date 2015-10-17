var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
var enumerations = require('./enumerations');

module.exports = function (usersDb, groupesDb, eventsDb) {
    var Schema = mongoose.Schema;

    var UserSchema = new Schema({
      buque: String,
      fams: String,
      firstname: String,
      lastname: String,
      adress: String,
      latitude: Number,
      longitude: Number,
      phone: String,
      grouperegional: {type: String, enum: enumerations.grouperegionals),
      boquette: {type: String, enum: enumerations.boquettes},
      email1: String,
      email2: String,
      roles: [{type: String, enum: enumerations.roles}],
      buquages: [BuquageSchema]
    });
    UserSchema.plugin(findOrCreate);

    var RoleSchema = new Schema({
      name: {type: String, enum: enumerations.roles},
      permissions: [{type:String, enum: enumerations.permissions}]
    });

    var BuquageSchema = new Schema({
      manip: String,
      dateManip: Date,
      dateCreation: Date,
      contestation: ContestationSchema,
      montant: Number,
      isFromPgtoProms: Boolean
    });

    var ContestationSchema = new Schema({
      date: Date,
      statut: {type: String, enum: enumerations.statut},
      description: String,
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
