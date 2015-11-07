export = function (api, models) {

    require('./api/api.buquages')(api, models);
    require('./api/api.enumerations')(api, models);
    require('./api/api.users')(api, models);

}
