import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div className={css.item}>
      <div className={css.info}>
        <p className={css.user}>
          <FaUser className={css.icon} /> {name}
        </p>
        <p className={css.number}>
          <FaPhoneAlt className={css.icon} /> {number}
        </p>
      </div>
      <button onClick={handleDelete} className={css.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;