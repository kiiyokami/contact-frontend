import React, { Dispatch, SetStateAction } from 'react'
import DeleteContact from "../components/deleteContact";

interface ContactData{
        name: string;
        email: string;
        contactNumber: string;
      }
      
interface ContactProps {
        data: ContactData[];
        setData: Dispatch<SetStateAction<ContactData[]>>;
}

const dataTable: React.FC<ContactProps> = ({ data, setData }) => {
        const info = data;
return (
    <table>
        <thead>
                <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Modify</th>
                </tr>
        </thead>
        <tbody>
        {info && info.length > 0 ? (
            info.map((contact: ContactData) => {
                return (
                        <tr key={contact.email}>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.contactNumber}</td>
                                <td>
                                        <DeleteContact data={data} name={contact.name} setData={setData} />
                                </td>
                        </tr>
                )
                    })
            ) : (
                    <tr>
                            <td colSpan={4}>No data available</td>
                    </tr>
            )}
        </tbody>
    </table>
)
}

export default dataTable;