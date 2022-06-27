<?php
//configuracion para acceder a la bd
functon conn(){
    $hostname="https://leilagregorio67.netlify.app/";
    $usuariodb="root";
    $password="";
    $dbname="bacesita";
    $conectar=msqli_connect($hostname,$usuariodb,$password,$dbname);
    return $conectar;
 }
?>