<?php
require_once "../php/forum-table.php"
?>

<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Výstup</title>
</head>
<body>
<h1>Výstup formuláře</h1>

<div>
    <strong>Post:</strong> <br>
    <?php
    // vypíše pole do tabulky
    echo vypisPole($_POST);
    ?>
</div>
</body>
</html>
