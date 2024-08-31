import AddContact from "./components/addContact";
import DataTable from "./partials/dataTable";
import './App.css';
import { useEffect, useState } from "react";

interface ContactData{
  name: string;
  email: string;
  contactNumber: string;
}

export default function App() {
  const title = "Contacts App";
  const [data, setData] = useState<ContactData[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem('contacts');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, [setData]);

  return (
    <>
      <h1 className="title">{title}</h1>
      <AddContact data={data} setData={setData}/>
      <DataTable data={data} setData={setData} />
    </>
  );
}
