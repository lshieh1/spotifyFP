function changePossibilities(amount,denoms) {
	// initialize table
	let table = []
	for(let d=0;d<=denoms.length;d++) {
		table.push([])
		for(let a=0;a<amount+1;a++) {
			table[d].push(0)
		}
	}
	// initialize first row and column for inward boxes
	for(let i=0;i<=amount;i++) {
		table[0][i] = 0
	}
	for(let i=0;i<=denoms.length;i++) {
		table[i][0] = 1
	}
	// fill in table
	for(let i=1;i<=denoms.length;i++) {
		for(let j=1;j<=amount;j++) {
			if(denoms[i-1] <= j) {
				table[i][j] = table[i-1][j] + table[i][j-denoms[i-1]]
			} else {
				table[i][j] = table[i-1][j]
			}
		}
	}
	console.log(table)
	return table[denoms.length][amount]
}

console.log(changePossibilities(4,[1,2,3]))