import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';

const validation = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required!'),
  number: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required!'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameField = useId();
  const numberField = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ id: nanoid(5), ...values }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={css.form}>
        <div className={css.item}>
          <label htmlFor={nameField} className={css.text}>
            Name
          </label>
          <Field type="text" name="name" id={nameField} className={css.name} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={css.item}>
          <label htmlFor={numberField} className={css.text}>
            Number
          </label>
          <Field type="text" name="number" id={numberField} className={css.name} />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
