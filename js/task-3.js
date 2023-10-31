function checkForSpam(message) {
	const messageLowerCase = message.toLowerCase;
	const isBul = false;

	if (message.includes("spam")) {
		return message.includes("spam");
	} else if (message.includes("sale")) {
		return message.includes("sale");
	} else {
		return isBul;
	}
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
