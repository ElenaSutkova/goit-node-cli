const { program } = require("commander");
const { contactsList, getContactById, addContact, contactRemove } = require("./contacts")

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();


async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
      case "list":
          const listContacts = await contactsList()
          console.table(listContacts)
      break;

    case "get":
          const contactById = await getContactById(id)
          console.log(contactById)
      break;

    case "add":
          const newContact = await addContact(name, email, phone)
          console.log(newContact)
      break;

    case "remove":
          const deleteContact = await contactRemove(id)
          console.log(deleteContact)
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);