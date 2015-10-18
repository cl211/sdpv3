"use strict";
/** Controller qui gère les fiches utilisateurs */
class FicheDialogCtrl {
  static IID: string = "FicheDialogCtrl";
  static $inject: Array<string> = ["$mdDialog", "userData"];
  /** Bouton pour fermer la popup sans sauvegarder */
  hide: () => void;
  /** Bouton pour fermer la popup en sauvegardant */
  valider: () => void;
  /** Les données de l'utilisateur courant */
  user: sdp.user;

  constructor($mdDialog: angular.material.IDialogService, userData: sdp.user) {
    var vm: FicheDialogCtrl = this;
    vm.hide = hide;
    vm.valider = valider;
    vm.user = {
      buque: userData.buque,
      fams: userData.fams,
      firstname: userData.firstname,
      lastname: userData.lastname
     }

    function hide(): void {
      $mdDialog.cancel();
    }

    function valider(): void {
      $mdDialog.hide(vm.user);
    }
  }
}
angular.module("sdp").controller(FicheDialogCtrl.IID, FicheDialogCtrl);
