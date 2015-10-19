import enumerations = require('../models/enumerations');

export = function (api, models) {
    api.route('/v1/boquettes')
    /**
     * @api {get} /boquettes
     * @apiDescription Cette requ�te permet de r�cup�rer la liste des boquettes
     * @apiName GetBoquettes
     * @apiGroup Boquettes
     * @apiVersion 0.1.0
     * @apiExample {js} Example :
     *   /api/v1/boquettes
     */
        .get(function (req, res) {
            res.status(200).send(enumerations.boquettes);
        });

    api.route('/v1/groupesregionaux')
    /**
     * @api {get} /groupesregionaux
     * @apiDescription Cette requ�te permet de r�cup�rer la liste des groupes r�gionaux
     * @apiName GetGr
     * @apiGroup Groupes Regionaux
     * @apiVersion 0.1.0
     * @apiExample {js} Example :
     *   /api/v1/groupesregionaux
     */
        .get(function (req, res) {
            res.status(200).send(enumerations.groupesRegionaux);
        });

    api.route('/v1/status')
    /**
     * @api {get} /status
     * @apiDescription Cette requ�te permet de r�cup�rer la liste des statuts
     * @apiName GetStatus
     * @apiGroup Status
     * @apiVersion 0.1.0
     * @apiExample {js} Example :
     *   /api/v1/status
     */
        .get(function (req, res) {
            res.status(200).send(enumerations.status);
        });

    api.route('/v1/roles')
    /**
     * @api {get} /roles
     * @apiDescription Cette requ�te permet de r�cup�rer la liste des r�les
     * @apiName GetRoles
     * @apiGroup Roles
     * @apiVersion 0.1.0
     * @apiExample {js} Example :
     *   /api/v1/roles
     */
        .get(function (req, res) {
            res.status(200).send(enumerations.roles);
        });

    api.route('/v1/permissions')
    /**
        * @api {get} /permissions
        * @apiDescription Cette requ�te permet de r�cup�rer la liste des permissions
        * @apiName GetPermissions
        * @apiGroup Permissions
        * @apiVersion 0.1.0
        * @apiExample {js} Example :
        *   /api/v1/permissions
        */
        .get(function (req, res) {
            res.status(200).send(enumerations.permissions);
        });
}