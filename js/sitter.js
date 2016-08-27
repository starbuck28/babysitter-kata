//Default start time
var startTime;
//Default end time
var endTime;
//Default bedtime
var bedtime;
//Pay for entire shift
var shiftPay;

//Pay rate from 5pm to bedtime
var earlyRate = 12;
//Pay rate from bedtime to 12am
var midRate = 8;
//Pay rate from 12 am to 4 am
var lateRate = 16;

function getEarlyPay(startTime, bedtime, earlyRate) {
	
	var earlyPay = (bedtime - startTime) * earlyRate;
	return earlyPay;
}


