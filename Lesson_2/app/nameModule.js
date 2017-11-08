module.exports = function flname () {
	let fname = document.querySelector("#fname").value,
	lname = document.querySelector("#lastname").value,
	midname = document.querySelector("#midname").value,
	fullname = fname + ' ' + midname + ' ' + lname;
	document.querySelector("#out").innerHTML="ФИО разработчика: "+fullname;
}