var startTime, endTime, bedtime, totalPay, shift1Pay, shift2Pay, shift3Pay;

var midnight = 7;

//Pay rate from 5pm to bedtime
var earlyRate = 12;
//Pay rate from bedtime to 12am
var midRate = 8;
//Pay rate from 12 am to 4 am
var lateRate = 16;

var $start = document.getElementById("start-time");
var $bed = document.getElementById("bedtime");
var $end = document.getElementById("end-time");

//Converts option string value to number
function convertValue(string) {
	if (string !== "na") {
		string = parseInt(string);
	} 
	return string;
}

//Sets start time 
function getStartTime() {
	startTime = $start.options[$start.selectedIndex].value;
	return startTime;
}

//Sets bedtime
function getBedtime() {
	bedtime = $bed.options[$bed.selectedIndex].value;
	return bedtime;
	}

//Sets end time
function getEndTime() {
	endTime = $end.options[$end.selectedIndex].value;
	return endTime;
}

//Checks if startTime is valid or not
function isStartTimeValid(starttime, endtime) {
	if (typeof starttime === 'number' && starttime < endtime) {
		return true;
		}
		return false;
	}
	
function errorMessage() {
	return '<p>Error: The combination of times you selected is invalid. Please try again.</p>';
	}
	
//Calculates pay for shift segment
function getSegmentPay(time1, time2, payrate) {
	return (time2 - time1) * payrate;
}

//Calculates total pay
function calculateTotal(pay1, pay2, pay3) {
	return pay1 + pay2 + pay3;
}

//Sets html for results div
function showResults(pay) {
	return '<p>You will be paid $' + pay + ' for this shift.</p>';
	}

//Submit button is disabled by default
document.getElementById('submitButton').disabled = true;

//When a selection is changed
$('#start-time, #bedtime, #end-time').change(function() {
		//If they all have values, enables button
		if ($('#start-time').val() && $('#bedtime').val() && $('#end-time').val()) {
		document.getElementById('submitButton').disabled = false;
		} else {
      document.getElementById('submitButton').disabled = true;
    }
	});

//When submit button is clicked, the functions run	
$('#submitButton').click(function() {
	
	getStartTime();
	getBedtime();
	getEndTime();
	
	startTime = convertValue(startTime);
	bedtime = convertValue(bedtime);
	endTime = convertValue(endTime);
	
	//If start time is not valid displays error
	if (!isStartTimeValid(startTime, endTime)) {
		$(".results").html(errorMessage());
		totalPay = 0;
		} 
		
		//Assigns pay for each shift dependent on times selected
	   if (bedtime >= endTime && endTime > startTime) {
		  shift1Pay = getSegmentPay(startTime, endTime, earlyRate); 
		  shift2Pay = 0;
		  shift3Pay = 0;
		 } else if (bedtime === "na" && endTime <= midnight) {
			 bedtime = endTime;
			 shift1Pay = getSegmentPay(startTime, endTime, earlyRate);
			 shift2Pay = 0;
			 shift3Pay = 0;
		} else if (bedtime > startTime && endTime < midnight) {
			shift1Pay = getSegmentPay(startTime, bedtime, earlyRate);
			shift2Pay = getSegmentPay(bedtime, endTime, midRate);
			shift3Pay = 0;
		} else if (bedtime <= startTime && endTime <= midnight) {
			shift1Pay = 0;
			shift2Pay = getSegmentPay(startTime, endTime, midRate);
			shift3Pay = 0;
		} else if (bedtime === "na" && endTime > midnight) {
			shift1Pay = getSegmentPay(startTime, midnight, earlyRate);
			shift2Pay = 0;
			shift3Pay = getSegmentPay(midnight, endTime, lateRate);
		} else if (bedtime <= startTime && endTime > midnight) {
			shift1Pay = 0;
			shift2Pay = getSegmentPay(startTime, midnight, midRate);
			shift3Pay = getSegmentPay(midnight, endTime, lateRate);
			}
		  else {
			shift1Pay = getSegmentPay(startTime, bedtime, earlyRate);
			shift2Pay = getSegmentPay(bedtime, midnight, midRate);
			shift3Pay = getSegmentPay(midnight, endTime, lateRate);
		  }
	 //Calculates total pay 
	if (totalPay !== 0) {
			totalPay = calculateTotal(shift1Pay, shift2Pay, shift3Pay);
			$('.results').html(showResults(totalPay));
		} else {
			totalPay = false;
			}
		
});
