# sdpv3
Le site de prom's, le vrai !

## Changer de branche
git checkout maBranche
(pour créer la branche, ajouter -b)

## Accéder à la documentation de l'api
* [Facultatif] Vérifier que apidoc est installé (npm i -g apidoc)
* [Facultatif] Générer la documentation en exécutant docgen.sh
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
