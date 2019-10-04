# Renforcement #2

__Tout se passe dans js/script.js, il n'est pas utile d'ouvrir les autres fichiers. 
Pensez à utiliser l'inspecteur et la console !__

Le but de cet exercice est de réaliser un jeu du Tic Tac Toe.

## Partie 1
Générer un tableau à deux dimensions (de taille 3x3) et rempli de 0.
Ce tableau contiendra 0 pour une case vide, puis par la suite 1 pour une croix, -1 pour un cercle.
Vous pouvez donc déjà déclarer une variable "turn" qui aura pour valeur 1 (ou -1 si vous préférez que les cercles commencent).

Il faudra ensuite écrire une fonction "render" qui, en partant de ce tableau, générera le HTML nécessaire. 
Ainsi, il vous faudra créer autant de div qu'il y a d'éléments dans le tableau. Ces divs doivent avoir les attributs suivants : 
- la classe "cell"
- un id correspondant au numéro de ligne et numéro de colonne séparé par un tiret. Ainsi la case tout en haut à gauche du plateau aura pour id "0-0", la case à sa droite "0-1", la case sous la première "1-0", etc.

Toutes ces divs devront être placées dans l'élément, déjà présent, correspondant au plateau de jeu.

__Cette fonction render sera appelé à chaque coup d'un joueur, il faudra donc remplacer le contenu du plateau par celui fraîchement généré, pensez donc à vider le plateau avant d'y ajouter les nouvelles divs !__

## Partie 2
Implémenter une fonction "play". Celle-ci sera par la suite appelée au clic sur une case du plateau de jeu.
Il faudra donc récupérer le numéro de ligne et de colonne de la case cliquée (contenus dans son id), vérifier si le tableau contient un 0 aux indices définis par le numéro de ligne et de colonne, et, si c'est le cas, remplacer ce 0 par un 1 si c'est le tour des croix, ou un -1 si c'est le tour des cercles. Le tour passe donc à l'autre joueur et le plateau est mis à jour (grâce à la fonction render).

Mettre à jour la fonction render pour que la fonction play soit appelée au clic sur l'une des divs.

## Bonus
Implémenter une fonction qui se chargera de vérifier si l'un des joueurs a gagné. Appeler cette fonction dans la fonction play, après chaque coup.

Pour rappel, les conditions possibles de victoire sont :
- Le même symbole est présent dans les 3 cases d'une ligne
- Le même symbole est présent dans les 3 cases d'une colonne
- Le même symbole est présent dans les 3 cases d'une diagonale

Afficher une alerte en cas de victoire.