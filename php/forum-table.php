<?php

/**
 *  Vypíše obsah pole do tabulky a uloží ji do souboru. + vypise potvrzeni reCAPTCHA
 * @param array $pole Vstupni pole.
 * @return string       HTML pro vytvoreni tabulky.
 */
function vypisPole($pole)
{
    if (count($pole) == 0) {
        echo "Prazdne pole.";
    } else {
        //reCaptcha
        $recaptcha = json_decode(file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=6LdayboUAAAAANMD16iSFxjx1YAOirjkAO7p0jwC&response=' . $_POST['g-recaptcha-response']));
        echo "reCAPTCHA: ";
        if ($recaptcha->{'success'} == 'true') {
            echo('Uživatel je člověk.');
        } else {
            echo('Uživatel není člověk.<br>');
            if ($recaptcha->{'error-codes'}) {
                echo('Při ověřování nastala chyba: ');
                if ($recaptcha->{'error-codes'} == 'missing-input-secret') {
                    echo('Secret kód nebyl serveru předán');
                } elseif ($recaptcha->{'error-codes'} == 'invalid-input-secret') {
                    echo('Secret kód je neplatný');
                } elseif ($recaptcha->{'error-codes'} == 'missing-input-response') {
                    echo('Odpověď klienta nebyla serveru předána');
                } elseif ($recaptcha->{'error-codes'} == 'invalid-input-response') {
                    echo('Odpověď klienta je neplatná');
                }
            }
        }

        // prevedu pole na tabulku
        $htmlTabulka = vytvorTabulku($pole); // vytvoří z pole tabulku
        return $htmlTabulka;
    }
    return;
}

/**
 * Vypíše obsah pole do tabulky. Používá rekurzi na vložená pole a pokud není u prvku vyplněna hodnota, tak vypíše "nezadáno".
 * @param array $pole Vstupni pole.
 * @return string         HTML pro vytvoreni tabulky.
 */
function vytvorTabulku($pole)
{
    // hlavicka tabulky
    $textTabulky = "<table border><tr><th>key</th><th>value</th></tr>";
    // radky tabulky
    foreach ($pole as $key => $value) { // procházím pole
        // minimalisticke reseni
        $textTabulky .= "<tr><td>" . $key . "</td><td>"
            . ((is_array($value))
                ? vytvorTabulku($value)
                : (((trim($value) == "") ? ">>> nezadáno <<<" : $value)
                    . "</td></tr>")); // vypise nebo rekurze
    }
    // konec tabulky
    $textTabulky .= "</table>";
    return $textTabulky;
}

/*
 * https://github.com/madostal/kiv-web/blob/master/cviceni/nykl/04-PHP-zaklady/04-PHP-zaklady-reseni.zip
 * https://www.itnetwork.cz/php/bezpecnost/nova-recaptcha-tutorial
*/
?>
