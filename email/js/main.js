let maildom = document.getElementById("mail");
let verifica = document.getElementById("verifica")
const Lista = ["gionni@pippo", "gionny@pluto", "pippo@pluo", "pippo@gionny", "paperino@topolino"];
let entrata ="no";

verifica.addEventListener("click",
    function()  {

        for (let i = 0; i < Lista.length; i++){

            if(maildom.value == Lista[i]){
                 entrata ="si";
            }
        }
        if (entrata == "si"){
            alert("entra");

        }else {
            alert("riprova");
        }
    }

)