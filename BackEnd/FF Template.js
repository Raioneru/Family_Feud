var round =0;
var click =0;

function nGame(){
	if (round===0) {
		hideX()
		function getTimeRemaining(endtime) {
		  var t = Date.parse(endtime) - Date.parse(new Date());
		  var seconds = Math.floor((t / 2000) % 60);
		 
		  return {
		    'total': t,
		    'seconds': seconds
		  };
		}

		function initializeClock(id, endtime) {
		  var clock = document.getElementById(id);
		  var secondsSpan = clock.querySelector('.seconds');

		  function updateClock() {
		    var t = getTimeRemaining(endtime);

		    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		    if (t.total <= 0) {
		      clearInterval(timeinterval);
		    }
		  }

		  updateClock();
		  var timeinterval = setInterval(updateClock, 2000);
		}

		var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 2000);
		initializeClock('clockdiv', deadline);
	}
	round++;
	cells = ["11","12","21","22","31","32","41","42"];

	if (round===1){
		for (i=0; i<8; i++){
		/*Number all blocks*/
		document.getElementById(cells[i]).innerHTML = i+1;
		/*empty all point blocks*/
		document.getElementById(cells[i]+'pts').innerHTML = '';
		}
	}

	else if (round===2){
		document.getElementById('rounNum').innerHTML = round;
		for (i=0; i<6; i++){
		/*Number blocks 1-6 ie elements 0-5*/
		document.getElementById(cells[i]).innerHTML = i+1;
		/*empty point blocks 1-6 ie elements 0-5*/
		document.getElementById(cells[i]+'pts').innerHTML = '';
		}
		/*empty blocks 7 and 8 ie elements 6 and 7*/
		document.getElementById(cells[6]).innerHTML = '';
		document.getElementById(cells[7]).innerHTML = '';
		document.getElementById(cells[6]+'pts').innerHTML = '';
		document.getElementById(cells[7]+'pts').innerHTML = '';
	}

	else if (round===3){
		document.getElementById('rounNum').innerHTML = round;
		for (i=0; i<4; i++){
		/*Number blocks 1-4 ie elements 0-3*/
		document.getElementById(cells[i]).innerHTML = i+1;
		/*empty point blocks 1-4 ie elements 0-3*/
		document.getElementById(cells[i]+'pts').innerHTML = '';
		/*empty blocks 5-8 ie elements 4-7*/
		document.getElementById(cells[i+4]).innerHTML = '';
		document.getElementById(cells[i+4]+'pts').innerHTML = '';
		}
	}
		
	
}

function check(tagid){
	cell = document.getElementById(tagid);
	cellpts = document.getElementById(tagid+'pts');

	if (round===1) {
		if (cell.innerHTML == "1"){
			cell.innerHTML = "R1Ans1";
			cellpts.innerHTML = "R1pts1";
		}
		if (cell.innerHTML == "2"){
			cell.innerHTML = "R1Ans2";
			cellpts.innerHTML = "R1pts2";
		}
		if (cell.innerHTML == "3"){
			cell.innerHTML = "R1Ans3";
			cellpts.innerHTML = "R1pts3";
		}
		if (cell.innerHTML == "4"){
			cell.innerHTML = "R1Ans4";
			cellpts.innerHTML = "R1pts4";
		}
		if (cell.innerHTML == "5"){
			cell.innerHTML = "R1Ans5";
			cellpts.innerHTML = "R1pts5";
		}
		if (cell.innerHTML == "6"){
			cell.innerHTML = "R1Ans6";
			cellpts.innerHTML = "R1pts6";
		}
		if (cell.innerHTML == "7"){
			cell.innerHTML = "R1Ans7";
			cellpts.innerHTML = "R1pts7";
		}
		if (cell.innerHTML == "8"){
			cell.innerHTML = "R1Ans8";
			cellpts.innerHTML = "R1pts8";
		}
	}

	if (round===2) {
		if (cell.innerHTML == "1"){
			cell.innerHTML = "R2Ans1";
			cellpts.innerHTML = "R2pts1";
		}
		if (cell.innerHTML == "2"){
			cell.innerHTML = "R2Ans2";
			cellpts.innerHTML = "R2pts2";
		}
		if (cell.innerHTML == "3"){
			cell.innerHTML = "R2Ans3";
			cellpts.innerHTML = "R2pts3";
		}
		if (cell.innerHTML == "4"){
			cell.innerHTML = "R2Ans4";
			cellpts.innerHTML = "R2pts4";
		}
		if (cell.innerHTML == "5"){
			cell.innerHTML = "R2Ans5";
			cellpts.innerHTML = "R2pts5";
		}
		if (cell.innerHTML == "6"){
			cell.innerHTML = "R2Ans6";
			cellpts.innerHTML = "R2pts6";
		}
		if (cell.innerHTML == "7"){
			cell.innerHTML = "R2Ans7";
			cellpts.innerHTML = "R2pts7";
		}
		if (cell.innerHTML == "8"){
			cell.innerHTML = "R2Ans8";
			cellpts.innerHTML = "R2pts8";
		}
	}

	if (round===3) {
		if (cell.innerHTML == "1"){
			cell.innerHTML = "R3Ans1";
			cellpts.innerHTML = "R3pts1";
		}
		if (cell.innerHTML == "2"){
			cell.innerHTML = "R3Ans2";
			cellpts.innerHTML = "R3pts2";
		}
		if (cell.innerHTML == "3"){
			cell.innerHTML = "R3Ans3";
			cellpts.innerHTML = "R3pts3";
		}
		if (cell.innerHTML == "4"){
			cell.innerHTML = "R3Ans4";
			cellpts.innerHTML = "R3pts4";
		}
		if (cell.innerHTML == "5"){
			cell.innerHTML = "R3Ans5";
			cellpts.innerHTML = "R3pts5";
		}
		if (cell.innerHTML == "6"){
			cell.innerHTML = "R3Ans6";
			cellpts.innerHTML = "R3pts6";
		}
		if (cell.innerHTML == "7"){
			cell.innerHTML = "R3Ans7";
			cellpts.innerHTML = "R3pts7";
		}
		if (cell.innerHTML == "8"){
			cell.innerHTML = "R3Ans8";
			cellpts.innerHTML = "R3pts8";
		}
	}

	
}

function hideX(){
	$("#XXX1").hide(0);
	$("#XXX2").hide(0);
	$("#XXX3").hide(0);

}
function showX() {
	$('#buzzer').get(0).play();
	$('#buzzer').get(0).currentTime = 0;
	if (click===2){
		$("#XXX1").show();
		$("#XXX2").show();
		$("#XXX3").show();
		$("#XXX1").hide(2000);
		$("#XXX2").hide(2000);
		$("#XXX3").hide(2000);
		}
	if (click===1){
		$("#XXX1").show();
		$("#XXX2").show();
		$("#XXX1").hide(2000);
		$("#XXX2").hide(2000);
		}
	if (click===0){
		$("#XXX1").show();
		$("#XXX1").hide(2000);
		
		}
	click++;

	if (click ===3){
		click=0;
	}
}
		