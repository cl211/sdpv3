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
          name: "Buque",
          isEditable: false
        });

        user.push({
          value: input.fams,
          name: "Fam's",
          isEditable: false
        });

        user.push({
          value: input.boquette,
          name: "Boquette",
          isEditable: false
        });

        user.push({
          value: input.lastname,
          name: "Nom",
          isEditable: false
        });

        user.push({
          value: input.firstname,
          name: "Prénom",
          isEditable: false
        });

        user.push({
          value: input.phone,
          name: "Téléphone",
          isEditable: true
        });

        user.push({
          value: input.adress,
          name: "Adresse",
          isEditable: false
        });

        user.push({
          value: input.groupeRegional,
          name: "Groupe régional",
          isEditable: true
        });

        user.push({
          value: input.email2,
          name: "E-mail secondaire",
          isEditable: true
        });

        return user;
    }

    function prepareRequest(): void {

    }
  }
}
angular.module("sdp").service(UserService.IID, UserService);
