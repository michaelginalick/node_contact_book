var Contact = require('./contact.js')
var Command = {}

Command.getOperation = function(){
	return process.argv[2]
}


Command.getOperationData = function(){
	return process.argv[3]
}



Command.add = function(done) {
	var new_contact = this.getOperationData()
	var create_contact = Contact.createContact(new_contact)
	Contact.saveContact(create_contact, function(err){done(err) })
}

Command.find = function(done) {
	var found_contact = this.getOperationData()
	var contacts = Contact.findContacts(found_contact, function(err, contacts){
		console.log(contacts)
		done(err, contacts)
	})
}




module.exports = Command