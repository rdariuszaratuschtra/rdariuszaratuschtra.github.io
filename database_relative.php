<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<title>R. Darius Zaratuschtra</title>
	
<link rel="stylesheet" href="./darius3_db.css">
<script type="text/javascript" language="JavaScript" src="./scripts/imagepopup.js"></script>

<script type="text/javascript" language="JavaScript">

// get filename
filename = window.location.pathname;
filename = filename.substring(filename.lastIndexOf("/")+1, filename.length);


function showCategory(which) {
	// if there is an order or limit variable in the query string we should retain it
	var order = getQueryVariable("order");
	var limit = getQueryVariable("limit");
	var query = "";
	if (order != null) query += "&order=" + order;
	if (limit != null) query += "&limit=" + limit;
	
	window.location = filename + "?cat=" + which.value + query;
}

function showMaterial(which) {	
	// if there is an order or limit variable in the query string we should retain it
	var order = getQueryVariable("order");
	var limit = getQueryVariable("limit");
	var query = "";
	if (order != null) query += "&order=" + order;
	if (limit != null) query += "&limit=" + limit;
	
	window.location = filename + "?mat=" + which.value + query;
}

function showYear(which) {
	// if there is an order or limit variable in the query string we should retain it
	var order = getQueryVariable("order");
	var limit = getQueryVariable("limit");
	var query = "";
	if (order != null) query += "&order=" + order;
	if (limit != null) query += "&limit=" + limit;
	
	window.location = filename + "?year=" + which.value + query;
}


function showSearch(which) {
	// if there is an order or limit variable in the query string we should retain it
	var order = getQueryVariable("order");
	var limit = getQueryVariable("limit");
	var query = "";
	if (order != null) query += "&order=" + order;
	if (limit != null) query += "&limit=" + limit;
	
	window.location = filename + "?search=" + which.value + query;
}


function showPage(number) {
	window.location = filename + setQueryVariable("page", number);
}


function setOrder(which) {
	window.location = filename + setQueryVariable("order", which.value);
}

function setLimit(which) {
	//var url = document.URL;
	//url = url.substring(url.lastIndexOf("/")+1, url.length);
	//alert(url);
	//alert(window.location.search);
	//query = window.location.search;
	//filename = window.location.pathname;
	//filename = filename.substring(filename.lastIndexOf("/")+1, filename.length);	
	//alert(filename);	
	
	window.location = filename + setQueryVariable("limit", which.value);	
}


// Gets query variable if present, otherwise returns null
function getQueryVariable(variable) {
	var query = window.location.search; 
	query = query.substring(1, query.length);
	
    var vars = query.split("&"); 
    for (var i=0;i<vars.length;i++) { 
    	var pair = vars[i].split("="); 
    	if (pair[0] == variable) { 
        	return pair[1];
        }
  	}
  	
  	// return null if nothing found
	return null;
}


// Sets query variable if present, otherwise appends it
function setQueryVariable(variable, value) { 
	var query = window.location.search;
	
	var new_query = "";
	
	if (query.indexOf("?") == -1) {
		//alert("got no query and no variable");
		// slap on the query string with ?
		new_query = "?" + variable + "=" + value;
		return new_query;
	} else {	
		if (query.indexOf(variable + "=") == -1) {
			//alert("got query but no variable");
			// slap on the query string with &
			return new_query += query + "&" + variable + "=" + value;
		} else {
			//alert("got query and variable");
			query = query.substring(1, query.length);	
			new_query = "?";
		 
	    	var vars = query.split("&");     
	    
		    for (var i=0;i<vars.length;i++) { 
		    	var pair = vars[i].split("=");
		    	//alert(pair[0] + " " + pair[1]);
		    	
		    	if (pair[0] == variable) {
		        	// set the new value
		        	pair[1] = value;  	
		        }
		              
		        new_query += pair[0] + "=" + pair[1];
		        //alert(new_query);
		        if (i<vars.length-1) new_query += "&";               
		  	}
		  	
		  	// return the new query string
		  	//alert(new_query);  	     	
		    return new_query;	
		}
	}
		
}

                    

</script>
</head>


<body>
<div id="shadow1">
<div id="header"></div>
</div>


<div id="shadow2">
<!-- <div id="test5"> -->

<div id="nav">
<script type="text/javascript" src="./milonic_src.js"></script>
<noscript><!-- <a href="http://www.milonic.com/">JavaScript DHTML Pull Down Menus From Milonic.com</a> --></noscript>
<script	type="text/javascript">
if(ns4)_d.write("<scr"+"ipt type=text/javascript src=./mmenuns4.js><\/scr"+"ipt>");
  else _d.write("<scr"+"ipt type=text/javascript src=./mmenudom.js><\/scr"+"ipt>");
</script>
<!-- <script type="text/javascript" src="changecolorsbyclick.js"></script> -->
<script type="text/javascript" src="./menu_data.js"></script>
</div>


<div id="content">


<div id="test4">
<div id="test3">


<?php
//echo "hallo<br>\n";
?>

<br><br><br>

<div id="search">
<!-- <form method="get" action="darius4.php"> -->
<!-- NOTE: we need return false; otherwise the form will submit normally and showSearch() will not be called -->
<form name="form1" onSubmit="showSearch(this.search); return false;">	
    <input type="text" name="search" value="Zoekterm" onClick="this.value=''" />&nbsp;
    <input type="submit" value=" Zoek " class="button" />
    <!--<input type="hidden" name="sentform" value="true" />-->
</form>
</div>

<div id="category">
<select onChange="showCategory(this)">
	<option>Categorie:</option>
	<option id="Alle Werken" 	 	 value="-1">Alle Werken</option>
	<option id="Cultuurschappen" 	 value="0">Cultuurschappen</option>
	<option id="Landschappen" 		 value="1">Landschappen</option>
	<option id="Zelfportretten" 	 value="2">Zelfportretten</option>
	<option id="Portretten" 		 value="3">Portretten</option>
	<option id="Verhoudingen" 		 value="4">Intermenselijke Relaties / Verhoudingen</option>
	<option id="Studies" 			 value="5">Studies / Tekeningen</option>
	<option id="Wachtenden" 		 value="6">Wachtenden / Naamlozen</option>
	<option id="Individuen" 		 value="7">Individuen</option>
	<option id="Paardenschilderijen" value="8">Paardenschilderijen</option>
	<option id="Paardenbeelden" 	 value="9">Paardenbeelden</option>
	<option id="Glas-in-lood" 		 value="10">Glas-in-lood</option>
</select>
<select onChange="showMaterial(this)">
	<option>Materiaal:</option>
	<option id="Acryl" 	 			value="0">Acryl</option>
	<option id="Aquarel" 			value="1">Aquarel</option>
	<option id="Brons " 	 		value="2">Brons</option>
	<option id="Bruin krijt " 		value="3">Bruin krijt</option>
	<option id="Eigen bloed" 	 	value="4">Eigen bloed</option>
	<option id="Ets" 		 		value="5">Ets</option>
	<option id="Ets (ingekleurd)"	value="6">Ets (ingekleurd)</option>
	<option id="Gem. tech." 	 	value="7">Gemengde techniek</option>
	<option id="Gouache" 	 		value="8">Gouache</option>
	<option id="Heliografie" 	 	value="9">Heliografie</option>
	<option id="Houtskool" 	 		value="10">Houtskool</option>
	<option id="Ind.inkt" 	 		value="11">Indische inkt</option>
	<option id="Krijt" 	 			value="12">Krijt</option>
	<option id="Litho" 	 			value="13">Lithografie</option>
	<option id="Ol.o.bord" 		 	value="14">Olieverf op bord</option>
	<option id="Ol.o.doek" 	 		value="15">Olieverf op doek</option>
	<option id="Ol.o.hout" 			value="16">Olieverf op hout</option>
	<option id="Ol.o.karton" 	 	value="17">Olieverf op karton</option>
	<option id="Ol.o.lin." 	 		value="18">Olieverf op linnen</option>
	<option id="Ol.o.p." 		 	value="19">Olieverf op papier</option>
	<option id="Oliekrijt" 	 		value="20">Oliekrijt</option>
	<option id="Oliepastel" 	 	value="21">Oliepastel</option>
	<option id="Pastel" 	 		value="22">Pastel</option>
	<option id="Pentekening" 	 	value="23">Pentekening</option>
	<option id="Potlood" 		 	value="24">Potlood</option>
</select>
<select onChange="showYear(this)">
	<option>Jaar:</option>
	<option id="1984" value="1984">1984</option>
	<option id="1985" value="1985">1985</option>
	<option id="1986" value="1986">1986</option>
	<option id="1987" value="1987">1987</option>
	<option id="1988" value="1988">1988</option>
	<option id="1989" value="1989">1989</option>
	<option id="1990" value="1990">1990</option>
	<option id="1991" value="1991">1991</option>
	<option id="1992" value="1992">1992</option>
	<option id="1993" value="1993">1993</option>
	<option id="1994" value="1994">1994</option>
	<option id="1995" value="1995">1995</option>
	<option id="1996" value="1996">1996</option>
	<option id="1997" value="1997">1997</option>
	<option id="1998" value="1998">1998</option>
	<option id="1999" value="1999">1999</option>
	<option id="2000" value="2000">2000</option>
	<option id="2001" value="2001">2001</option>
	<option id="2002" value="2002">2002</option>
	<option id="2003" value="2003">2003</option>
	<option id="2004" value="2004">2004</option>
	<option id="2005" value="2005">2005</option>
	<option id="2006" value="2006">2006</option>
</select>
</div>

<div id="sort">
<select onChange="setOrder(this)">
	<option>Sorteren:</option>
	<option id="Titel [A-Z]" 	value="0">Titel [A-Z]</option>
	<option id="Titel [Z-A]" 	value="1">Titel [Z-A]</option>
	<option id="Jaar [0-9]" 	value="2">Jaar [0-9]</option>
	<option id="Jaar [9-0]" 	value="3">Jaar [9-0]</option>
	<option id="Prijs [0-9]" 	value="4">Prijs  [0-9]</option>
	<option id="Prijs [9-0]" 	value="5">Prijs [9-0]</option>
</select>
<select onChange="setLimit(this)">
	<option>Aantal:</option>
	<option id="5" 		value="5" 	>5</option>
	<option id="10" 	value="10"  >10</option>
	<option id="20" 	value="20"  >20</option>
	<option id="30" 	value="30"  >30</option>
	<option id="50" 	value="50"  >50</option>
	<option id="100" 	value="100" >100</option>
</select>
</div>

<br><br>


<?php
// first get a mysql connection
$db = mysql_connect("localhost", "rdariuszaratusc", "hkeZHsAD");
mysql_select_db("rdariuszaratusc", $db);


$table_arr = array(
	"Cultuurschappen",
	"Landschappen",
	"Zelfportretten",
	"Portretten",
	"Verhoudingen",
	"Studies",
	"Wachtenden",
	"Individuen",
	"Paardenschilderijen",
	"Paardenbeelden",
	"Glas-in-lood"
);

$table_name_cat_arr = array(
	"Cultuurschappen",
	"Landschappen",
	"Zelfportretten",
	"Portretten",
	"Intermenselijke Relaties / Verhoudingen",
	"Studies / Tekeningen",
	"Wachtenden / Naamlozen",
	"Individuen",
	"Paardenschilderijen",
	"Paardenbeelden",
	"Glas-in-lood"
);

$table_name_mat_arr = array(
	"Acryl",
	"Aquarel",
	"Brons",
	"Bruin krijt",
	"Eigen bloed",
	"Ets",
	"Ets (ingekleurd)",
	"Gemengde techniek",
	"Gouache",
	"Heliografie",
	"Houtskool",
	"Indische inkt",
	"Krijt",
	"Lithografie",
	"Olieverf op bord",
	"Olieverf op doek",
	"Olieverf op hout",
	"Olieverf op karton",
	"Olieverf op linnen",
	"Olieverf op papier",
	"Oliekrijt",
	"Oliepastel",
	"Pastel",
	"Pentekening",
	"Potlood"
);



// Performing SQL query
//$query = 'SELECT * FROM `' . $table . "`";

//&query = "";


// get order and limit
$order = "ORDER BY `Jaar` ASC";
if ($_GET['order'] != NULL) {
	$key = $_GET['order'];
	switch ($key)
	{
		case 0: $order = "ORDER BY `Titel` ASC"; 	break;
		case 1: $order = "ORDER BY `Titel` DESC"; 	break;
		case 2: $order = "ORDER BY `Jaar` ASC"; 	break;
		case 3: $order = "ORDER BY `Jaar` DESC"; 	break;
		case 4: $order = "ORDER BY `Prijs` ASC"; 	break;
		case 5: $order = "ORDER BY `Prijs` DESC"; 	break;
	}
}
	
$limit = "10";
if ($_GET['limit'] != NULL)
	$limit = $_GET['limit'];
	
	
// TODO: limit should not really be a query limit but the limit for
// the amount of records per page. The query limit should not be present
// because we want all the results from the query.

// TODO: order on Prijs does not work properly because it is a VARCHAR. That
// means that € 1000,- will come earlier than € 925,- for ASC. Sorting will be done
// alphabetically instead of numerically. For Jaar it just happens to work
// because the strings are all have 4 characters.



$query = "(SELECT * FROM `Cultuurschappen`)" .
	" UNION (SELECT * FROM `Landschappen`)" .
	" UNION (SELECT * FROM `Zelfportretten`)" .
	" UNION (SELECT * FROM `Portretten`)" .
	" UNION (SELECT * FROM `Verhoudingen`)" .
	" UNION (SELECT * FROM `Studies`)" .
	" UNION (SELECT * FROM `Wachtenden`)" .
	" UNION (SELECT * FROM `Individuen`)" .
	" UNION (SELECT * FROM `Paardenschilderijen`)" .
	" UNION (SELECT * FROM `Paardenbeelden`)" .
	" UNION (SELECT * FROM `Glas-in-lood`)"; // .
	//" " . $order .
	//" LIMIT 0, " . $limit;
	
	


//$query = "SELECT * FROM `Glas-in-lood`";


// NOTE: $_GET returns a string, when doing e.g. if ($cat == 2) we
// compare it to an int an get all sorts of unpredictable results
// even to the point of totally hosing the script, or worse: it
// works with e.g. if ($cat == 6) but not if ($cat == 7). Sucks!!!
// NOTE2: PHP's dynamic typing totally sucks.
//$cat = "";
//$cat = "0";
if ($_GET['cat'] != NULL)
	$cat = $_GET['cat'];
	
//echo "cat: " . ($cat);
if ($cat == "0") $query = "SELECT * FROM `Cultuurschappen` 		"; // . " " . $order . " LIMIT 0, " . $limit;
if ($cat == "1") $query = "SELECT * FROM `Landschappen` 		"; // . " " . $order . " LIMIT 0, " . $limit;
if ($cat == "2") $query = "SELECT * FROM `Zelfportretten` 		"; // . " " . $order . " LIMIT 0, " . $limit;
if ($cat == "3") $query = "SELECT * FROM `Portretten` 			"; // . " " . $order . " LIMIT 0, " . $limit;
if ($cat == "4") $query = "SELECT * FROM `Verhoudingen` 		"; // . " " . $order . " LIMIT 0, " . $limit;
if ($cat == "5") $query = "SELECT * FROM `Studies` 				"; // . " " . $order . " LIMIT 0, " . $limit;
if ($cat == "6") $query = "SELECT * FROM `Wachtenden` 			"; // . " " . $order . " LIMIT 0, " . $limit;
if ($cat == "7") $query = "SELECT * FROM `Individuen` 			"; // . " " . $order . " LIMIT 0, " . $limit;
if ($cat == "8") $query = "SELECT * FROM `Paardenschilderijen` 	"; // . " " . $order . " LIMIT 0, " . $limit;
if ($cat == "9") $query = "SELECT * FROM `Paardenbeelden` 		"; // . " " . $order . " LIMIT 0, " . $limit;
if ($cat == "10") $query = "SELECT * FROM `Glas-in-lood` 		"; // . " " . $order . " LIMIT 0, " . $limit;



//$mat = "0";
if ($_GET['mat'] != NULL)
	$mat = $_GET['mat'];
	
//echo $mat;
if ($mat != NULL) {

	//echo "mat not NULL";
	$material = "";

	switch ($mat)
	{
		// use regexpr
		case "0": $material = "^Acryl"; 										break;
		case "1": $material = "^Aq"; 											break;
		case "2": $material = "^Brons"; 										break;
		case "3": $material = "^(Bruin krijt|Bruin k)"; 						break;
		case "4": $material = "^Eigen bloed"; 									break;
		case "5": $material = "^Ets"; 											break;
		case "6": $material = "^Ets [[.(.]]ingekleurd[[.).]]"; 					break;
		case "7": $material = "^(Gem.|Gemengde)"; 								break;
		case "8": $material = "^Gouache"; 										break;
		case "9": $material = "^Heliografie"; 									break;
		case "10": $material = "^Houtskool"; 									break;
		case "11": $material = "^(Ind.inkt|Indische|Oost)"; 					break;
		case "12": $material = "^Krijt"; 										break;
		case "13": $material = "^Litho"; 										break;
		case "14": $material = "^(Ol.o.bord|Ol.o.b|Olie o.b|Olieverf o.b)"; 	break;
		case "15": $material = "^(Ol.o.doek|Ol.o.d|Olie o.d|Olieverf o.d)"; 	break;
		case "16": $material = "^(Ol.o.hout|Ol.o.h|Olie o.h|Olieverf o.h)"; 	break;
		case "17": $material = "^(Ol.o.karton|Ol.o.k|Olie o.k|Olieverf o.k)"; 	break;
		case "18": $material = "^(Ol.o.linnen|Ol.o.l|Olie o.l|Olieverf o.l)"; 	break;
		case "19": $material = "^(Ol.o.papier|Ol.o.p|Olie o.p|Olieverf o.p)"; 	break;
		case "20": $material = "^Oliekrijt"; 									break;
		case "21": $material = "^(Oliepastel|Oliepast)"; 						break;
		case "22": $material = "^(Pastel|Past)"; 								break;
		case "23": $material = "^(Pentekening|Pen)"; 							break;
		case "24": $material = "^(Potlood|Potl)"; 								break;
	}

	// NOTE: Using single quotes '' around the string we are searching is obligatory. Unfortunately,
	// this way we will only find the exact strings. However, we need to find both Aq. and Aquarel when
	// looking for watercolour paintings
	/*$query =   "(SELECT * FROM `Cultuurschappen` 		WHERE `Materiaal` = '" . $material . "')" .
		" UNION (SELECT * FROM `Landschappen` 			WHERE `Materiaal` = '" . $material . "')" .
		" UNION (SELECT * FROM `Zelfportretten` 		WHERE `Materiaal` = '" . $material . "')" .
		" UNION (SELECT * FROM `Portretten` 			WHERE `Materiaal` = '" . $material . "')" .
		" UNION (SELECT * FROM `Verhoudingen` 			WHERE `Materiaal` = '" . $material . "')" .
		" UNION (SELECT * FROM `Studies` 				WHERE `Materiaal` = '" . $material . "')" .
		" UNION (SELECT * FROM `Wachtenden` 			WHERE `Materiaal` = '" . $material . "')" .
		" UNION (SELECT * FROM `Individuen` 			WHERE `Materiaal` = '" . $material . "')" .
		" UNION (SELECT * FROM `Paardenschilderijen` 	WHERE `Materiaal` = '" . $material . "')" .
		" UNION (SELECT * FROM `Paardenbeelden` 		WHERE `Materiaal` = '" . $material . "')" .
		" UNION (SELECT * FROM `Glas-in-lood` 			WHERE `Materiaal` = '" . $material . "')" .
		" ORDER BY `Jaar` ASC";*/

	/*$query =   "SELECT * FROM `Cultuurschappen` 		WHERE STRCMP(`Materiaal`, '" . $material . "') = 1" .
		" UNION SELECT * FROM `Landschappen` 			WHERE STRCMP(`Materiaal`, '" . $material . "') = 1" .
		" UNION SELECT * FROM `Zelfportretten` 			WHERE STRCMP(`Materiaal`, '" . $material . "') = 1" .
		" UNION SELECT * FROM `Portretten` 				WHERE STRCMP(`Materiaal`, '" . $material . "') = 1" .
		" UNION SELECT * FROM `Verhoudingen` 			WHERE STRCMP(`Materiaal`, '" . $material . "') = 1" .
		" UNION SELECT * FROM `Studies` 				WHERE STRCMP(`Materiaal`, '" . $material . "') = 1" .
		" UNION SELECT * FROM `Wachtenden` 				WHERE STRCMP(`Materiaal`, '" . $material . "') = 1" .
		" UNION SELECT * FROM `Individuen` 				WHERE STRCMP(`Materiaal`, '" . $material . "') = 1" .
		" UNION SELECT * FROM `Paardenschilderijen` 	WHERE STRCMP(`Materiaal`, '" . $material . "') = 1" .
		" UNION SELECT * FROM `Paardenbeelden` 			WHERE STRCMP(`Materiaal`, '" . $material . "') = 1" .
		" UNION SELECT * FROM `Glas-in-lood` 			WHERE STRCMP(`Materiaal`, '" . $material . "') = 1" .
		" ORDER BY `Jaar` ASC";*/


	// NOTE: doing fulltext search "Brons" will find nothing for "Brons".
	// This is because too many columns in the Paardenbeelden table contain that word for it to be considered relevant.
	// Fulltext searching is a natural language search that does not return small words or stopwords or irrelevant words.
	// Read the docs. For a small dataset regexp is a better choice.
	/*$query =   "(SELECT * FROM `Cultuurschappen` 		WHERE MATCH (`Materiaal`) AGAINST ('" . $material . "'))" .
		" UNION (SELECT * FROM `Landschappen` 			WHERE MATCH (`Materiaal`) AGAINST ('" . $material . "'))" .
		" UNION (SELECT * FROM `Zelfportretten` 		WHERE MATCH (`Materiaal`) AGAINST ('" . $material . "'))" .
		" UNION (SELECT * FROM `Portretten` 			WHERE MATCH (`Materiaal`) AGAINST ('" . $material . "'))" .
		" UNION (SELECT * FROM `Verhoudingen` 			WHERE MATCH (`Materiaal`) AGAINST ('" . $material . "'))" .
		" UNION (SELECT * FROM `Studies` 				WHERE MATCH (`Materiaal`) AGAINST ('" . $material . "'))" .
		" UNION (SELECT * FROM `Wachtenden` 			WHERE MATCH (`Materiaal`) AGAINST ('" . $material . "'))" .
		" UNION (SELECT * FROM `Individuen` 			WHERE MATCH (`Materiaal`) AGAINST ('" . $material . "'))" .
		" UNION (SELECT * FROM `Paardenschilderijen` 	WHERE MATCH (`Materiaal`) AGAINST ('" . $material . "'))" .
		" UNION (SELECT * FROM `Paardenbeelden` 		WHERE MATCH (`Materiaal`) AGAINST ('" . $material . "'))" .
		" UNION (SELECT * FROM `Glas-in-lood` 			WHERE MATCH (`Materiaal`) AGAINST ('" . $material . "'))" .
		" ORDER BY `Jaar` ASC";*/

	$query =   "(SELECT * FROM `Cultuurschappen` 		WHERE `Materiaal` REGEXP '" . $material . "')" .
		" UNION (SELECT * FROM `Landschappen` 			WHERE `Materiaal` REGEXP '" . $material . "')" .
		" UNION (SELECT * FROM `Zelfportretten` 		WHERE `Materiaal` REGEXP '" . $material . "')" .
		" UNION (SELECT * FROM `Portretten` 			WHERE `Materiaal` REGEXP '" . $material . "')" .
		" UNION (SELECT * FROM `Verhoudingen` 			WHERE `Materiaal` REGEXP '" . $material . "')" .
		" UNION (SELECT * FROM `Studies` 				WHERE `Materiaal` REGEXP '" . $material . "')" .
		" UNION (SELECT * FROM `Wachtenden` 			WHERE `Materiaal` REGEXP '" . $material . "')" .
		" UNION (SELECT * FROM `Individuen` 			WHERE `Materiaal` REGEXP '" . $material . "')" .
		" UNION (SELECT * FROM `Paardenschilderijen` 	WHERE `Materiaal` REGEXP '" . $material . "')" .
		" UNION (SELECT * FROM `Paardenbeelden` 		WHERE `Materiaal` REGEXP '" . $material . "')" .
		" UNION (SELECT * FROM `Glas-in-lood` 			WHERE `Materiaal` REGEXP '" . $material . "')"; // .
		//" " . $order .
		//" LIMIT 0, " . $limit;


}






// NOTE: Again we get a string here and the script totally fucks up
// no debug message or anything. PHP is hell. If we do: if ($i == &year) echo &year;
// with year being a string the script fucks up and won't load. Sucks big time!
// NONO: We were inadvertently using & instead of $ for year. Bloody hell. We should
// really get a script checker/debugger because PHP gives us no clue here. Sucks again.
// NOTE: Things are better with PHP error messages turned on at the server...you dope.
//$year = "1984";
if ($_GET['year'] != NULL)
	$year = $_GET['year'];
//$year = 2000;
//echo $year;
for ($i=1984; $i <=2006; $i++) {
	if ($i == $year) {
		$query =   "(SELECT * FROM `Cultuurschappen` 		WHERE `Jaar` REGEXP '" . $year . "')" .
			" UNION (SELECT * FROM `Landschappen` 			WHERE `Jaar` REGEXP '" . $year . "')" .
			" UNION (SELECT * FROM `Zelfportretten` 		WHERE `Jaar` REGEXP '" . $year . "')" .
			" UNION (SELECT * FROM `Portretten` 			WHERE `Jaar` REGEXP '" . $year . "')" .
			" UNION (SELECT * FROM `Verhoudingen` 			WHERE `Jaar` REGEXP '" . $year . "')" .
			" UNION (SELECT * FROM `Studies` 				WHERE `Jaar` REGEXP '" . $year . "')" .
			" UNION (SELECT * FROM `Wachtenden` 			WHERE `Jaar` REGEXP '" . $year . "')" .
			" UNION (SELECT * FROM `Individuen` 			WHERE `Jaar` REGEXP '" . $year . "')" .
			" UNION (SELECT * FROM `Paardenschilderijen` 	WHERE `Jaar` REGEXP '" . $year . "')" .
			" UNION (SELECT * FROM `Paardenbeelden` 		WHERE `Jaar` REGEXP '" . $year . "')" .
			" UNION (SELECT * FROM `Glas-in-lood` 			WHERE `Jaar` REGEXP '" . $year . "')"; // .
			//" " . $order .
			//" LIMIT 0, " . $limit;
	}
}


// Search
//$search = "";
if ($_GET['search'] != NULL)
	$search = $_GET['search'];
//$search = "qqq";
//echo $search;
if ($search != NULL) {
	
	//echo "search not NULL";
	
	/*$query =   "(SELECT * FROM `Cultuurschappen` 		WHERE MATCH (`Titel`) AGAINST ('" . $search . "'))" .
		" UNION (SELECT * FROM `Landschappen` 			WHERE MATCH (`Titel`) AGAINST ('" . $search . "'))" .
		" UNION (SELECT * FROM `Zelfportretten` 		WHERE MATCH (`Titel`) AGAINST ('" . $search . "'))" .
		" UNION (SELECT * FROM `Portretten` 			WHERE MATCH (`Titel`) AGAINST ('" . $search . "'))" .
		" UNION (SELECT * FROM `Verhoudingen` 			WHERE MATCH (`Titel`) AGAINST ('" . $search . "'))" .
		" UNION (SELECT * FROM `Studies` 				WHERE MATCH (`Titel`) AGAINST ('" . $search . "'))" .
		" UNION (SELECT * FROM `Wachtenden` 			WHERE MATCH (`Titel`) AGAINST ('" . $search . "'))" .
		" UNION (SELECT * FROM `Individuen` 			WHERE MATCH (`Titel`) AGAINST ('" . $search . "'))" .
		" UNION (SELECT * FROM `Paardenschilderijen` 	WHERE MATCH (`Titel`) AGAINST ('" . $search . "'))" .
		" UNION (SELECT * FROM `Paardenbeelden` 		WHERE MATCH (`Titel`) AGAINST ('" . $search . "'))" .
		" UNION (SELECT * FROM `Glas-in-lood` 			WHERE MATCH (`Titel`) AGAINST ('" . $search . "'))" .
		" ORDER BY `Jaar` ASC";*/
		
	
	/*$query =   "(SELECT * FROM `Cultuurschappen` 		WHERE `Titel` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Landschappen` 			WHERE `Titel` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Zelfportretten` 		WHERE `Titel` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Portretten` 			WHERE `Titel` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Verhoudingen` 			WHERE `Titel` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Studies` 				WHERE `Titel` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Wachtenden` 			WHERE `Titel` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Individuen` 			WHERE `Titel` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Paardenschilderijen` 	WHERE `Titel` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Paardenbeelden` 		WHERE `Titel` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Glas-in-lood` 			WHERE `Titel` REGEXP '" . $search . "')" .
		" ORDER BY `Jaar` ASC";*/	
		
	// NOTE: LIKE only has a hit when the column exactly contains the search term (case-insensitive)
	/*$query =   "(SELECT * FROM `Cultuurschappen` 		WHERE `Titel` LIKE '" . $search . "')" .
		" UNION (SELECT * FROM `Landschappen` 			WHERE `Titel` LIKE '" . $search . "')" .
		" UNION (SELECT * FROM `Zelfportretten` 		WHERE `Titel` LIKE '" . $search . "')" .
		" UNION (SELECT * FROM `Portretten` 			WHERE `Titel` LIKE '" . $search . "')" .
		" UNION (SELECT * FROM `Verhoudingen` 			WHERE `Titel` LIKE '" . $search . "')" .
		" UNION (SELECT * FROM `Studies` 				WHERE `Titel` LIKE '" . $search . "')" .
		" UNION (SELECT * FROM `Wachtenden` 			WHERE `Titel` LIKE '" . $search . "')" .
		" UNION (SELECT * FROM `Individuen` 			WHERE `Titel` LIKE '" . $search . "')" .
		" UNION (SELECT * FROM `Paardenschilderijen` 	WHERE `Titel` LIKE '" . $search . "')" .
		" UNION (SELECT * FROM `Paardenbeelden` 		WHERE `Titel` LIKE '" . $search . "')" .
		" UNION (SELECT * FROM `Glas-in-lood` 			WHERE `Titel` LIKE '" . $search . "')" .
		" ORDER BY `Jaar` ASC";*/	
		
	// NOTE: = only has a hit when the column exactly contains the search term (case-insensitive)
	/*$query =   "(SELECT * FROM `Cultuurschappen` 		WHERE `Titel` = '" . $search . "')" .
		" UNION (SELECT * FROM `Landschappen` 			WHERE `Titel` = '" . $search . "')" .
		" UNION (SELECT * FROM `Zelfportretten` 		WHERE `Titel` = '" . $search . "')" .
		" UNION (SELECT * FROM `Portretten` 			WHERE `Titel` = '" . $search . "')" .
		" UNION (SELECT * FROM `Verhoudingen` 			WHERE `Titel` = '" . $search . "')" .
		" UNION (SELECT * FROM `Studies` 				WHERE `Titel` = '" . $search . "')" .
		" UNION (SELECT * FROM `Wachtenden` 			WHERE `Titel` = '" . $search . "')" .
		" UNION (SELECT * FROM `Individuen` 			WHERE `Titel` = '" . $search . "')" .
		" UNION (SELECT * FROM `Paardenschilderijen` 	WHERE `Titel` = '" . $search . "')" .
		" UNION (SELECT * FROM `Paardenbeelden` 		WHERE `Titel` = '" . $search . "')" .
		" UNION (SELECT * FROM `Glas-in-lood` 			WHERE `Titel` = '" . $search . "')" .
		" ORDER BY `Jaar` ASC";*/
		
	/*$query =   "(SELECT * FROM `Cultuurschappen` 		WHERE `Titel` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Landschappen` 			WHERE `Titel` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Zelfportretten` 		WHERE `Titel` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Portretten` 			WHERE `Titel` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Verhoudingen` 			WHERE `Titel` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Studies` 				WHERE `Titel` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Wachtenden` 			WHERE `Titel` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Individuen` 			WHERE `Titel` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Paardenschilderijen` 	WHERE `Titel` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Paardenbeelden` 		WHERE `Titel` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Glas-in-lood` 			WHERE `Titel` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" ORDER BY `Jaar` ASC" .
		" LIMIT 0, 10";*/
		
	$query =   "(SELECT * FROM `Cultuurschappen` 		WHERE `Titel` REGEXP '" . $search . "' OR `Materiaal` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Jaar` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Landschappen` 			WHERE `Titel` REGEXP '" . $search . "' OR `Materiaal` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Jaar` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Zelfportretten` 		WHERE `Titel` REGEXP '" . $search . "' OR `Materiaal` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Jaar` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Portretten` 			WHERE `Titel` REGEXP '" . $search . "' OR `Materiaal` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Jaar` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Verhoudingen` 			WHERE `Titel` REGEXP '" . $search . "' OR `Materiaal` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Jaar` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Studies` 				WHERE `Titel` REGEXP '" . $search . "' OR `Materiaal` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Jaar` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Wachtenden` 			WHERE `Titel` REGEXP '" . $search . "' OR `Materiaal` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Jaar` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Individuen` 			WHERE `Titel` REGEXP '" . $search . "' OR `Materiaal` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Jaar` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Paardenschilderijen` 	WHERE `Titel` REGEXP '" . $search . "' OR `Materiaal` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Jaar` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Paardenbeelden` 		WHERE `Titel` REGEXP '" . $search . "' OR `Materiaal` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Jaar` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')" .
		" UNION (SELECT * FROM `Glas-in-lood` 			WHERE `Titel` REGEXP '" . $search . "' OR `Materiaal` REGEXP '" . $search . "' OR `Afmeting` REGEXP '" . $search . "' OR `Jaar` REGEXP '" . $search . "' OR `Prijs` REGEXP '" . $search . "')"; // .
		//" " . $order .
		//" LIMIT 0, " . $limit;
	
		
}





$result = mysql_query($query) or die('Query failed: ' . mysql_error());






// TEST: //////////////////////////////////////////////////////////////////////
$page = "1";
if ($_GET['page'] != NULL)
	$page = $_GET['page'];
	
	
// NOTE: Query gets total number of records from table
$records_found = mysql_num_rows($result);

// NOTE: / returns a float anytime so we need floor()
$pages = floor($records_found/$limit);
if ($records_found%$limit != 0) $pages+=1;

//$limit = 10;	
$offset = ($page*$limit) - $limit;

//echo "<br>Pages: " . $pages;
//echo "<br>Page: " . $page;
		

// Printing record range
echo "<div id=\"limits\">\n";
if ($limit < $records_found) {
	if (($offset+$limit) < $records_found) {
		echo  ($offset+1) . " - "  . ($offset+$limit) . " van " . $records_found . " Werken\n";
	} else {
		echo  ($offset+1) . " - "  . $records_found . " van " . $records_found . " Werken\n";
	}
} else {
	switch ($records_found)
	{
		case 0:  echo "0 Werken gevonden"; break;
		case 1:  echo "1 Werk gevonden"; break;
		default: echo  "1 - "  . $records_found . " van " . $records_found . " Werken\n"; break;
	}
}
echo "</div>\n";


// Printing page indices
echo "<div id=\"indices\">\n";

if ($page > 1) echo "<a href=\"javascript: showPage(" . ($page-1) . ");\" target=\"_self\">" . "&#171; Vorige" . "</a> ";

// NOTE: max seven pages, current page always in the middle if there are seven or more pages
$p = -3;
switch ($page)
{
	case 1: $p = 0; break;
	case 2: $p = -1; break;
	case 3: $p = -2; break;	
	
	case ($pages-2): $p = -4; break;
	case ($pages-1): $p = -5; break;
	case ($pages-0): $p = -6; break;
	
	default: $p = -3;
	
}


if ($pages > 7) {
	for ($i=($page+$p); $i < ($page+$p)+7; $i++) {
		if ($page == $i) {
			// the current page
			echo "|" . $i . "| "; 
		} else {
			//echo "<a href=\"#\" target=\"_self\" onClick=\"showPage(" . $i . "); return false\">" . "|" . $i . "|" . "</a>" . " ";
			echo "<a href=\"javascript: showPage(" . $i . ");\" target=\"_self\">" . "|" . $i . "|" . "</a>" . " ";
		}	
	}
}
else
{
	for ($i=1; $i <= $pages; $i++) {
		if ($page == $i) {
			// the current page
			echo "|" . $i . "| "; 
		} else {
			//echo "<a href=\"#\" target=\"_self\" onClick=\"showPage(" . $i . "); return false\">" . "|" . $i . "|" . "</a>" . " ";
			echo "<a href=\"javascript: showPage(" . $i . ");\" target=\"_self\">" . "|" . $i . "|" . "</a>" . " ";
		}	
	}	
}


if ($page < $pages) echo "<a href=\"javascript: showPage(" . ($page+1) . ");\" target=\"_self\">" . "Volgende &#187;" . "</a>";

echo "</div>\n";

echo "<br><br>\n";
///////////////////////////////////////////////////////////////////////////////


// Stick on order and limit and query again
// NOTE: PHP concat is . JavaScript concat is +
$query .=  " " . $order . " LIMIT " . $offset . ", " . $limit;

$result = mysql_query($query) or die('Query failed: ' . mysql_error());




// get table name
$tablename = "Alle Werken";
if ($cat  	!= NULL && $cat != -1) $tablename = $table_name_cat_arr[$cat];
if ($mat  	!= NULL) $tablename = $table_name_mat_arr[$mat];
if ($year 	!= NULL) $tablename = $year;
if ($search != NULL) $tablename = /*"Zoekterm: " .*/ str_replace("\\\\", "\\", $search);



// Printing results in HTML table
// HACK: we are using a cross-browser hack to get a 1-pixel border table by
// nesting one table in another table
// NONO: this can be accomplished with CSS2 table {border-collapse: collapse;}
//echo "<table bgcolor=\"gray\" cellspacing=0 cellpadding=0><tr><td>\n";

echo "<table id=\"database\" cellspacing=0 cellpadding=3 width=710>\n";
echo "\t<tr><th id=\"database\" bgcolor=\"silver\" colspan=6>" . $tablename . "</th></tr>\n";

echo "\t<tr bgcolor=\"#EEEEEE\">\n";
//echo "\t\t<th>&nbsp;</th>\n";

// Get field names in table header
//echo "\t\t<th>Foto</th>\n";
//echo "\t\t<th>Titel</th>\n";
//echo "\t\t<th>Materiaal</th>\n";
//echo "\t\t<th>Afmeting</th>\n";
//echo "\t\t<th>Jaar</th>\n";
//echo "\t\t<th>Prijs</th>\n";
//
//$query2 = 'SHOW COLUMNS FROM ' . $table;
//$result2 = mysql_query($query2) or die('Query failed: ' . mysql_error());
//while ($line2 = mysql_fetch_array($result2, MYSQL_NUM)) {
//	foreach ($line2 as $fieldname) {
//		echo "\t\t<th>" . $fieldname . "</th>\n";
//	}
//}
//
$numfields = mysql_num_fields($result);
for ($i=0; $i < $numfields; $i++) {
	echo "\t\t<th id=\"database\">".mysql_field_name($result, $i)."</th>\n";
}

echo "\t</tr>\n";

// fill the table rows
while ($line = mysql_fetch_array($result, MYSQL_NUM)) {
	echo "\t<tr>\n";

	// place thumbnail in first column
	//$thumbpath = "./gallery_" . strtolower($table) . "/tn_" . $line[0];
	//$imgpath = "./gallery_" . strtolower($table) . "/" . $line[0];

	// find thumb and image in the gallery folders
	$thumbpath = "";
	foreach($table_arr as $table) {
		$thumbpath = "./gallery_" . strtolower($table) . "/tn_" . $line[0];
		if (file_exists($thumbpath)) break;
	}

	$imgpath = "";
	foreach($table_arr as $table) {
		$imgpath = "./gallery_" . strtolower($table) . "/" . $line[0];
		if (file_exists($imgpath)) break;
	}

	echo "\t\t<td id=\"database\" width=80>";
	echo "<a href=\"" . $imgpath . "\" name=\"" . $line[1] . "\" target=\"_blank\" onClick=\"viewPic(this); return false\">";
	//echo "<a href=\"" . $imgpath . "\" name=\"" . $line[1] . "\" target=\"_blank\" onClick=\"viewPic2('" . $imgpath . "', '" . $line[1] . "'); return false\">";
	echo "<img src=\"" . $thumbpath . "\" border=0>";
	echo "</a>";
	echo "</td>\n";

	// fill all the other columns
	//foreach ($line as $col_value) {
	//	if ($col_value != $line[0])
	//		echo "\t\t<td bgcolor=\"#DBDBE0\" >" . $col_value . "</td>\n";
	//}
	//
	for ($i=1; $i<=4; $i++) {		
		echo "\t\t<td id=\"database\">" . $line[$i] . "</td>\n";
	}
	
	// process Prijs and add euro sign			
	if ($line[5] == 0) {
		$line[5] = "N";
	} else 
	if ($line[5] == -1) {
		$line[5] = "Verkocht";
	} else {
		$line[5] = "&euro; " .  $line[5] . ",-";
	}
				
	echo "\t\t<td id=\"database\" nowrap>" . $line[5] . "</td>\n";

	
	// add euro sign to Prijs column
	// NOTE: No longer necessary: we do this when we create the table so the euro sign will
	// be actually in the table. This allows the user to search for '€'. The browser will 
	// correctly render the euro sign so we don't need &euro;
	// NONO: we have turned Prijs into a SMALLINT to allow ORDER to work properly
	//if ($line[5] != "Verkocht" && $line[5] != "N") {
	//	echo "\t\t<td bgcolor=\"#DBDBE0\" >" . "&euro; " . $line[5] . "</td>\n";
	//} else {
	//	echo "\t\t<td bgcolor=\"#DBDBE0\" >" . $line[5] . "</td>\n";
	//}
		

	echo "\t</tr>\n";
}

echo "</table>\n";

//echo "</td></tr></table>\n";


//echo "<br><br>\n";


// Free resultset
mysql_free_result($result);


// Closing connection
mysql_close($db);

?>

<br>

</div>
</div>


</div>

</div>


<div id="footer">
<p class="footer">Copyright &copy; 2005 R. Darius Zaratuschtra | Webdesign: R. Goossens</p>
</div>


</body>
</html>