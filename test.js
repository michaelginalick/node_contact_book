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