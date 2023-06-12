DROP SCHEMA IF EXISTS transmusical CASCADE;
CREATE SCHEMA transmusical;
SET SCHEMA 'transmusical';



CREATE TABLE GROUPE_ARTISTE (
    id_groupe_artiste      character  NOT NULL,
    nom_groupe_artiste     character  NOT NULL,
    site_web               character  NOT NULL,
   
    an_debut               integer    NOT NULL,
    an_sortie_discographie integer    NOT NULL,
    origine                character  NOT NULL,          
    CONSTRAINT GROUPE_ARTISTE_pk PRIMARY KEY (id_groupe_artiste)
);
CREATE TABLE ANNEE (
    an                          integer    NOT NULL,
    CONSTRAINT ANNEE_pk PRIMARY KEY (an)
);
CREATE TABLE PAYS (
    nom_p                       character NOT NULL,
    CONSTRAINT PAYS_pk PRIMARY KEY (nom_p)
);  
CREATE TABLE VILLE (
    nom_v                       character NOT NULL,
   
    nom_p                       character NOT NULL,
    CONSTRAINT VILLE_pk PRIMARY KEY (nom_v)
);
CREATE TABLE EDITION (
    nom_edition                 character NOT NULL,
   
    an_edition                  int NOT NULL,
    CONSTRAINT EDITION_pk PRIMARY KEY (nom_edition)
);
CREATE TABLE LIEU (
    id_lieu                     character   NOT NULL,
    nom_lieu                    character NOT NULL,
    acces_pmr                   boolean NOT NULL,
    capacite_max                integer    NOT NULL,
    type_lieu                   character NOT NULL,
   
    nom_v                       character NOT NULL,
    CONSTRAINT LIEU_pk PRIMARY KEY (id_lieu)
);
CREATE TABLE REPRESENTATION (
    numero_representation       character NOT NULL,
    heure                       character NOT NULL,
    date_representation         date NOT NULL,
   
    id_lieu                     character  NOT NULL,
    id_groupe                   character  NOT NULL,
    no_concert                  character  NOT NULL,      
    CONSTRAINT REPRESENTATION_pk PRIMARY KEY (numero_representation)
);
CREATE TABLE CONCERT (
    no_concert                character NOT NULL,
    titre                     character NOT NULL,
    resume                    character NOT NULL,
    duree                     integer    NOT NULL,
    tarif                     float NOT NULL,
   
    type_m                    character NOT NULL,
    nom_edition_concert       character NOT NULL,
    CONSTRAINT CONCERT_pk PRIMARY KEY (no_concert)
);
CREATE TABLE TYPE_MUSIQUE (
    type_m                    character NOT NULL,
    CONSTRAINT TYPE_MUSIQUE_pk PRIMARY KEY (type_m)
);
CREATE TABLE FORMATION (
    libelle_formation         character NOT NULL,
    CONSTRAINT FORMATION_pk PRIMARY KEY (libelle_formation)
);



-----------------------------------------------------------------------------------------



CREATE TABLE TYPE_PONCTUEL (
    type_m_ponctuel character NOT NULL,
    id_groupe_artiste_ponctuel character NOT NULL,
    CONSTRAINT SE_DEROULE_pk PRIMARY KEY (type_m_ponctuel, id_groupe_artiste_ponctuel)
);

CREATE TABLE TYPE_PRINCIPAL (
    type_m_principal character NOT NULL,
    id_groupe_artiste_principal character NOT NULL,
    CONSTRAINT SE_DEROULE_pk PRIMARY KEY (type_m_principal, id_groupe_artiste_principal)
);

CREATE TABLE A_POUR (
    libelle_formation_ap character NOT NULL,
    id_groupe_artiste_ap character NOT NULL,
    CONSTRAINT SE_DEROULE_pk PRIMARY KEY (libelle_formation_ap, id_groupe_artiste_ap)
);


------------------------------------------------------------------------




ALTER TABLE GROUPE_ARTISTE
  ADD CONSTRAINT GROUPE_ARTISTE_fk_ANNEE_DEBUT
  FOREIGN KEY(an_debut) REFERENCES ANNEE(an),
 
  ADD CONSTRAINT GROUPE_ARTISTE_fk_ANNEE_DISCO
  FOREIGN KEY(an_sortie_discographie) REFERENCES ANNEE(an),
 
  ADD CONSTRAINT GROUPE_ARTISTE_fk_PAYS
  FOREIGN KEY(origine) REFERENCES PAYS(nom_p);



ALTER TABLE VILLE
  ADD CONSTRAINT VILLE_fk_PAYS
  FOREIGN KEY(nom_p) REFERENCES PAYS(nom_p);


ALTER TABLE LIEU
  ADD CONSTRAINT LIEU_fk_VILLE
  FOREIGN KEY(nom_v) REFERENCES VILLE(nom_v);
 

ALTER TABLE REPRESENTATION
  ADD CONSTRAINT REPRESENTATION_fk_LIEU
  FOREIGN KEY(id_lieu) REFERENCES LIEU(id_lieu),
 
  ADD CONSTRAINT REPRESENTATION_fk_GROUPE_ARTISTE
  FOREIGN KEY(id_groupe) REFERENCES GROUPE_ARTISTE(id_groupe_artiste),
 
  ADD CONSTRAINT REPRESENTATION_fk_CONCERT
  FOREIGN KEY(no_concert) REFERENCES CONCERT(no_concert);
 

ALTER TABLE EDITION
  ADD CONSTRAINT EDITION_fk_ANNEE
  FOREIGN KEY(an_edition) REFERENCES ANNEE(an);


ALTER TABLE CONCERT
  ADD CONSTRAINT CONCERT_fk_TYPE_MUSIQUE
  FOREIGN KEY(type_m) REFERENCES TYPE_MUSIQUE(type_m),
 
  ADD CONSTRAINT CONCERT_fk_EDITION
  FOREIGN KEY(nom_edition_concert) REFERENCES EDITION(nom_edition);

----------------------------------------------------------------------------------------------

--CREATE TABLE SE_DEROULE (
--    nom_edition_deroule character NOT NULL,
--    no_concert_deroule character NOT NULL,
--    CONSTRAINT SE_DEROULE_pk PRIMARY KEY (nom_edition_deroule, no_concert_deroule)
--);
--ALTER TABLE SE_DEROULE
--  ADD CONSTRAINT SE_DEROULE_fk_CONCERT
--  FOREIGN KEY(no_concert_deroule) REFERENCES CONCERT(no_concert);
 
--  ADD CONSTRAINT SE_DEROULE_fk_EDITION
--  FOREIGN KEY(nom_edition_deroule) REFERENCES EDITION(nom_edition);
 
----------------------------------------------------------------------------------------------






ALTER TABLE TYPE_PONCTUEL
  ADD CONSTRAINT TYPE_PONCTUEL_fk_GROUPE_ARTISTE
  FOREIGN KEY(id_groupe_artiste_ponctuel) REFERENCES GROUPE_ARTISTE(id_groupe_artiste);
 
  ADD CONSTRAINT TYPE_PONCTUEL_fk_TYPE_MUSIQUE
  FOREIGN KEY(type_m_ponctuel) REFERENCES TYPE_MUSIQUE(type_m);
----------------------------------------------------------------------------------------------
ALTER TABLE TYPE_PRINCIPAL
  ADD CONSTRAINT TYPE_PRINCIPAL_fk_GROUPE_ARTISTE
  FOREIGN KEY(id_groupe_artiste_principal) REFERENCES GROUPE_ARTISTE(id_groupe_artiste);
 
  ADD CONSTRAINT TYPE_PRINCIPAL_fk_TYPE_MUSIQUE
  FOREIGN KEY(type_m_principal) REFERENCES TYPE_MUSIQUE(type_m);
----------------------------------------------------------------------------------------------
ALTER TABLE A_POUR
  ADD CONSTRAINT A_POUR_fk_GROUPE_ARTISTE
  FOREIGN KEY(id_groupe_artiste_ap) REFERENCES GROUPE_ARTISTE(id_groupe_artiste);
 
  ADD CONSTRAINT TYPE_PRINCIPAL_fk_FORMATION
  FOREIGN KEY(libelle_formation_ap) REFERENCES FORMATION(libelle_formation);







































































































































































































































































































































































































































































































































































































































































































































































































































--DEDICACE A DOMINGO T'ES FINITO, ZEN MEILLEUR EMISSION, POPCORN LAISSE TA PLACE AKHY... A Reflechir.. -Alexian et Mahé. 19/01/2023/11;12;42s