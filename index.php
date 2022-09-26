 
<?php 

include 'header.html';
$cible = isset($_GET['cible'])?$_GET['cible']:null;

switch ($cible){
    case 1 :
        include 'main.html';
    break;
    case 2 :
        include 'mention.php';
    break;
    default :
        include 'main.html';
    break;
}

include 'footer.html';