function sortByStrings(s,t) {
	let chars = s.split('')
	chars.sort((a,b) => {
		return t.indexOf(a) - t.indexOf(b)
	})
	return chars.join('')
}

console.log(sortByStrings('good','odg'))