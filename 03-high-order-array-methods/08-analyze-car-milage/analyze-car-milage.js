function analyzeCarMileage(cars) {
	const totalMileage = cars.reduce((acc, curCar) => acc + curCar.mileage, 0);
	const averageMileage = totalMileage / cars.length;

	const mileageArray = cars.map((car) => parseInt(car.mileage));

	const highestMileageCarIndex = mileageArray.indexOf(
		Math.max(...mileageArray)
	);

	const lowestMileageCarIndex = mileageArray.indexOf(Math.min(...mileageArray));

	const highestMileageCar = cars[highestMileageCarIndex];
	const lowestMileageCar = cars[lowestMileageCarIndex];

	return {
		totalMileage,
		averageMileage,
		highestMileageCar,
		lowestMileageCar,
	};
}

module.exports = analyzeCarMileage;
