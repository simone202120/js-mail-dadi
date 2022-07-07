let giocatore1 = document.getElementById("giocatore1");
let giocatore2 = document.getElementById("giocatore2");
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let numgen1;
let numgen2;
let controllo = document.getElementById("controllo")

giocatore1.addEventListener("click",
    function() {
       numgen1 = Math.round(Math.random()*5)+1;
       numero1.innerHTML = numgen1;
    }
)

giocatore2.addEventListener("click",
    function() {
       numgen2 = Math.round(Math.random()*5)+1;
       numero2.innerHTML = numgen2;
    }
)

controllo.addEventListener("click",
    function() {
        if(numgen1 == numgen2){
            alert("Pareggio");
        }else if (numgen1 > numgen2){
            alert("Hai vinto tu");
        }else{
            alert("ha vinto il PC");
        }
    }
)