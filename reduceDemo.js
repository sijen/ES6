const previous=200;
const current=[
{expense:'Guitar',amount:200},
{expense:'Mic',amount:100},
{expense:'Strap',amount:100},
]

const result=current.reduce(function(sum,expense){
	return sum+expense.amount
},previous)

console.log(result);