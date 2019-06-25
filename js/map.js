/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * 
 * 
 * Cette page contient le code js concernant la carte du monde
 */

/*
 * 
 *  Pays visités:
 *  
 *  Les numéros correspondants à l'endroit où se trouvent les pays dans le tableau infos_pays
 *  
 *  0-Angleterre
 *  1-Croatie
 *  2-Espagne
 *  3-Etats-Unis
 *  4-France
 *  5-Grèce
 *  6-Italie
 *  7-Maroc 
 *  8-Pays-Bas
 *  9-Portugal
 *  10-Russie
 *  11-Suisse
 *  
 *  
 */

/*
 * -tableau  contenant les informations sur les pays, l'ordre des pays est donné ci-dessus.
 * -le tableau contient la capitale, la devise et le nombre d'habitants de chaque pays.
 */
var infos_pays = new Array();
infos_pays[0] = new Array("Londres", "Livre sterling", "65 105 246");
infos_pays[1] = new Array("Zagreb", "Kuna Croate", "4 105 493");
infos_pays[2] = new Array("Madrid", "Euro", "48 958 159 ");
infos_pays[3] = new Array("Washington DC", "Dollar Américain", "327 167 434 ");
infos_pays[4] = new Array("Paris", "Euro", "67 795 000");
infos_pays[5] = new Array("Athènes", "Euro", "10 738 000");
infos_pays[6] = new Array("Rome", "Euro", "60 483 973");
infos_pays[7] = new Array("Rabat", "Dirham marocain", "34 314 130");
infos_pays[8] = new Array("Amsterdam", "Euro", "17 108 799");
infos_pays[9] = new Array("Lisbonne", "Euro", "10 291 027");
infos_pays[10] = new Array("Moscou", "Rouble", "146 780 700");
infos_pays[11] = new Array("Berne", "Euro", "8 482 200");


/*
 * Cette fonction permet de récupèrer le titre, la valeur d'un pays cliqué et 
 * d'afficher ensuite les informations le concernant.
 * @returns {undefined}
 */
var afficherPays = function () {
    
    let attribute = this.getAttribute("title");//récupère le titre de l'élèment sélectioné
    let valeur = this.getAttribute("value");//récupère la valeur de l'élèment value
    
    console.log(attribute);
    console.log(valeur);

    document.querySelector("#nom_pays").innerHTML = attribute;//Affiche le nom du pays.


    //Si la valeur de l'élèment n'est pas nulle, on affiche les informations le concernant;
    if (valeur !== null) {
        //On recupère les bonnes valeurs dans le tableau infos_pays
        let capitale = infos_pays[valeur][0];
        let devise = infos_pays[valeur][1];
        let population = infos_pays[valeur][2];

        //On affiche les informations 
        document.querySelector("#capitale_pays").innerHTML = "Capitale : " + capitale;
        document.querySelector("#devise_pays").innerHTML = "Devise : " + devise;
        document.querySelector("#population_pays").innerHTML = "Population : " + population;
    } else {
        document.querySelector("#capitale_pays").innerHTML = "Aucune information sur ce pays!";
        document.querySelector("#devise_pays").innerHTML = "";
        document.querySelector("#population_pays").innerHTML = "";
    }






};


window.addEventListener("load", function () {

    //On recupère dans un tab les éléments de la classe land.
    let tabLand = document.querySelectorAll(".land");
    
    //Pour chaque élément de notre tableau, on lui ajoute un évènement afficherPays lorsqu'on clique dessus.
    for (let i = 0; i < tabLand.length; i++) {
        tabLand[i].addEventListener('click', afficherPays, false);
    }


});


$(function() {
  panZoomInstance = svgPanZoom('#svg_map', {
    zoomEnabled: true,
    controlIconsEnabled: true,
    fit: true,
    center: true,
    minZoom: 0.1
  });
  
  // zoom out
  panZoomInstance.zoom(1);


});

