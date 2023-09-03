import Form from 'components/form/Form';
import Header from 'components/header/Header';
import ContactList from 'components/contactList/ContactList';
import Filter from 'components/filter/Filter';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'services/getContacts';
import { useEffect } from 'react';


const  Contacts = () => {

    const dispatch = useDispatch()
  
    useEffect(()=> {
      dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <>
        <Header title={'Phonebook'} />
        <Form />
        <Header title={'Contacts'} />
        <Filter />
        <ContactList />
      </>
    );
  }
  
  export default Contacts