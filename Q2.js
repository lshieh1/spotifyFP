function decodeString(s) {
	if(!s.includes('[')) {
		return s
	}
	let numStart = 0
	let startBracket = s.indexOf('[')
	// just in case if number has more than one digit
	for(let n=startBracket-1;n>=0;n--) {
		if(isNaN(s[n])) {
			numStart = n+1
			break
		}
	}
	let endBracket = s.lastIndexOf(']')
	// keep track of brackets
	for(let i=startBracket+1;i<s.length;i++) {
		if(s[i] === ']') {
			endBracket = i
			break
		} else if(s[i] === '[') {
			break
		}
	}
	return decodeString(s.slice(0,startBracket - (startBracket - numStart)) + s.slice(startBracket+1,endBracket).repeat(parseInt(s.slice(numStart,startBracket+1))) + s.slice(endBracket+1))
}

console.log(decodeString('2[b3[a]]'))