const numbers=[1,2,3,4,5];
const OtherArray=numbers.map(function(number){ //map returns an array

	return number*10;
});
console.log(OtherArray);