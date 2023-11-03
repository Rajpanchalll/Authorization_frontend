import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
 

  const [fetchdata, setFetchdata] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setFetchdata(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-full">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Address
            </th>
           
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Company
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {fetchdata.map((element) => (
            <tr key={element.id}>
              <td className="px-6 py-4 whitespace-nowrap">{element.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{element.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{element.email}</td>
             
              <td className="px-6 py-4 whitespace-nowrap">{element.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {element.address.city}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{element.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
