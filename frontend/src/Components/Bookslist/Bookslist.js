import { useState, useEffect } from "react";
//import { BackendApi } from "../../client/backend-api"
import axios from "axios";

export const Booklist = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/v1/book").then((response) => {
      console.log(response);
      setBooks(response.data.books);
      // book=response.json()
    });
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold ">Book List</h1>
      {books.length > 0 ? (
        <>
          <section className="bg-gray-100 p-4">
            <div className="container mx-auto">
              <table className="min-w-full border rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-2">Book Name</th>
                    <th className="px-4 py-2">ISBN</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Price</th>
                  </tr>
                </thead>
                {/* <tbody id="table-body">
            
        </tbody> */}

                {books.map((books) => {
                  return (
                    <tbody className="mx-auto table-auto">
                      <tr key={books.isbn}>
                        <td className="border-b  p-6   px-24 py-2 ">
                          {books.name}
                        </td>
                        <td className="border-b   p-6  px-24 py-2 ">
                          {books.isbn}
                        </td>
                        <td className="border-b   p-6  px-24 py-2 ">
                          {books.Category}
                        </td>
                        <td className="border-b p-6    px-24 py-2 ">
                          {books.Quantity}
                        </td>
                        <td className="border-b  p-6   px-24 py-2 ">
                          {books.Price}
                        </td>
                      </tr>
                      {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">View </button>  */}
                    </tbody>
                  );
                })}
              </table>
            </div>
          </section>
        </>
      ) : (
        <h1>No Books found</h1>
      )}
    </>
  );
};
