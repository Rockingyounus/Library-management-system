import { useState, useEffect } from "react" 
import { BackendApi } from "../../client/backend-api/book";

export const Booklist = () => {
   
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const { books } = await BackendApi.book.getAllbooks()
    console.log(books)
    setBooks(books)
  }

  useEffect(() => {
    fetchBooks().catch(console.error)
  },[])

    return (
// {books.length > 0 ? (
<>Book
{/* <div className="w-[100%]">
       
  <body class="bg-gray-100">
  <div class="container mx-auto p-8">
    <h1 class="text-2xl font-semibold mb-4">Book List</h1>
    <table class="min-w-full bg-white shadow-md rounded">
      <thead>
        <tr class="border-b">
          <th class="text-left py-2 px-3">Book Name</th>
          <th class="text-left py-2 px-3">Category</th>
          <th class="text-left py-2 px-3">Quantity</th>
          <th class="text-left py-2 px-3">Available</th>
          <th class="text-left py-2 px-3">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b">
          <td class="py-2 px-3">Book A</td>
          <td class="py-2 px-3">Fiction</td>
          <td class="py-2 px-3">10</td>
          <td class="py-2 px-3">5</td>
          <td class="py-2 px-3">$15.99</td>
          <td class="py-2 px-3">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View
            </button>
            </td>
        </tr>
        <tr class="border-b">
          <td class="py-2 px-3">Book B</td>
          <td class="py-2 px-3">Non-fiction</td>
          <td class="py-2 px-3">15</td>
          <td class="py-2 px-3">10</td>
          <td class="py-2 px-3">$12.49</td>
          <td class="py-2 px-3">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View
            </button> 
            </td>
        </tr>
        
      </tbody>
    </table>
  </div>
</body>
        
</div> */}
</>

       
        
    )
}