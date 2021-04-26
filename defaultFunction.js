function randomBrand(){
	const brands=['mustang','ford','nissan','bmw'];
	return brands[Math.floor(Math.random()*brands.length)]
}

function cars(brand=randomBrand()){
	console.log(`My brand is ${brand}`)
}
cars()