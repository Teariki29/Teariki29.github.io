import time

# Définition de l'échiquier
n = int(input("Entrez la taille de l'échiquier : "))

# Création du nombre adéquat de "-" pour séparer les échiquiers pendant les animations
trait="--------"
trait=trait*(n-1)+"-"

# Initialisation de l'échiquier
echiquier = [["." for i in range(n)] for j in range(n)]

# Définition des mouvement possible d'un cavalier
coup = [(2,1),(1,2),(-1,2),(-2,1),(-2,-1),(-1,-2),(1,-2),(2,-1)]

# Fonction pour trouver le prochain mouvement possible
def prochain_coup(pos):
    coup_suivant = [] 
    for deplacement in coup: # Boucle pour fair tout les coups possible d'un cavalier
        pos_suivante = (pos[0]+deplacement[0], pos[1]+deplacement[1]) # Atribution des coordonné de la position après un coup de cavalier
        if pos_suivante[0]>=0 and pos_suivante[0]<n and pos_suivante[1]>=0 and pos_suivante[1]<n and echiquier[pos_suivante[0]][pos_suivante[1]]==".": # Vérification sur la position du cavalier après le coup (si il est sur l'échiquier ou si il est déjà passer par cette case)
            compteur = 0 # Initialisation de "compteur" qui va être utilisé afin de compté le nombre de coup possible
            for m in coup: # Boucle Similaire à celle de la ligne 19
                test_pos = (pos_suivante[0]+m[0], pos_suivante[1]+m[1]) # Exactement pareil que la ligne 20
                if test_pos[0]>=0 and test_pos[0]<n and test_pos[1]>=0 and test_pos[1]<n and echiquier[test_pos[0]][test_pos[1]]==".": # Exactement pareil que la ligne 21
                    compteur += 1 # Incrémentation à chaque chemin possible
            coup_suivant.append((pos_suivante,compteur)) # Ajout de tout les coups avec le nombre de coup possible après avoir jouer
    coup_suivant.sort(key=lambda x: x[1]) # Triage de coup_suivant par rapport au nombre de coups possible après avoir joué (compteur). Le trie est fait de manière croissante
    return [deplacement[0] for deplacement in coup_suivant] # Renvoie une liste contenant les déplacement de coup_suivant

# Fonction pour résoudre le problème du tour du cavalier
def soluce(pos, compteur):
    echiquier[pos[0]][pos[1]] = compteur # Remplissage de l'échiquier par un nombre (numéro du coup jouer par le cavalier)

    # Affichage du coup en question
    if animation:
        time.sleep(1)
        print("Coup :",compteur,"\n")
        print(trait,"\n")
        for i in range(n):
            for j in range(n):
                print(echiquier[i][j], end="\t")
            print("\n")
        print(trait,"\n")

    if compteur == n*n: # Fin de la récursivité si le cavalier à parcourut toute la boucle
        return True
    else:
        for pos_suivante in prochain_coup(pos): # Boucle utilisant la récursivité afin de faire jouer le cavalier grâce à prochain_coup
            if soluce(pos_suivante, compteur+1): # Incrémentation du compteur afin d'identifier le numéro du coup
                return True
    return False

# Definition de la position de départ

lig = int(input("Ligne de départ du cavalier : "))
while lig>n or lig<1:
    lig = int(input("Réponse non valide. Veuillez recommencer la saisie"))
col = int(input("Colonne de départ du cavalier : "))
while col>n or col<1:
    lig = int(input("Réponse non valide. Veuillez recommencer la saisie"))


# Choix de la présence de l'animation
anim = int(input("Désirez vous voir les coups jouer sous forme d'animation ? (taper 1 pour oui et 2 pour non)"))
while anim!=1 and anim!=2:
    anim = int(input("Réponse non valide. Veuillez recommencer la saisie"))
if anim==1:
    animation=True
else:
    animation=False


# Avant l'appel de la fonction
start_time = time.time()

# Execution du programme
if soluce((lig-1,col-1),1):
    for i in range(n):
        for j in range(n):
            print(echiquier[i][j], end="\t") # Affichage de l'echiquier final
        print("\n")
else: # Si il n'y a pas de coup jouable, Affiche qu'il n'y a pas de solution possible
    print("Pas de solution")

# Après l'appel de la fonction
end_time = time.time()
if animation:
    print("Temps d'exécution :", end_time - start_time - n*n, "secondes")
else:
    print("Temps d'exécution :", end_time - start_time, "secondes")
