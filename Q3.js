function changePossibilities(amount,denoms) {
	let counter = 0
	let sum = 0
	for(let i=0;i<denoms.length;i++) {
		while(sum < amount) {
			sum += denoms[i]
		}
	}
}