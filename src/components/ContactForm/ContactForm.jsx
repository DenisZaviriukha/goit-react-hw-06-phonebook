import { Button } from "components/Button/Button"
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { contactArraySlice } from "redux/contactArraySlice";
import { nanoid } from "@reduxjs/toolkit";


export const ContactForm = () => {

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (!form.name.value || !form.number.value) {return}
    dispatch(contactArraySlice.actions.addContact({ name: form.name.value, number: form.number.value, id: nanoid(), isChecked: false, }));
    form.reset();
  };

  return (
    <>
      <h2 className={css.title}>Add new contact</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.field}
          type="text"
          name="name"
          placeholder="Enter contact name..."
        />
        <input
          className={css.field}
          type="text"
          name="number"
          placeholder="Enter contact number..."
        />
        <Button type="submit">Add contact</Button>
      </form>
    </>
  );
};
