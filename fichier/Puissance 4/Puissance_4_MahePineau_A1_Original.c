/**
* 
* \author Mahe Pineau
* \version 1.0
* \date 27 novembre 2022
*
* Ce programme propose est un puissance 4. Pour poser des pions, on doit d'abord sélectionner la colonne (avec d
* pour aller à droite) et q (pour aller à gauche). Une fois que vous voulez poser votre pion, vous devez appuyer
* sur la touche ESAPCE.
*/




/* introduction des bibliotheque */

#include <time.h>
#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <math.h>
#include <stdbool.h>




/* introduction des constantes */

/**
* \def  PION_A
* \brief Pion A
*
* C'est le pion du joueur A qui est donc représenté sons la forme d'un caractère: X 
*/
const char PION_A='X';

/**
* \def  PION_B
* \brief Pion B
*
* C'est le pion du joueur A qui est donc représenté sons la forme d'un caractère: 0
*/
const char PION_B='0';

/**
* \def  VIDE
* \brief afffiche un ESPACE
*
* C'est une constante de caractère qui permet d'initialiser la Grile
*/
const char VIDE=' ';

/**
* \def  INCONNU
* \brief Initialise le vainqueur
*
* Cette constante sert à initialiser le nom du vainqueur afin de ne pas mettre fin à la partie tout de suite.
* Il est aussi utiliser dans la boucle while du main afin d'arrêter la partie quand il y a un vainqueur.
*/
const char INCONNU = ' ';

/**
* \def  NBLIG
* \brief  Nombre de ligne
*
* Définie le nombre de ligne pour crée la grille mais aussi pour vérifier la taille du tableau.
*/
#define NBLIG  6

/**
* \def  NBCOL
* \brief  Nombre de colonne
*
* Définie le nombre de colonne pour crée la grille mais aussi pour vérifier la taille du tableau.
*/
#define NBCOL  7

/**
* \def  COLONNE_DEBUT
* \brief  Colonne de départ
*
* Cette varable permet de placer le pion dans la colonne du milieu afin de centré l'affichage quand on
* commence à chercher la colonne.
*/
const int COLONNE_DEBUT = NBCOL/2+1;


/**
* \typedef  Grille
* \brief  Grille de jeux
*
* Introduit le type Grille afin de crée un tableau à double entré (grâce au constante introduit précédemment).
* Ce dernier va contenir les pions des joueurs.
*/
typedef char Grille[NBLIG][NBCOL]; 


/* annonce de toutes les procedures */


void initGrille(Grille);
void afficher(Grille, char, int);
bool grillePleine (Grille);
void jouer(Grille, char, int*, int*);
int choisirColonne(Grille, char, int);
int trouverLigne(Grille, int);
bool estVainqueur(Grille, int, int);
void finDePartie(char);

int choisirColonneStrat(Grille g,char pion,int colonne, int ligne);
void jouerBot(Grille, char, int*, int*);
bool grilleVide(Grille g);
int freeWin(Grille g, char pion);
int danger(Grille g, int lig, int col);
int Win2(Grille g, int lig, int col);
int WinPasFree(Grille g, char pion);
int petitDanger(Grille g, int lig, int col);
int cotePlus(Grille g);

/* debut du main */

/**
* \fn int main()
* \brief Programme principal
* \return Code de sortie du programme (0 : sortie normale).
* 
* C'est le programme principale. il permet de joueur grâce au nombreuse procédure et il se termine quand il y a
* un vainqueur ou alors quand la Grile est pleine. 
*/
int main(){

    /* creation des variables */
    char vainqueur;
    int ligne, colonne;
    Grille g;

    /* initialisation de la grille */
    initGrille(g);

    /* initialisation de vaiqueur */
    vainqueur=INCONNU;

    /* affichage de la grille */
    afficher(g, PION_A, COLONNE_DEBUT);


    /* boucle permettant au jeu de fonctionner et qui se finis quand il y a un vainqueur ou quand la grille est pleine */
    while (vainqueur==INCONNU && grillePleine(g)!=true) {

        /* tour du joueur A */
        jouer(g, PION_A, &ligne, &colonne);

        /* affichage apres le tour du joueur A */
        afficher(g, PION_B, COLONNE_DEBUT);

        /* verification des cas de victoire et attribution du nom du vainqueur */
        if (estVainqueur(g, ligne, colonne)==true){
            vainqueur=PION_A;
        }

        /* ici on regarde si la grille n'est pas plein afin de faire jouer le joueur B */
        else if (grillePleine(g)==false){

            /* tour du joueur B */
            jouer(g,PION_B,&ligne,&colonne);

            /* affichage apres le tour du joueur B */
            afficher(g,PION_A,COLONNE_DEBUT);

            /* verification des cas de victoire et attribution du nom du vainqueur */
            if (estVainqueur(g,ligne,colonne)==true){
                vainqueur=PION_B;
            }
        }
    }

    /* affichage de fin de partie */
    finDePartie(vainqueur);
    return EXIT_SUCCESS;
}









/**
* \fn void initGrille(Grille g)
* \brief Procédure qui initialise la chaine
* \param g: paramètre de sortie qui représente le tableau à initialiser
*
* procedure qui remplit le tableau de la variable VIDE
*/
void initGrille(Grille g){

    /* introduction des variables */
    int i,j;

    /* double boucles for pour parcourir tout le tableau */
    for (i=0; i<NBLIG; i++){
        for (j=0; j<NBCOL; j++){

            /* attribution de la case du tableau par VIDE */
            g[i][j]=VIDE;
        }
    }
}


/**
* \fn void afficher(Grille g, char pion, int colonne)
* \brief Procédure qui affiche la grille
* \param g: paramètre de sortie qui représente le tableau à afficher
* \param pion: paramètre d'entré étant utiliser seulement afin d'être afficher.
* \param colonne: paramètre d'entré utiliser pour placer le pion au bonne endroit.
*
* procedure qui affiche le tableau conformément à ma maquette et affiche aussi le pion au dessus en fonction de la
* colonne.
*/
void afficher(Grille g, char pion, int colonne){

    /* effacement du terminal */
    system("clear");

    /* introduction des variables */
    int i,j;

    /* initialisation de ces dernieres */
    i=j=0;

    /* ici c'est l'espace entre le cote du terminal et la premiere colonne */
    printf("   ");

    /* boucle while permettant de mettre le bon nombre d'espace en fonction de la colonne */
    while (colonne>1){
        printf("      ");
        colonne=colonne-1;
    }

    /* affichage du pions au dessus de la grille */
    printf("%c",pion);
    printf("\n");
    printf("\n");
    printf("\n");

    /* affichage du haut du tableau */
    printf(" _____ _____ _____ _____ _____ _____ _____\n");

    /* boucle for pour faire tout les cases du tableau sauf la derniere. Elle est fait en 3 partie */

    for (i=0; i<6; i++){

        /* Partie 1: affichage de: |     |     |     |     |     |     |     | */
        for(j=0; j<7; j++){
            printf("|     ");
        }

        /* retour a la ligne */
        printf("|\n");

        /* Partie 2: affichage de:|  X  |  0  |  0  |     |  X  |     |     | */
        for(j=0; j<7; j++){
            printf("|  ");
            printf("%c",g[i][j]);
            printf("  ");
        }

        /* retourn a la ligne */
        printf("|\n");

        /* Partie 3: affichage de:|_____|_____|_____|_____|_____|_____|_____| */
        for(j=0; j<7; j++){
            printf("|_____");
        } 

        /* retourn a la ligne */
        printf("|\n");
    }

    /* affichage de la fin du tableau */
    printf("|/////|/////|/////|/////|/////|/////|/////|\n");
    printf("|  1  |  2  |  3  |  4  |  5  |  6  |  7  |\n");
    printf("|_____|_____|_____|_____|_____|_____|_____|\n");
}


/**
* \fn int trouverLigne(Grille g, int colonne)
* \brief Fonction qui vérifie si la colonne n'est pas pleine
* \param g: paramètre d'entrée qui représente la grille afin de tester si une colonne est plein.
* \param colonne: paramètre d'entré qui est utiliser pour savoir quel colonne doit être vérifier.
* \return renvoie l'indice  de la ligne si la colonne n'est pas plein et si elle est plein, retourne -1.
*
* Cette fonction regarde les lignes de la colonne et vérifie si elles sont différente de la contante VIDE.
* Quand elle trouve une Ligne de cette colonne vide, retourne la ligne en question. Si il n'en trouve pas,
* retourn -1.
*/
int trouverLigne(Grille g, int colonne){

    /* introduction et initialisation des variables */
    int i=0;

    /* boucle pour determiner la ligne ou on doit poser le pion */
    while (g[NBLIG-1+i][colonne]!=VIDE && i>-NBLIG){
        i--;
    }

    /* separation des cas et retournement des valeur de la ligne */
    if (NBLIG-1+i==-1){
        return -1;
    }
    else{
        return NBLIG-1+i;
    }
}

/**
* \fn int choisirColonne(Grille g,char pion,int colonne)
* \brief permet de choisir la colonne.
* \param g: paramètre d'entrée qui représente la grille et permet de l'utiliser pour vérifier la présence de colonnes mais aussi pour l'afficher.
* \param colonne: paramètre d'entré qui est utiliser pour bouger le pion de droite à gauche .
* \param pion: paramètre d'entré qui est là pour identifier les joueurs.
* \return renvoie la colonne sélectionner.
*
* Cette fonction permet de choisir sa colonne et déplaçant le pions qui se trouve au dessus de la Grille.
* Elle est récursive et affiche la grille quand on change la position du pion. Pour décider de choisir la colonne,
* il suffit d'appuyer sur ESPACE.
*/
int choisirColonne(Grille g,char pion,int colonne){

    /* introduction des variables */
    char dir,rien;

    /* affichage */
    printf("\n");
    printf("\n");
    printf("Choisit ta colonne\n");

    

    /* lecture de la touche en question et aussi le rc */
    scanf("%c%c",&dir,&rien);

    

    /* switch avec dir pour separer les cas */
    switch (dir)
    {
    case 'q':

        /* permet de deplacer le pions a gauche ou alors le met tout a droite si il est sur la colonne 1 */
        if (colonne<=1){
            colonne=7;
            /* affichage pour clear le terminale */
            afficher(g,pion,colonne);
            return choisirColonne(g,pion,colonne);
        }
        else{
            afficher(g,pion,colonne-1);
            return choisirColonne(g,pion,colonne-1);
        }
        break;
    case 'd':
        /* permet de deplacer le pion a droite ou alors le met tout a gauche si il est sur la colonne 7 */
        if (colonne>=7){
            colonne=1;
            afficher(g,pion,colonne);
            return choisirColonne(g,pion,colonne);
        }
        else{
            afficher(g,pion,colonne+1);
            return choisirColonne(g,pion,colonne+1);
        }
        break;
    case ' ':

            /* retourne la colonne ou le pions sera pose */   
            return colonne-1;
        break;
    default:
        /* traitement des cas avec des erreurs */
        afficher(g,pion,colonne);
        printf(" caractère non valide. Veuillez appuyer sur 'q' ou 'd' \n");
        return choisirColonne(g, pion, colonne);
        break;
    }
}



/**
* \fn bool grillePleine(Grille Grille)
* \brief Fonction vrifiant si la grille est pleine.
* \param g: paramètre d'entrée qui représente la grille pour vérifier si elle et pleine.
* \return un booléen true si elle est plein ou alors un booléen false si elle ne l'est pas.
*
* Parcours complet de la grille afin de vérifier si les élements sont différent de VIDE.
*/
bool grillePleine(Grille Grille){
    
    /* introduction des variables */
    int i,j;
    bool plein=true;

    /* double boucle pour parcourir tout le tableau */
    for (i=0;i<NBLIG;i++){
        for (j=0;j<NBCOL;j++){

            /* regarde si la case est vide si change le booleen si elle l'est */
            if (Grille[i][j]==VIDE){
                plein=false;
            }
        }
    }

    /* retourn ne booleen en question */
    return plein;
}


/**
* \fn void jouer(Grille g, char pion, int* ligne, int* colonne)
* \brief Procédure permettant de jouer (poser un pion).
* \param g: paramètre d'entré qui représente la grille.
* \param pion: paramètre d'entré qui sert à identifier le joueur.
* \param ligne: paramètre d'entré/sortie qui permet d'indiqué la ligne où placé le pion.
* \param colonne: paramètre d'entré/sortie qui permet d'indiqué la colonne où placé le pion.
*
* Permet de placer un pion et renvoie les valeurs de ligne et colonne afin de les réutiliser plus tard.
*/
void jouer(Grille g, char pion, int* ligne, int* colonne){

    /* choix de la colonne et attribution de la ligne */
    *colonne=choisirColonne(g, pion, COLONNE_DEBUT);
    *ligne=trouverLigne(g,*colonne);

    /* traitement du cas ou la ligne est pleine et fait donc rejouer jusqu'au moment ou on pourra poser le pion */
    if (*ligne==-1){
        printf("colonne plein, rejouez");
        while (*ligne==-1){
            *colonne=choisirColonne(g, pion, COLONNE_DEBUT);
            *ligne=trouverLigne(g, *colonne);
            if (*ligne==-1){
            printf("colonne plein, rejouez");
            }
        }
    }

    /* pose le pions dans le tableau */
    g[*ligne][*colonne]=pion;
}

/**
* \fn bool estVainqueur(Grille g, int lig, int col)
* \brief Fonction qui vérifie les cas de victoire
* \param g: paramètre d'entré qui introduit la grille.
* \param lig: paramètre d'entré qui permet de connaitre la ligne du dernier pion jouer
* \param col: paramètre d'entré qui permet de connaitre la colonne du dernier pion jouer.
* \return un booléen true si il y a un cas de victoire et false dans le cas inverse.
*
* Cette procédure permet d'identifier si il y a 4 pions consécutifs qui sont pareil que le pion posé.
* Elle vérifie donc si ils sont allignés de manière horizontale, verticale, et les 2 diagonales.
*/
bool estVainqueur(Grille g, int lig, int col){

    /* introduction des variables */
    int i=-3;
    int compt=1;
    bool vic=false;
    bool avant=false;

    /* Separation en 4 cas de victoire */


    /* Cas 1: horizontale */

    /* boucle pour observer 3 case avant et 3 case apres */
    while (i<=3 && vic!=true){
        
        /* verification de l'existance de cette case dans le tableau */
        if (col+i>=0 && col+i<NBCOL){

            /* verification de l'egalite des caracteres */
            if (g[lig][col+i]==g[lig][col]){

                /* regarde si le booleen est vrais afin d'incrementer le compteur uniquement quand c'est successif */
                if (avant==true){
                    compt+=1;
                }

                /* rend le booleen vrais afin d'incrementer le compteur si c'est encore le meme caractere */
                avant=true;
            }

            /* dans le cas ou c'est different, rend le booleen faux et reset le compteur */
            else{
                avant=false;
                compt=1;
            }
        }

        /* regarde si il y a 4 pions successif et si oui, change vic */
        if (compt>=4){
            vic=true;
        }

        /* incrementation de i */
        i++;
    }

    /* reinissialisation des variables */
    compt=1;
    i=-3;
    avant=false;

    /* Cas 2: verticalmement */

    /* exactement la meme chose que ci-dessus mais on remplace col par lig (grossierement) */
    while (i<=3 && vic!=true){
        if (lig+i>=0 && lig+i<NBLIG){
            if (g[lig+i][col]==g[lig][col]){
                if (avant==true){
                    compt+=1;
                } 
                else {
                    avant=true;
                }
                
            }
            else{
                avant=false;
                compt=1;
            }
        }
        if (compt==4){
            vic=true;
        }
        i++;
    }

    /* reinitialisation des caracteres */
    compt=1;
    i=3;
    avant=false;

    /* Cas 3: Diagonale */

    /* ici la logique reste la meme qu'avant mais ici au lieux de faire des col+i ou alors lig + i bah on fait col+i et lig+i */
    while (i>=-3 && vic!=true){
        if ((col+i>=0 && col+i<NBCOL)&&(lig+i>=0 && lig+i<NBLIG)){
            if (g[lig+i][col+i]==g[lig][col]){
                if (avant==true){
                    compt+=1;
                }
                avant=true;
            }
            else{
                avant=false;
                compt=1;
            }
        }
        if (compt>=4){
            vic=true;
        }
        i--;
    }

    /* reinitialisation des variables */
    compt=1;
    i=3;
    avant=false;

    /* Cas 4: l'autre diagonale */

    /* C'est exactement la meme chose qu'avant mais on met lig-i et col+i cette fois */
    while (i>=-3 && vic!=true){
        if ((col+i>=0 && col+i<NBCOL)&&(lig-i>=0 && lig-i<NBLIG)){
            if (g[lig-i][col+i]==g[lig][col]){
                if (avant==true){
                    compt+=1;
                }
                avant=true;
            }
            else{
                avant=false;
                compt=1;
            }
        }
        if (compt>=4){
            vic=true;
        }
        i--;
    }

    /* retourne le booleen */
    return vic;
}


/**
* \fn void finDePartie(char vainqueur)
* \brief procédure permettant de faire l'affichage final
* \param vainquer: donne le nom du vainquer.
*
* Cette procédure vérifie qui a gagner et afficher le nom du vainqueur ainsi que ses pions en conséquence.
*/
void finDePartie(char vainqueur){

    /* fait de l'espace */
    printf("\n");
    printf("\n");
    printf("\n");
    printf("\n");

    /* test les pour savoir qui est vaiquer et affiche le message adequat */
    if (vainqueur==PION_A){
        printf("VICTOIRE DU JOUEUR AVEC LES PIONS %c",PION_A);
    }
    if(vainqueur==VIDE){ 
        printf("MATCH NUL");
    }
    if (vainqueur==PION_B){
        printf("VICTOIRE DU JOUEUR AVEC LES PIONS %c",PION_B);
    }
    printf("\n");
    printf("\n");
    printf("\n");
}

