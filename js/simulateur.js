var pays = new Array("France", "Etats-Unis", "Italie", "Grèce", "Japon", "Espagne"); //tableau contenant les pays
var ville = new Array();//tableau contenant les villes
ville[0] = new Array("Paris", "Marseille", "Lyon");
ville[1] = new Array("New-York", "San Francisco", "Los Angeles");
ville[2] = new Array("Rome", "Venise", "Florence");
ville[3] = new Array("Mykonos", "Athènes", "Santorin");
ville[4] = new Array("Tokyo", "Kyoto", "Osaka");
ville[5] = new Array("Barcelone", "Madrid", "Malaga");


class Hotel {
    constructor(nomHotel, nomVille, note, prix) {
        this.nomHotel = nomHotel;
        this.nomVille = nomVille;
        this.note = note;
        this.prix = prix;
    }

}



//Création des objets Hotel
var hotel1 = new Hotel("Hotel Eiffel", "Paris", 6.8, 99);
var hotel2 = new Hotel("Hotel Roi de Sicile", "Paris", 9.6, 318);
var hotel3 = new Hotel("B&B| Les terrasses de l'étoiles", "Marseille", 9.5, 115);
var hotel4 = new Hotel("Hotel F1 La Valentine", "Marseille", 6.9, 42);
var hotel5 = new Hotel("Le cocon Champetre", "Lyon", 10, 128);
var hotel6 = new Hotel("Le Victor Augagneur", "Lyon", 5.9, 40);
var hotel7 = new Hotel("Hotel Pennsylvania", "New-York", 5.6, 126);
var hotel8 = new Hotel("Sanctuary Hotel New York", "New-York", 8.4, 143);
var hotel9 = new Hotel("The Opal", "San Francisco", 8.1, 133);
var hotel10 = new Hotel("El Capitan Hotel", "San Francisco", 4.9, 57);
var hotel11 = new Hotel("Avenue Hotel", "Los Angeles", 8.2, 161);
var hotel12 = new Hotel("Hollywood Stay", "Los Angeles", 6.4, 40);
var hotel13 = new Hotel("Hotel Fidene", "Rome", 7.3, 36);
var hotel14 = new Hotel("Welcome Piram Hotel", "Rome", 8.2, 178);
var hotel15 = new Hotel("Residenza Universitaria Gesuiti", "Venise", 7.4, 59);
var hotel16 = new Hotel("Eurostars Residenza Cannaregio", "Venise", 8.5, 188);
var hotel17 = new Hotel("Hotel Mirage", "Florence", 7.1, 117);
var hotel18 = new Hotel("Grand Hotel Adriatico", "Florence", 8.6, 280);
var hotel19 = new Hotel("Pension Marina Tourlos", "Mykonos", 5.7, 61);
var hotel20 = new Hotel("Hotel Tago", "Mykonos", 9.2, 162);
var hotel21 = new Hotel("Deans City Center Rooms", "Athènes", 8.1, 25);
var hotel22 = new Hotel("Radisson Blu Park Hotel Athens", "Athènes", 7.7, 159);
var hotel23 = new Hotel("Katerina & John's Hotel", "Santorin", 6.9, 31);
var hotel24 = new Hotel("Golden Grey Goose", "Santorin", 9.2, 421);
var hotel25 = new Hotel("Book And Bed Tokyo Asakusa", "Tokyo", 8.7, 29);
var hotel26 = new Hotel("Grand Nikko Tokyo Daiba", "Tokyo", 8.9, 210);
var hotel27 = new Hotel("Guest House Kyoto Inn", "Kyoto", 8.8, 21);
var hotel28 = new Hotel("Hotel Granvia Kyoto", "Kyoto", 9, 202);
var hotel29 = new Hotel("Hotel Mikado", "Osaka", 8.4, 21);
var hotel30 = new Hotel("Swissotel Nankai Osaka", "Osaka", 8.8, 262);
var hotel31 = new Hotel("Sun & Moon Hostel", "Barcelone", 7.4, 64);
var hotel32 = new Hotel("Ilunion Barcelona", "Barcelone", 8.3, 222);
var hotel33 = new Hotel("Motion Chueca", "Madrid", 6.4, 37);
var hotel34 = new Hotel("Only You Hotel Atocha", "Madrid", 9.3, 270);
var hotel35 = new Hotel("Hostel Malaga City", "Malaga", 6.1, 41);
var hotel36 = new Hotel("Luxury Apartement Malaga Center", "Malaga", 8.9, 157);


//Déclaration du tableau contenant les hotels
var tabHotels = new Array();

//Ajout des hotels dans le tableau
tabHotels[0] = hotel1;
tabHotels[1] = hotel2;
tabHotels[2] = hotel3;
tabHotels[3] = hotel4;
tabHotels[4] = hotel5;
tabHotels[5] = hotel6;
tabHotels[6] = hotel7;
tabHotels[7] = hotel8;
tabHotels[8] = hotel9;
tabHotels[9] = hotel10;
tabHotels[10] = hotel11;
tabHotels[11] = hotel12;
tabHotels[12] = hotel13;
tabHotels[13] = hotel14;
tabHotels[14] = hotel15;
tabHotels[15] = hotel16;
tabHotels[16] = hotel17;
tabHotels[17] = hotel18;
tabHotels[18] = hotel19;
tabHotels[19] = hotel20;
tabHotels[20] = hotel21;
tabHotels[21] = hotel22;
tabHotels[22] = hotel23;
tabHotels[23] = hotel24;
tabHotels[24] = hotel25;
tabHotels[25] = hotel26;
tabHotels[26] = hotel27;
tabHotels[27] = hotel28;
tabHotels[28] = hotel29;
tabHotels[29] = hotel30;
tabHotels[30] = hotel31;
tabHotels[31] = hotel32;
tabHotels[32] = hotel33;
tabHotels[33] = hotel34;
tabHotels[34] = hotel35;
tabHotels[35] = hotel36;



window.addEventListener("load", function () {

    //On créé la liste des pays
    for (let i = 0; i < pays.length; i++) {
        let x = document.querySelector("#lst_pays");
        let option = document.createElement("option");
        option.text = pays[i];
        option.value = i;
        x.add(option);
    }
    
    console.log(tabHotels[0].nomHotel);
    
    //Quand on choisit un pays, on affiche les villes en conséquence.
    document.querySelector("#lst_pays").addEventListener("click", function () {
        console.log(document.querySelector("#lst_pays").value);
        let valeurPays = document.querySelector("#lst_pays").value; //On récupère la valeur du pays
        document.querySelector("#lst_ville").length = 0;//on supprime tout


        //on créé la liste des villes en fonction de la valeur du pays
        for (let i = 0; i < ville[valeurPays].length; i++) {//on ré-écrit les villes
            let x = document.querySelector("#lst_ville");
            let option = document.createElement("option");
            option.text = ville[valeurPays][i];
            option.value = ville[valeurPays][i];
            x.add(option);
        }

        //On affiche
        document.querySelector("#div_ville").style.display = "block";
    });

    //Lorsqu'on sélectionne une ville, on affiche les hotels en conséquence.
    document.querySelector("#lst_ville").addEventListener("click", function () {
        let nomVille = document.querySelector("#lst_ville").value;//On recupère le nom de la ville
        document.querySelector("#lst_hotel").length = 0;//on supprime tout
        for (let i = 0; i < tabHotels.length; i++) {//on créé la liste des hotels suivant la ville selectionnée
            if (nomVille === tabHotels[i].nomVille) {
                let x = document.querySelector("#lst_hotel");
                let option = document.createElement("option");
                option.text = tabHotels[i].nomHotel;
                x.add(option);
            }
           
        }
        document.querySelector("#div_hotel").style.display = "block";// on affiche

    });

    document.querySelector("#lst_hotel").addEventListener("click", function () {
        parcourirTabHotels(document.querySelector("#lst_hotel").value);
    });



    //On met des écouteurs sur le formulaire pour afficher en temps réél
    let tabInputs = window.document.querySelectorAll("input");
    for (let i = 0; i < tabInputs.length; i++) {
        tabInputs[i].addEventListener("click", function () {
            calculPrixVoyage(document.querySelector("#lst_hotel").value);
        });
        tabInputs[i].addEventListener("keyup", function () {
            calculPrixVoyage(document.querySelector("#lst_hotel").value);
        });
    }

});

/*
 * Cette fonction permet de calculer le prix d'un voyage
 */
function calculPrixVoyage(nomHotel) {
    let prixhotel = 0;
    let nbrnuits = 0;
    let nbrpers = 0;
    let prixfinal = 0;

    for (let i = 0; i < tabHotels.length; i++) {
        if (tabHotels[i].nomHotel === nomHotel) {
            prixhotel = tabHotels[i].prix;
        }
    }
    nbrnuits = document.querySelector("#nbr_nuits").value;
    nbrpers = document.querySelector("#nbr_pers").value;
    let date = document.querySelector("#date_depart").value;

    let dateTab = date.split('-');
    let mois = dateTab[1];
    if (mois === "07" || mois === "08" || mois === "12") {
        prixhotel += prixhotel * (20 / 100);
    }
    prixfinal = nbrnuits * prixhotel * nbrpers;
    console.log("Prix du séjour :" + prixfinal);
    document.querySelector("#txt_prixtotal").innerHTML = prixfinal + "€";


}

function parcourirTabHotels(nomHotel) {
    
    for (let i = 0; i < tabHotels.length; i++) {
        if (tabHotels[i].nomHotel === nomHotel) {
            
            //Affiche le nom de l'hotel
            console.log("Nom : " + tabHotels[i].nomHotel);
            document.querySelector("#txt_nom").innerHTML = tabHotels[i].nomHotel;

            //Affiche le prix 
            console.log("Prix : " + tabHotels[i].prix);
            document.querySelector("#txt_prix").innerHTML = tabHotels[i].prix + "€";

            //On affiche le prix lorsqu'on clique sur la date
            document.querySelector("#date_depart").addEventListener("click", function () {
                let prixinit = tabHotels[i].prix;
                let prixaff = tabHotels[i].prix;
                //On recupère le mois
                let date = document.querySelector("#date_depart").value;
                let dateTab = date.split('-');
                let mois = dateTab[1];
                
                //on change le prix en fonction du mois
                if (mois === "07" || mois === "08" || mois === "12") {
                    prixaff += prixaff * (20 / 100);
                    document.querySelector("#txt_prix").innerHTML = prixaff + "€";
                }else{
                     document.querySelector("#txt_prix").innerHTML = prixinit + "€";
                }
            });

            //On affiche la note
            console.log("Note : " + tabHotels[i].note);
            document.querySelector("#txt_note").innerHTML = tabHotels[i].note + "/10";
            return;
        }
    }
}