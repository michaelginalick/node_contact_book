var MyParrot = require('./parrot')
var Command = require('./command')
var Contact = require('./contact')
var Util = require('./util')


console.log(MyParrot.speakEnglish() )
console.log(MyParrot.speakSpanish() )



var name = Contact.parseName("John Smith,604-123-9090")
console.log(name)

var number = Contact.parseNumber("John Smith,604-123-9090")
console.log(number)

var contact = Contact.createContact("John Smith,604-123-9090")
console.log(contact)




Contact.loadContacts(function(err, data) {
  console.log(data) // -> should print the data from your data.json file
})



var contacts = [ { name: "John Smith", number: "603-123-9090" } ]
Contact.saveContacts(contacts, function(err){
	console.log('success')
})



var contact = { name: "John Smith", number: "604-123-9090" }
Contact.saveContact(contact, function(err) {
  console.log('success')
})


var contact = { name: "John Smith", number: "604-123-9090" }

Contact.findContacts(contact, function(err){
	console.log('success')
})



console.log(Command.getOperation())
console.log(Command.getOperationData())



Command.add(function(err) {
  console.log('Contact added!')
})

Command.find(function(err, results) {
  console.log('Find complete!')
})



var home = Util.getHomeDirectory()

console.log(home)



var path = Util.getDataPath()
console.log(path)



