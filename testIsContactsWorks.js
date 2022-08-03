const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

console.log('Hello from testIsContactsWorks.js');

console.log('listContacts');
listContacts().then(data => console.log(data));

console.log('getContactById');
getContactById('2').then(data => console.log(data));

console.log('removeContact');
removeContact('5').then(data => console.log(data));

console.log('addContact');
addContact('bill', 'bill@mail.com', '555-55-55').then(data => console.log(data));
