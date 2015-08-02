var Contact = {}

Contact.parseName = function(str){
	var name = str.split(",");
	return name[0];
}

Contact.parseNumber = function(str){
	var number = str.split(",");
	return number[1];
}

Contact.createContact = function(str){
	var split = str.split(",");
	var name = split[0];
	var number = split[1];
	var obj = {
		name:   name,
		number: number
	};
	return obj
}


module.exports = Contact