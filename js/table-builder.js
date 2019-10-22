/**
 * Listener - az se stranka nacte, triggerne funkci generateBody
 */
window.addEventListener("load", function () {
    generateBody();
});

/**
 * AJAX pro ziskani XML souboru
 * @param path cesta k souboru
 * @param callback co se vykona, az se soubor ziska
 */
let getXMLFile = function (path, callback) {
    var xhttp = new XMLHttpRequest();
    //xhttp.setRequestHeader("Content-Type", "text/xml");
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback(this.responseXML);
        }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
};

/**
 *Metodaa, ktera si zavola getXMLFile a ziskany soubor zpracuje do tabulky
 */
function generateBody() {
    getXMLFile("../xml/zamestnanci.xml", function (xml) {
        var employees_table = $('#employe-table tbody:first');
        var all_emploees = xml.getElementsByTagName('employee');

        for (let index = 0; index < all_emploees.length; index++) {
            var tr = "<tr>";
            tr += "<td>";
            tr += xml.getElementsByTagName('id')[index].childNodes[0].nodeValue;
            tr += "</td>";
            tr += "<td>";
            tr += xml.getElementsByTagName('full-name')[index].childNodes[0].nodeValue;
            tr += "</td>";
            tr += "<td>";
            tr += xml.getElementsByTagName('position')[index].childNodes[0].nodeValue;
            tr += "</td>";
            tr += "<td>";
            tr += "<a href='mailto:" + xml.getElementsByTagName('email')[index].childNodes[0].nodeValue +
                "'>";
            tr += xml.getElementsByTagName('email')[index].childNodes[0].nodeValue;
            tr += "</a>";
            tr += "</td>";
            tr += "<td>";
            tr += xml.getElementsByTagName('phone-number')[index].childNodes[0].nodeValue;
            tr += "</td>";
            tr += "<td>";
            tr += xml.getElementsByTagName('username')[index].childNodes[0].nodeValue;
            tr += "</td>";
            tr += "</tr>";

            employees_table.append(tr);
        }
    });

}

    
