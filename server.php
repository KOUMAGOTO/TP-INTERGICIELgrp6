<?php

function conn(){
    $host='localhost';
    $db = 'tp';
    $user='root';
    $pass='';
    $con = new PDO("mysql: host=$host; dbname=$db", $user, $pass);
    return $con;
}
?>
