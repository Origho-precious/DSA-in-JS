function calculateTotalSalesWithTax(products, taxRate) {
	const totalAmount = products.reduce(
		(total, curProduct) => total + curProduct.price * curProduct.quantity,
		0
	);

	const tax = totalAmount * (taxRate / 100);

	const totalSalesWithTax = totalAmount + tax;

	return parseFloat(totalSalesWithTax.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
