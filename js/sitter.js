//Default start time
var startTime;
//Default end time
var endTime;
//Default bedtime
var bedtime;
//Midnight
var midnight = 7;
//Pay for entire shift
var totalPay;

//Pay for early shift
var earlyShiftTotal;
//Pay for mid shift
var midShiftTotal;
//Pay for late shift
var lateShiftTotal;

//Pay rate from 5pm to bedtime
var earlyRate = 12;
//Pay rate from bedtime to 12am
var midRate = 8;
//Pay rate from 12 am to 4 am
var lateRate = 16;

var html;
var submitButton;

//Sets start time 
function getStartTime() {
	var $start = document.getElementById("start-time");
	startTime = $start.options[$start.selectedIndex].value;
}


//Sets bedtime
function getBedtime() {
	var $bed = document.getElementById("bedtime");
	bedtime = $bed.options[$bed.selectedIndex].value;
	if (bedtime < startTime) {
		alert("Child's bedtime must be a time later than the start time. Please make another selection.");
	}
}

//Sets end time
function getEndTime() {
	var $end = document.getElementById("end-time");
	endTime = $end.options[$end.selectedIndex].value;
	return endTime;
}

function checkOptions() {
	if ($("#start-time").val() === "" || $("#end-time").val() === "" || $("#bedtime").val() === "")  {
		submitButton = true;
	}
	return submitButton;
}

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
	
	