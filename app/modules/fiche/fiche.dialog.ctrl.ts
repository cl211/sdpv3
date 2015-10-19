"use strict";
/** Controller qui gère les fiches utilisateurs */
class FicheDialogCtrl {
  static IID: string = "FicheDialogCtrl";
  static $inject: Array<string> = ["$mdDialog", "userData", "Restangular"];
  /** Bouton pour fermer la popup sans sauvegarder */
  hide: () => void;
  /** Bouton pour fermer la popup en sauvegardant */
  valider: () => void;
  /** Les données de l'utilisateur courant */
  user: sdp.user;
  /** La liste des boquettes */
  boquettes: Array<string>;
  /** Indicateur de chargement de la page */
  isLoading: boolean;

  constructor($mdDialog: angular.material.IDialogService, userData: sdp.user, Restangular: restangular.IService) {
    var vm: FicheDialogCtrl = this;
    vm.hide = hide;
    vm.valider = valider;
    vm.user = userData;
    vm.isLoading = true;
    getBoquettes();

    function getBoquettes() {
      Restangular.all("boquettes").getList().then(function(r: Array<string>) {
        vm.boquettes = r;
        vm.isLoading = false;
      })
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
