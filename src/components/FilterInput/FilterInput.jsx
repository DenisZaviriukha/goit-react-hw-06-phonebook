import css from "./FilterInput.module.css";
import { useDispatch, useSelector } from "react-redux";
import { contactFilterSlice } from "redux/filterSlice"

export const Input = () => {
  
  const dispatch = useDispatch()
  
  const filter = useSelector(state => state.reducer.filter)

  const handleSubmit = e => { 
    e.preventDefault();
  }
 
  const handleChange = e => { 
    const form = e.target;
    dispatch(contactFilterSlice.actions.changeFilter(form.value));
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        value={filter}
        type="text"
        name="filter"
        className={css.field}
        placeholder="Enter the contact name or number"
        onChange={handleChange}
      />
    </form>
  );
};
