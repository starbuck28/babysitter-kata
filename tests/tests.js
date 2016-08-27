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
	assert.equal(getSegmentPay(7, 9, 12), 24, "Early pay rate is " + 24);
	assert.equal(getSegmentPay(9, 12, 8), 24, "Mid pay rate is " + 24);
});