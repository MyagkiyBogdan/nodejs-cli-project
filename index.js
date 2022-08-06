const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require('./contacts');
const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const constacts = await listContacts();
      console.table(constacts);
      break;

    case 'get':
      const contactToFind = await getContactById(id);
      console.table(contactToFind);
      break;

    case 'add':
      const newContact = await addContact(name, email, phone);
      console.table(newContact);
      break;

    case 'remove':
      const removedContact = await removeContact(id);
      console.table(removedContact);
      break;

    case 'update':
      const updatedContact = await updateContact(id, name, email, phone);
      console.table(updatedContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
