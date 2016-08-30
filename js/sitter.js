//Default start time
var startTime;
//Default end time
var endTime;
//Default bedtime
var bedtime;
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


//Calculates pay for shift segment
function getSegmentPay(time1, time2, payrate) {
	var segmentPay = (time2 - time1) * payrate;
	return segmentPay;
}

//Converts option string value to number
function convertValue(string) {
	var number = parseInt(string);
	return number;
}

//Calculates total pay
function calculateTotal(pay1, pay2, pay3) {
	totalPay = pay1 + pay2 + pay3;
	return totalPay;
}

