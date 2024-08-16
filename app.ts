interface Data {
    price: number,
	discount: number,
	isInstallment: boolean,
	months: number,
}

const totalPrice = ({ price, discount, isInstallment, months }: Data): number | string => {
	if (isInstallment) {
        const result = (price * ((100 - discount) / 100)) / months;
		return `Ежемесячный платеж: ${result}`
	} else {
		return price * ((100 - discount) / 100);
	}
};

const price = totalPrice({
	price: 100000,
	discount: 25,
	isInstallment: true,
	months: 12,
});
console.log(price); // 6250
