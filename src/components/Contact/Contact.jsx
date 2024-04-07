import css from "./Contact.module.css";
import { AiFillContacts } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice'; 

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <li className={css.listItem}>
        <div className={css.iconContainer}>
          <AiFillContacts size={22} />
          <AiFillPhone size={22} />
        </div>
        <div className={css.textContainer}>
          <p className={css.text}>{name}</p>
          <p className={css.text}>{number}</p>
        </div>
        <button className={css.btn} onClick={handleDelete}>
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
