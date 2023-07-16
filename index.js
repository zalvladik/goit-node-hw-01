import todoActions from './contacts.js'
import { program } from 'commander';

// TODO: рефакторити
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      // ...
      const allContacts = await todoActions.listContacts()
      return console.log(allContacts)
    case 'get':
      // ... id
      const getByIDlContact = await todoActions.getContactById(id)
      return console.log(getByIDlContact)
    case 'add':
      // ... name email phone
      const addlContact = await todoActions.addContact(name, email, phone)
      return console.log(addlContact)
    case 'remove':
      // ... id
      const removeContact = await todoActions.removeContact(id)
      return console.log(removeContact)
  }
}

program
    .option("--action <type>")
    .option("--id <type>")
    .option("--name <type>")
    .option("--email <type>")
    .option("--phone <type>");

program.parse();

const options = program.opts();
invokeAction(options);