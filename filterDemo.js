const products=[
{name:'ipad', category:'devices'},
{name:'song3d', category:'TV'},
{name:'E256', category:'TV'},
];
const result=products.filter(function(product){
	return product.category==='TV';
});
console.log(result);