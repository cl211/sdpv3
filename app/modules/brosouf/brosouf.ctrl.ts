"use strict";
class BrosoufCtrl {
  static IID: string = "BrosoufCtrl";
  static $inject: Array<string> = ['Restangular', "moment"];
  disconnect: Function;
  /** Onglet actif */
  currentTab: string;
  principal: sdp.user;
  today: string;
  /** Moq en attendant l'API de Gugullafxi */
  buquages: _.Collection<any>;
  solde: Number;

  constructor(Restangular: restangular.IService, moment: any) {
    var vm:BrosoufCtrl = this;

    vm.currentTab = 'myAccount'; //init
    vm.today = moment().format("LL");
    vm.solde = 0;

    function getSelf(): void {
      Restangular.one("users", "self").get().then(function(r:sdp.user) {
        vm.principal = r;
        vm.buquages = [
          { manip: '', montant: 119, isFromPgtoProms: true, dateManip: moment('2014-06-25'), dateCreation: moment('2015-10-17') },
          { manip: 'Cotiz 2014-2015', montant: 20.17, isFromPgtoProms: false, dateManip: moment('2014-09-11'), dateCreation: moment('2015-10-17')  },
          { manip: 'Degueul\'s chez Hudmal', montant: 44.83, isFromPgtoProms: false, dateManip: moment('2015-02-05'), dateCreation: moment('2015-10-17')  },
          { manip: 'Cotiz 2015-2016', montant: 20, isFromPgtoProms: false, dateManip: moment('2015-09-17'), dateCreation: moment('2015-10-17')  },
        ]
        vm.solde = _.reduce(vm.buquages, function(solde, buquage)
        {
          buquage.isFromPgtoProms ? solde += buquage.montant : solde -= buquage.montant;
          return solde;
        }, 0);
      });
    }

    getSelf();
  }
}
angular.module("sdp").controller(BrosoufCtrl.IID, BrosoufCtrl);
