module.exports = function exp () {
	let fname = document.querySelector("#fname").value,
	lname = document.querySelector("#lastname").value,
	midname = document.querySelector("#midname").value,
	fullname = fname + ' ' + midname + ' ' + lname;

	if (fullname == 'Аскар Серикович Адылханов') {
		document.querySelector("#exp").innerHTML = "Oracle, HTML, CSS, JavaScript, SQL";
	} else if (
		fullname == 'Евгений Олегович Зуев') {
			document.querySelector("#exp").innerHTML = "Oracle, Python, JavaScript, SQL, Linux";
		}
}