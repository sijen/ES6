const brands=[
{name:'Apple',id:1},
{name:'Samsung',id:3},
{name:'Samsung',id:3}
];

const result=brands.find(function(brand){
	return brand.name==='Samsung';
})
console.log(result);