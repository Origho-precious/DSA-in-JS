function validateEmail(email) {
	return !email.startsWith("@") && email.includes("@") && email.includes(".");
}
 // Not an Optimal Solution

module.exports = validateEmail;
