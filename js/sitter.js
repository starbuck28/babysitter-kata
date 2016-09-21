
var $start = document.getElementById("start-time");
var $bed = document.getElementById("bedtime");
var $end = document.getElementById("end-time");

var midnight = 7;

//Pay rate from 5pm to bedtime
var earlyRate = 12;
//Pay rate from bedtime to 12am
var midRate = 8;
//Pay rate from 12 am to 4 am
var lateRate = 16;

// Get the modal
var bmodal = document.getElementById('bedtimeModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var startTime, endTime, bedtime, totalPay, shift1Pay, shift2Pay, shift3Pay, html;


/*function checkBedtime() {
	if($('#bedtime').val() > $('#start-time').val() || $('#bedtime').val() === "na") {
		return true;
	}
	return false;
}
*/

//Converts option string value to number
function convertValue(string) {
	var number = parseInt(string);
	return number;
}

//Sets start time 
function getStartTime() {
	startTime = $start.options[$start.selectedIndex].value;
	if(startTime !== "") {
		startTime = convertValue(startTime);
		}
	console.log("start time: " + startTime);
	return startTime;
}

//Sets bedtime
function getBedtime() {
	bedtime = $bed.options[$bed.selectedIndex].value;
	if(bedtime !== "" && bedtime !== "na") {
		bedtime = convertValue(bedtime);
		}
		console.log("bedtime: " + bedtime);
	return bedtime;
	}

//Sets end time
function getEndTime() {
	endTime = $end.options[$end.selectedIndex].value;
	if(endTime !== "") {
		endTime = convertValue(endTime);
		}
		console.log("end time: " + endTime);
	return endTime;
}

//Checks if startTime is valid or not
function isStartTimeValid(starttime, bedtime, endtime) {
	if (typeof starttime === 'number' && starttime <= bedtime && starttime < endtime) {
		return true;
		}
		return false;
	}

//Checks if endTime is valid or not
function isEndTimeValid(starttime, endtime) {
	if (typeof endtime === 'number' && endtime > starttime) {
		return true;
		}
		return false;
	}
	
//Checks if bedtime is valid or not
function isBedtimeValid(starttime, bedtime) {
	if (bedtime === "" || starttime > bedtime) {
		return false;
		}
		return true;
	}
	
//Checks if bedtime is before midnight
function isBedtimeBefore12(time) {
	 if(time < 7) {
		 return true;
		 }
		 return false;
	}



//Start of function calls

//Submit button is disabled by default
//$('input:submit').attr('disabled', false);
document.getElementById('submitButton').disabled = true;

$('#start-time, #bedtime, #end-time').change(
  function() {
    if($('#start-time').val() && $('#bedtime').val() && $('#end-time').val()) {
     document.getElementById('submitButton').disabled = false;
}
    else {
      document.getElementById('submitButton').disabled = true;
    }
  });




/*
// 
$('#start-time, #bedtime').change(
if($('#bedtime').val() <= $().val() || $('#bedtime').val() === "na") {
    bmodal.style.display = "block";
} else {
	bmodal.style.display = "none";
}
);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == bmodal) {
        bmodal.style.display = "none";
    }
}
*/

















/*



//Calculates pay for shift segment
function getSegmentPay(time1, time2, payrate) {
	var segmentPay = (time2 - time1) * payrate;
	return segmentPay;
}


//Calculates total pay
function calculateTotal(pay1, pay2, pay3) {
	totalPay = pay1 + pay2 + pay3;
	return totalPay;
}

//Sets html for results div
function showResults(pay) {
	html = '<p>You will be paid $' + pay + ' for this shift.</p>';
	return html;
}


getStartTime();
getBedtime();
getEndTime();

startTime = convertValue(startTime);
bedtime = convertValue(bedtime);
endTime = convertValue(endTime);
		
$(".submit-button").click(function() {
		
		
		earlyShiftTotal = getSegmentPay(startTime, bedtime, earlyRate);
		midShiftTotal = getSegmentPay(bedtime, midnight, midRate);
		lateShiftTotal = getSegmentPay(midnight, endTime, lateRate);
		totalPay = calculateTotal(earlyShiftTotal, midShiftTotal, lateShiftTotal);
		var showPay = showResults(totalPay);
		$(".results").html(showPay);
	});
	
	*/