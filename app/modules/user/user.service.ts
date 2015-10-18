"use strict";
/** Service pour aider les requêtes sur le profil user */
class UserService {
  static IID: string = "UserService";
  static $inject: Array<string> = [];
  /** Préparer l'affichage */
  prepareUser: (user: sdp.user) => Array<sdp.property>;
  /** Préparer la requête */
  prepareRequest: () => void;

  constructor() {
    var vm: UserService = this;
    vm.prepareUser = prepareUser;
    vm.prepareRequest = prepareRequest;

    function prepareUser(input: sdp.user): Array<sdp.property> {

        var user: Array<sdp.property> = [];

        user.push({
          value: input.buque,
          name: "Buque"
        });

        user.push({
          value: input.fams,
          name: "Fam's"
        });

        user.push({
          value: input.boquette,
          name: "Boquette"
        });

        user.push({
          value: input.lastname,
          name: "Nom"
        });

        user.push({
          value: input.firstname,
          name: "Prénom"
        });

        user.push({
          value: input.picture,
          name: "URL Picture"
        });

        user.push({
          value: input.phone,
          name: "Téléphone"
        });

        user.push({
          value: input.email2,
          name: "E-mail secondaire"
        });

        user.push({
          value: input.adress,
          name: "Adresse"
        });

        user.push({
          value: input.longitude,
          name: "Longitude"
        });

        user.push({
          value: input.latitude,
          name: "Latitude"
        });

        user.push({
          value: input.groupeRegional,
          name: "Groupe régional"
        });

        return user;
    }

    function prepareRequest(): void {

    }
  }
}
angular.module("sdp").service(UserService.IID, UserService);
