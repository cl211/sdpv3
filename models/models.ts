var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
var enumerations = require('./enumerations');
var _ = require('underscore');

export = function (db) {
    var Schema = mongoose.Schema;

    var BuquageSchema = new Schema({
        manip: String,
        dateManip: Date,
        dateCreation: Date,
        contestation: {
            date: Date,
            status: { type: String, enum: enumerations.status },
            description: String,
            montant: Number,
            isFromPgtoProms: Boolean
        },
        montant: Number,
        isFromPgToProms: Boolean
    });

    var UserSchema = new Schema({
        buque: String,
        fams: String,
        firstname: String,
        lastname: String,
        adress: String,
        latitude: Number,
        longitude: Number,
        phone: String,
        groupeRegional: { type: String, enum: enumerations.groupesRegionaux },
        boquette: { type: String, enum: _.pluck(enumerations.boquettes, 'name') },
        email1: String,
        email2: String,
        roles: [{ type: String, enum: enumerations.roles }],
        buquages: [BuquageSchema]
    });
    UserSchema.plugin(findOrCreate);

    var RoleSchema = new Schema({
        name: { type: String, enum: enumerations.roles },
        permissions: [{ type: String, enum: enumerations.permissions }]
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
        User: db.model('User', UserSchema),
        Groupe: db.model('Groupe', GroupeSchema),
        Event: db.model('Event', EventSchema),
        Buquage: db.model('Buquage', BuquageSchema),
        Role: db.model('Role', RoleSchema)
    }
}
