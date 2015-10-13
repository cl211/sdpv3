# sdpv3
Le site de prom's, le vrai !

## Changer de branche
git checkout maBranche
(pour créer la branche, ajouter -b)

## Accéder à la documentation de l'api

* Vérifier que apidoc est installé (pour l'installer : npm i -g apidoc)
* Générer la documentation en exécutant docgen.sh
* Lancer le serveur (node server.js) et se connecter
* Accéder à la documentation à l'adresse http://localhost:8080/doc/

## Push sur GitHub
git status
git add dossiers/fichiers
git commit -m "Message de commit" -a
git push origin maBranche

## Update dependencies
```js
npm install
bower install
grunt wire
```

## Modules à installer de manière globale
```js
npm i -g apidoc
npm i -g grunt-cli
npm i -g broccoli-cli
npm i -g bower
```

## Install dependencies
```js
bower i --save angular
npm i --save express
npm i --save-dev broccoli
```

## Run
```js
node server.js
```

## Wire
```js
grunt wire
```

## Build
```js
rm -rf dist && broccoli build dist
```
