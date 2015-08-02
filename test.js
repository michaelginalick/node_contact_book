var MyParrot = require('./parrot')

console.log(MyParrot.speakEnglish() )
console.log(MyParrot.speakSpanish() )


var Contact = require('./contact')
var name = Contact.parseName("John Smith,604-123-9090")
console.log(name)

var number = Contact.parseNumber("John Smith,604-123-9090")
console.log(number)

var contact = Contact.createContact("John Smith,604-123-9090")
console.log(contact)


var Contact = require('./contact')

Contact.loadContacts(function(err, data) {
  console.log(data) // -> should print the data from your data.json file
})

var Contact = require('./contact')

var contacts = [ { name: "John Smith", number: "603-123-9090" } ]
Contact.saveContacts(contacts, function(err){
	console.log('success')
})


var Contact = require('./contact')
var contact = { name: "John Smith", number: "604-123-9090" }
Contact.saveContact(contact, function(err) {
  console.log('success')
})

var Contact = require('./contact')
var contact = { name: "John Smith", number: "604-123-9090" }
Contact.findContact(contact, function(err){
	console.log('success')
})


