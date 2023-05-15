import React, { useState, useEffect } from "react";
import {
  getUserTicket,
  updateUserTicket,
  userTicketFiltered,
} from "../../axios/userTicket";
import { GrCheckboxSelected, GrCheckbox } from "react-icons/gr";
import Pagination from "../../components/Pagination";
import { CiBarcode } from "react-icons/ci";

const ShowUserTicketPage = () => {
  const [ticket, setTicket] = useState([]);
  const [changeData, setChangeData] = useState(false);
  const [update, setUpdate] = useState({
    id: 0,
  });
  const [userName, setUserName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostPostIndex = lastPostIndex - postPerPage;
  const currentPosts = ticket.slice(firstPostPostIndex, lastPostIndex);

  useEffect(() => {
    userTicketFiltered(userName, (result) => setTicket(result.data));
  }, [userName]);

  const handleFilterChange = (event) => {
    setUserName(event.target.value);
  };

  const updateHandler = async (e) => {
    setUpdate({ ...update, id: e });
  };

  useEffect(() => {
    if (update.id !== 0) {
      updateUserTicket(update, () => setChangeData(!changeData));
    }
  }, [update]);

  useEffect(() => {
    getUserTicket((result) => setTicket(result));
  }, [changeData]);

  return (
    <>
      <div className="h-[64px]"></div>
      <div className="p-4 sm:ml-64 h-screen dark:bg-gray-900">
        {/* Search Bar */}
        <div className=" flex flex-wrap justify-between py-5">
          {/* Search */}
          <div className="container w-80">
            <form className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  onChange={handleFilterChange}
                  type="text"
                  id="simple-search"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search by name"
                  required
                />
              </div>
            </form>
          </div>
          {/* {barcode} */}

          <button
            onClick={() => {}}
            type="button"
            class="focus:outline-none text-white bg-[#019267] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <CiBarcode size={30}/>
            Scan
          </button>
        </div>

        {/* Table */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Ticket Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Owner
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Barcode
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((item) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td
                      scope="row"
                      className="flex gap-3 items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.id}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-3">{item.user.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-3">
                        {item.ticketType.category}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-3">
                        {item.status === true ? (
                          <GrCheckboxSelected size={23} class="bg-green-400" />
                        ) : (
                          <GrCheckbox size={23} />
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <img
                        className="w-12 h-12 object-cover"
                        src={item.barcode}
                        alt="user photo"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="cursor-pointer" onClick={() => {}}>
                        {item.status === true ? (
                          <button
                            value={item.orderId}
                            type="button"
                            class="focus:outline-none text-white bg-[#019267] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:focus:ring-green-800"
                          >
                            Used
                          </button>
                        ) : (
                          <button
                            onClick={() => updateHandler(item.id)}
                            type="button"
                            class="focus:outline-none text-white bg-[#FFA500] hover:bg-[#FF8C00] focus:ring-4 focus:ring-[#FFA500] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#FFA500] dark:hover:bg-[#FF8C00] dark:focus:ring-[#FFA500]"
                          >
                            Check
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Pagination
          totalPosts={ticket.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default ShowUserTicketPage;
