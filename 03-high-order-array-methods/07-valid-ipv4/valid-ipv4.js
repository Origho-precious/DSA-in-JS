const isValidIPv4 = (ipAddress) => {
	const octets = ipAddress.split(".");

	if (octets.length !== 4) {
		return false;
	}

	const map = octets.map((octet) => {
		if (
			Number(octet).toString() !== octet ||
			Number(octet) > 255 ||
			Number(octet) < 0
		) {
			return false;
		}

		return true;
	});

	return !map.includes(false);
};

module.exports = isValidIPv4;
