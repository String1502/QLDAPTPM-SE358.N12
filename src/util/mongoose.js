module.exports = {
    multipleMongooseObject: function (mongoArray) {
        return mongoArray.map((monose) => monose.toObject());
    },

    mongoToObject: function (mongo) {
        return mongo ? mongo.toObject() : mongo;
    },
};
