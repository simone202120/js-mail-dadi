let maildom = document.getElementById("mail");
let verifica = document.getElementById("verifica")
let ListaInvitati = ["gionni@pippo", "gionny@pluto", "pippo@pluo", "pippo@gionny", "paperino@topolino"];

verifica.addEventListener("click",
    function()  {

        for (let i = 0; i < ListaInvitati.length; i++){

            if(maildom == ListaInvitati[i]){
                alert("entra pure");
            }else
             alert("riprova con un'altra mail")
        }

    }

)