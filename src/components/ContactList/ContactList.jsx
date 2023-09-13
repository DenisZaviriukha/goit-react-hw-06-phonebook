import { Contact } from "components/Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export const ContactList = () => {
  const filterSettings = useSelector(state => state.reducer.filter)

  let listOfContact = useSelector(state => state.reducer.contactArray)
  if (filterSettings) {
    listOfContact = listOfContact.filter(contact => contact.name.toLowerCase().includes(filterSettings.toLowerCase()) || contact.number.toLowerCase().includes(filterSettings.toLowerCase()))
  }
  return (
    <ul className={css.list}>
      {listOfContact.length !== 0 ? listOfContact.map(contact => (
        <li className={css.listItem} key={contact.id} id={contact.id}>
          <Contact contact={contact} />
        </li>
      ))
        : <p>{`No contacts (●'◡'●)`}</p>
      }
    </ul>
  );
};