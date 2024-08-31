import { useState, ChangeEvent, SetStateAction, Dispatch } from 'react';


interface ContactData{
  name: string;
  email: string;
  contactNumber: string;
}

interface AddContactProps {
  data: ContactData[];
  setData: Dispatch<SetStateAction<ContactData[]>>;
}


const AddContact: React.FC<AddContactProps> = ({ data, setData }) => {
  const [addContactModal, setAddContactModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

  const handleSubmit = () => {
    if (data.some(contact => contact.name === name)) {
      setErrorMessage('Name already exists');
    } else {
      setData(prevData => {
        const newData = [...prevData, { name, email, contactNumber }];
        localStorage.setItem('contacts', JSON.stringify(newData));
        return newData;
      });
      setAddContactModal(!addContactModal);
    }
  }


  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleContactNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContactNumber(event.target.value);
  };

  return (
    <div>
      <button onClick={() => setAddContactModal(!addContactModal)} className='btn outer'>Add Contact</button>
      {addContactModal ? (
        <div className='modal'>
          <div className='modal-box'>
            <h2>Add Contact</h2>
            <h4>{errorMessage}</h4>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" value={name} onChange={handleNameChange} />
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} />
            <label htmlFor="contactNumber">Contact Number: </label>
            <input type="text" name="contactNumber" id="contactNumber" value={contactNumber} onChange={handleContactNumberChange} />
            <button onClick={handleSubmit}>Add Contact</button>
            <button onClick={() => setAddContactModal(!addContactModal)}>Cancel</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default AddContact;