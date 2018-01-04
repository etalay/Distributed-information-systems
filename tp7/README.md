# tp7sir

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

Ce TP est basé principalement sur le TP4sir et surtout sur la partie REST et qui permet de créer une simple interface en utilisant Angular JS.
L'interface est genérée par Yeoman via la commande yo.
Nous interessant ici au dossier app qui contient nos fichiers essentiels:

app/scripts/controllers: dans cette section nous avons créé le contrôleur MainCtrl dans le fichier main.js qui a pour rôle :
lister les différentes personnes  qu’on a créé dans le tp4 avec  JAX-RS  et  qu’on récupère en utilisant $http ayant comme URL le même URL Rest du TP4 (http://localhost:9000/rest/person) ,  sachant  que dans le tp4 c’était sur le port 8080 d’où  l’utilisation d’un proxy.
Remarque : la liste des personnes sont dans la liste déroulante  avec la possibilité de faire un filtre sur le nom ou prénom.
Ajouter une personne en cliquant sur le bouton ajouter, qui permet de  créer une personne via le  formulaire et ceci en utilisant un service « ajout » qui récupère la liste des personnes. on  ajoute la nouvelle personne en utilisant  $save dans la méthode ajouter (voir le code pour plus de clarté).

app/views: ici nous avons une simple page html qui  a deux champs : name et firstname et une liste déroulante qui représente la liste des personnes créés et enfin un bouton ajouter
