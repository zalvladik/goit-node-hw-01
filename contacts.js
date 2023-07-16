import fs from 'fs/promises'
import path from 'path'
import {nanoid} from "nanoid";

const contactsPath = path.resolve("db", "contacts.json")

const updateContactsStorage = contact => fs.writeFile(contactsPath, JSON.stringify(contact, null, 2));

const listContacts = async () => {
    // ...твій код. Повертає масив контактів.
    const data = await fs.readFile(contactsPath)
    return JSON.parse(data)
  }
  
const getContactById = async (contactId) => {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
    const contacts = await listContacts()
    const result = contacts.filter(contact => contact.id === contactId )
    return result
  }
  
const removeContact = async (contactId) => {
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.

    const contacts = await listContacts()
    const result = contacts.find( contact => contact.id === contactId ) 
    const newArray = contacts.filter( contact => contact.id !== contactId ) 

    await updateContactsStorage(newArray)
    return result
  }

    const addContact = async (name, email, phone) => {
    // ...твій код. Повертає об'єкт доданого контакту.

    const newArray = await listContacts()
    const newContact = {
        id:nanoid(),
        name,
        email,
        phone,
    };

    newArray.push(newContact)

    await updateContactsStorage(newArray)
    return newContact
  }

const todoActions = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}

export default todoActions

