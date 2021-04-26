const students=[
{name:'Francis',grade:6},
{name:'Martin',grade:7},
{name:'Martha',grade:7}
];

let allStudentsPassedTheCourse= students.every(function(student){
		return student.grade>=6;
	});
console.log(allStudentsPassedTheCourse);