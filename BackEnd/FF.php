<?php

$myfile = fopen("Tes.txt", "r") or die("Unable to open file!");
$first =fgets($myfile);

fclose($myfile);

?>

function nGame(){
	cells = ["11","12","21","22","31","32","41","42"];
		
	for (i=0; i<cells.length; i++){
		document.getElementById(cells[i]).innerHTML = i+1;
		}
}

function check(tagid){
	cell = document.getElementById(tagid);

	if (cell.innerHTML == "1"){
		cell.innerHTML = "WARM WEATHER 39";
	
	}
}