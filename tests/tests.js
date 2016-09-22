/*
A calculator that tells a babysitter how much they will be paid for working for a shift based on start time, end time, and children's bedtime
*/



QUnit.test("sample test", function(assert) {
assert.ok("1" == 1, "passed");
});

QUnit.module("check assigned variables exist", function() {
QUnit.test("early rate", function(assert) {
	assert.ok(earlyRate === 12, "early rate");
});

QUnit.test("mid rate", function(assert) {
	assert.ok(midRate === 8, "mid rate");
});

QUnit.test("late rate", function(assert) {
	assert.ok(lateRate === 16, "late rate");
});

QUnit.test("midnight", function(assert) {
	assert.ok(midnight === 7, "midnight");
});

QUnit.test("submit-button exists", function(assert) {
		var $submitBtn = $(".submit-button");
		assert.ok($submitBtn, "button exists");
	});
});

QUnit.test("function converts value string to number unless value is na", function(assert) {
	assert.equal(convertValue("0"), 0, "Number is " + 0);
	assert.equal(convertValue("11"), 11, "Number is " + 11);
	assert.equal(convertValue("na"), "na", "Value is 'na'");
});

QUnit.module("functions to assign times to variables", function() {	
QUnit.test("option selected for start time is is initially an empty string and is set to variable", function(assert) {
	var $start = document.getElementById("start-time");
	assert.equal(getStartTime(), "", "start time is set");
	});
		
QUnit.test("option selected for bedtime is initially an empty string and is set to variable", function(assert) {
	var $bed = document.getElementById("bedtime");
	assert.equal(getBedtime(), "", "bedtime is set");
	});

QUnit.test("option selected for end time is is initially an empty string and is set to variable", function(assert) {
	var $end = document.getElementById("end-time");
	assert.equal(getEndTime(), "", "end time is set");
	});
});

QUnit.test("submit button is disabled by default", function(assert) {
	assert.equal(document.getElementById('submitButton').disabled, true, "button is disabled by default");
});

QUnit.module("checks to make sure times are valid", function() {
QUnit.test("checks to see if startTime is valid", function(assert) {
	assert.equal(isStartTimeValid(3, 4, 8), true, "startTime is valid");
	assert.equal(isStartTimeValid(3, 4, 1), false, "startTime is not valid");
	assert.equal(isStartTimeValid("", 4, 8), false, "startTime is not valid");
	});
	
QUnit.test("checks to see if endTime is valid", function(assert) {
	assert.equal(isEndTimeValid(3, 8), true, "endTime is valid");
	assert.equal(isEndTimeValid(3, 8), true, "endTime is valid");
	assert.equal(isEndTimeValid(3, 1), false, "endTime is not valid");
	assert.equal(isEndTimeValid(3, ""), false, "endTime is not valid");
	assert.equal(isEndTimeValid(3, "na"), false, "endTime is not valid");
	});
	
QUnit.test("checks to see if bedtime is valid", function(assert) {
	assert.equal(isBedtimeValid(8), true, "bedtime is valid");
	assert.equal(isBedtimeValid(""), false, "bedtime is not valid");
	assert.equal(isBedtimeValid("na"), true, "bedtime is valid");
	});

});


/*QUnit.test("calculate pay for shift segment, should return a positive number or zero", function(assert) {
	
	assert.equal(getSegmentPay(1, 4, earlyRate), 36, "Early pay rate is " + 36);  //1==6pm, 4==9pm
	assert.equal(getSegmentPay(4, 7, midRate), 24, "Mid pay rate is " + 24);		//4==9pm, 7==12am	
	assert.equal(getSegmentPay(7, 9, lateRate), 32, "Late pay rate is " + 32);	//7==12am, 9==2am
});

QUnit.test("calculates total pay", function(assert) {
	assert.equal(calculateTotal(36, 24, 32), 92, "Total pay is " + 92 );
});


QUnit.test("sets html for total pay in results div", function(assert) {
	assert.equal(showResults(100), html, "html is set for results div" );
	});

*/