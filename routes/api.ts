export = function (api, models) {

    require('./api.buquages')(api, models);
    require('./api.enumerations')(api, models);
    require('./api.users')(api, models);

}