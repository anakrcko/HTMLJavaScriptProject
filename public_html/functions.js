var x;
function ucitajXML()
{
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.open("GET","uloge.xml",false);
    xmlhttp.send();
    var xmlDoc= xmlhttp.responseXML;
    
    x= xmlDoc.getElementsByTagName("GLUMAC");
}
function prikazi()
{
    var pokazi= document.getElementById("tabela");
    var tabela="<table><th>Glumac:</th><th>Uloga:</th>";
    for(i=0;i<x.length;i++)
    {
        ime = x[i].getElementsByTagName("IME")[0].childNodes[0].nodeValue;
        tabela +="<tr><td>" + ime + "</td><td>";
        uloge = x[i].getElementsByTagName("ULOGE")[0].getElementsByTagName("ULOGA");
        for(j=0;j<uloge.length;j++)
        {
            uloga = uloge[j].childNodes[0].nodeValue;
            tabela+= uloga + "<br>" ;
        }
        tabela += "<td><button onclick='detaljno("+i+")'>Detalji</button></td></tr>";
        tabela+="</td></tr>";
        
    }
    tabela+="</table>";
    pokazi.innerHTML = tabela;
}

function detaljno(i)
{
    var prikazi = document.getElementById("prikaz");
    var tekst = "<table>";
    
    tekst+= "<tr><th colspan='2' ><span>"+x[i].getElementsByTagName("IME")[0].childNodes[0].nodeValue + "<br><br></span></th></tr>";
    
    tekst+= "<tr><td colspan='2' style='text-align:center'><img src='images/" + x[i].getElementsByTagName("OPIS")[0].getElementsByTagName("slika")[0].childNodes[0].nodeValue + "' width='220' height='299'/></td></tr>"; 
    
    tekst += "<tr><th>Born</th><td>" + x[i].getElementsByTagName("OPIS")[0].getElementsByTagName("ime")[0].childNodes[0].nodeValue + "<br>" + x[i].getElementsByTagName("OPIS")[0].getElementsByTagName("datum")[0].childNodes[0].nodeValue + "<br>"  +x[i].getElementsByTagName("OPIS")[0].getElementsByTagName("mesto")[0].childNodes[0].nodeValue + " </td></tr>";
    
    tekst += "<tr><th>Home&#160;town</th><td> "+ x[i].getElementsByTagName("OPIS")[0].getElementsByTagName("zivi")[0].childNodes[0].nodeValue +" </td></tr></table>";
    prikazi.innerHTML = tekst;
}
