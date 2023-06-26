import { useState } from "react";
import { IContacts } from "../types/IContacts";
import ContactsList from "./ContactsList";
import ReactPaginate from "react-paginate";

interface IPaginatedUsers {
  itemsPerPage: number;
  users: IContacts[];
  sort: string;
  filter: string;
  term: string;
  setAddress: (address: string) => void;
  setPhone: (phone: string) => void;
  showId: (id: string) => void;
  setAvatar: (avatar: string) => void;
  setOpen: (toggle: boolean) => void;
  setEmail: (email: string) => void;
  setName: (name: string) => void;
  filterUser: (users: IContacts[], filter: string, term: string) => IContacts[];
  useSorted: (currentItems: IContacts[], sort: string) => IContacts[];
}

interface IPageClick {
  selected: number;
}

export const PaginatedUsers = ({
  users,
  itemsPerPage,
  setPhone,
  setAvatar,
  showId,
  setEmail,
  setName,
  setAddress,
  setOpen,
  filterUser,
  useSorted,
  sort,
  filter,
  term,
}: IPaginatedUsers) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = users.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(users.length / itemsPerPage);

  const handlePageClick = (event: IPageClick) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    setItemOffset(newOffset);
  };

  const visibleData = filterUser(useSorted(currentItems, sort), filter, term);

  return (
    <>
      <ContactsList
        showId={showId}
        setOpen={setOpen}
        setAddress={setAddress}
        setPhone={setPhone}
        setEmail={setEmail}
        setName={setName}
        setAvatar={setAvatar}
        visibleData={visibleData}
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <svg
            width="18"
            height="18"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.589844 8.825L4.40651 5L0.589844 1.175L1.76484 0L6.76484 5L1.76484 10L0.589844 8.825Z"
              className="fill-blue-900 group-hover:fill-white"
              fill="#ADBFDF"
            />
          </svg>
        }
        onPageChange={(e) => handlePageClick(e)}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <svg
            width="18"
            height="18"
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group"
          >
            <path
              d="M6.175 8.825L2.35833 5L6.175 1.175L5 0L0 5L5 10L6.175 8.825Z"
              className="fill-blue-900 group-hover:fill-white"
            />
          </svg>
        }
        renderOnZeroPageCount={null}
        containerClassName="flex items-center justify-between max-w-[24%] m-auto rounded-md border border-transparent bg-blue-200 px-6 py-4 text-sm font-medium text-blue-900 max-[700px]:flex-col max-[700px]:gap-2"
        pageClassName="hover:text-white"
        activeClassName="text-white hover:"
        previousClassName="hover:text-white"
        nextClassName="hover:text-white"
      />
    </>
  );
};
