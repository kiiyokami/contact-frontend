import React, { Dispatch, SetStateAction } from 'react'

interface ContactData{
  name: string;
  email: string;
  contactNumber: string;
}

interface ContactProps {
  data: ContactData[];
  name: string;
  setData: Dispatch<SetStateAction<ContactData[]>>;
}

const DeleteContact: React.FC<ContactProps> = ({ data, name, setData }) => {
  const [toOpen, setToOpen] = React.useState(false);
  const deleteContact = () => {
    setData(prevData => {
      const updatedData = prevData.filter(contact => contact.name !== name);
      localStorage.setItem('contacts', JSON.stringify(updatedData));
      return updatedData;
    });
    setToOpen(!toOpen);
  }
  return (
    <>
      <button onClick={() => setToOpen(!toOpen)} className='btn'>Delete</button>
      {toOpen && (
        <div className='modal'>
          <div className="model-box">
            <h2>Do you want to delete this contact?</h2>
            <button onClick={deleteContact}>Yes</button>
            <button onClick={() => setToOpen(!toOpen)}>No</button>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteContact;