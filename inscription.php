<?php
?>
<!DOCTYPE html>
<html>
    <meta>
    <head>
        <title>Mon TP</title>
        <link rel="stylesheet" type="text/css" href="tp.css">
        <script src="tp.js"  type="text/javascript"></script>
    </head>
    <body>
        <div class="form">
            <h3 style="text-align: center;">Inscrivez-vous</h3>
            <form name="tp" method="post" action="producer.php">
                <label for="nom">Nom d'utilisateur: </label>
                <input type="text" name="nom" id="nom" placeholder="Votre nom"><br>
                <label for="age">Age: </label>
                <input type="number" name="age" id="age" placeholder="Votre age"><br>
                <label for="mdp">Mot de passe: </label>
                <input type="password" name="mdp" id="mdp" placeholder="Votre mot de passe"><br>
                <label for="cmdp">Confirmer mot de passe: </label>
                <input type="password" name="cmdp" id="cmdp" placeholder="Votre mot de passe"><br>
                <label for="des">Topic: </label>
                <input type="text" name="des" id="des" maxlength="255" placeholder="Votre topic"><br>
                <input type="checkbox" name="accepter" value="accepter" id="accepter" onclick="return verBut();">Accepter<br>
                <input type="submit" id="submit" value="Valider" disabled>
                <input type="reset" id="reset" value="Effacer">
            </form>
        </div>
    </body>
</html>