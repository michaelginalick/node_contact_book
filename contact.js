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



Contact.loadContacts = function(done){
		var jsonfile = require('jsonfile')
		jsonfile.readFile('data.json', function(err, data) {
  	return done(err, data)
	})
}


Contact.saveContacts = function(contacts, done) {
	var jsonfile = require('jsonfile')
	//var contacts = [ { name: "John Smith", number: "603-123-9090" } ]

	jsonfile.writeFile('data.json', contacts, function(err, data){
		return done(err)
	})
}

Contact.saveContact = function(contact, done) {
	var self = this
	this.loadContacts(function(err, contacts){
		if (err) {return done(err)}
		contacts.push(contact)
		self.saveContacts(contacts, done)
	})
}


Contact.findContacts = function(name, done) {
	this.loadContacts(function(err, contacts){
		if (err) {return done(err)}
			var names = contacts.filter(function(contact){ return contact.name == name })
				done(err, names)
	})
}



module.exports = Contact