/*
A calculator that tells a babysitter how much they will be paid for working for a shift based on start time, end time, and children's bedtime
*/



QUnit.test("sample test", function(assert) {
assert.ok("1" == 1, "passed");
});

QUnit.test("early rate", function(assert) {
	assert.ok(earlyRate === 12, "early rate");
});

QUnit.test("mid rate", function(assert) {
	assert.ok(midRate === 8, "mid rate");
});

QUnit.test("late rate", function(assert) {
	assert.ok(lateRate === 16, "late rate");
});

QUnit.test("calculate pay for shift segment", function(assert) {
	assert.equal(getSegmentPay(1, 4, earlyRate), 36, "Early pay rate is " + 36);  //1==6pm, 4==9pm
	assert.equal(getSegmentPay(4, 7, midRate), 24, "Mid pay rate is " + 24);		//4==9pm, 7==12am	
	assert.equal(getSegmentPay(7, 9, lateRate), 32, "Late pay rate is " + 32);	//7==12am, 9==2am
});

QUnit.test("function converts value string to number", function(assert) {
	assert.equal(convertValue("0"), 0, "Number is " + 0);
	assert.equal(convertValue("11"), 11, "Number is " + 11);
});

