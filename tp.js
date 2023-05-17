function verif(){
    var nom = document.tp.nom;
    var age = document.tp.age;
    var mdp = document.tp.mdp;
    var cmdp = document.tp.cmdp;
    var des = document.tp.des;
    var nbr = parseInt(age.value);
    if(nom.value.length<2){
        if(nom.value==""){
            alert("Le nom ne doit pas etre vide!");
            nom.focus();   
            return false;
        }
        alert("nombre de caractere insuffisant!");
        nom.focus();
        return false;
    }
    if(des.value==""){
        alert("Le topic ne doit pas etre vide!");
        des.focus();
        return false;
    }
    if(nbr<=10 || age.value==""){
        if(age.value==""){
            alert("Le champ Age doit etre obligatoire!");
            age.focus();
            return false;
        }
        alert("L'age doit etre superieur a 10 ans!");
        age.focus;
        return false;
    }
    if(mdp.value==""){
        alert("Le mot de passe ne doit pas etre vide!");
        mdp.focus();
        return false;
    }
    else{
        if(cmdp.value==""){
            alert("Le mot de passe de confirmation ne doit pas etre vide!");
            cmdp.focus();
            return false;
        }
        else{
            if(mdp.value!=cmdp.value){
                alert("Les mots de passe sont differents!");
                mdp.focus();
                return false;
            }
        }
    }
    
    return true;
}

function verBut(){
    var submit = document.tp.submit;
    var check = document.tp.accepter;
    if(check.checked && verif()){
        submit.disabled = false;
        return true;
    }
    else{
        submit.disabled = true;
        check.checked = false;
        return false;
    }
}

function confirme(){
    if(verBut()){
        var result = confirm("Voulez-vous vraiment sauvegarder?");
        if(result){
            alert("Enregistrement reussi!");
            return true;
        }
        else{
            alert("Echec!");
            return false;
        }
    }
}