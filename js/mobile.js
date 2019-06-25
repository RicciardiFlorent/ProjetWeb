/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.addEventListener("load", function () {
    document.querySelector("#lien_europe").addEventListener("click", function () {
        if (window.innerWidth >= 768) {
            console.log("ordi");
            document.querySelector("#lien_europe").href = "#";

        } else {
            console.log("portable");
            document.querySelector("#lien_europe").href = "/ProjetWeb/pages/europe.html";

        }
    });
    
        document.querySelector("#lien_monde").addEventListener("click", function () {
        if (window.innerWidth >= 768) {
            console.log("ordi");
            document.querySelector("#lien_monde").href = "#";

        } else {
            console.log("portable");
            document.querySelector("#lien_monde").href = "/ProjetWeb/pages/restemonde.html";

        }
    });
});


    