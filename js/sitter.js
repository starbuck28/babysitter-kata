
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


var startTime, endTime, bedtime, totalPay, shift1Pay, shift2Pay, shift3Pay, html;







//Sets start time 
function getStartTime() {
	startTime = $start.options[$start.selectedIndex].value;
	console.log("start time: " + startTime)
	return startTime;
}

//Sets bedtime
function getBedtime() {
	bedtime = $bed.options[$bed.selectedIndex].value;
	console.log("bedtime: " + bedtime);
	return bedtime;
	}

//Sets end time
function getEndTime() {
	endTime = $end.options[$end.selectedIndex].value;
	console.log("end time: " + endTime);
	return endTime;
}


//Start of function calls

//Submit button is disabled by default
$('input:submit').attr('disabled', true);























/*

//Converts option string value to number
function convertValue(string) {
	var number = parseInt(string);
	return number;
}

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