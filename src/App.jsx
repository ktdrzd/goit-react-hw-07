import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ContactForm from "./components/Contact Form/ContactForm";
import SearchBar from "./components/Search Bar/SearchBar";
import ContactList from "./components/Contact List/ContactList";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/Error Message/ErrorMessage";
import { selectLoading, selectError } from "./redux/selectors";
import { fetchContacts } from "./redux/operations";

const App = () => {
  const dispatch = useDispatch();
  const load = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      {load && <Loader/>}
      {error && <ErrorMessage/>}
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
};

export default App;
