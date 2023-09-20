function diceGameSimulation(numOfSim) {
	const simulations = [];

	for (let i = 0; i < numOfSim; i++) {
		const dice1 = Math.ceil(Math.random() * 6);
		const dice2 = Math.ceil(Math.random() * 6);

		const sum = dice1 + dice2;
		let result;

		if ([7, 11].includes(sum)) {
			result = "win";
		} else if ([2, 3, 12].includes(sum)) {
			result = "lose";
		} else {
			result = "roll again";
		}

		simulations.push({ dice1, dice2, sum, result });
	}

	return simulations;
}

module.exports = diceGameSimulation;
