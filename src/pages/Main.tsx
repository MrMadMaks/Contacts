import SearchPanel from "../components/SearchPanel";
import { contacts } from "../store/ContactsStore";
import { useState } from "react";
import { IContacts } from "../types/IContacts";
import { useMemo } from "react";
import ContactInfo from "../components/ContactInfo";
import AddUser from "../components/AddUser";
import { PaginatedUsers } from "../components/PaginatedUsers";

const Main = () => {
  const [users, setUsers] = useState(contacts);
  const [term, setTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCon, setIsOpenCon] = useState(false);

  const [avatar, setIsAvatar] = useState("");
  const [name, setIsName] = useState("");
  const [email, setIsEmail] = useState("");
  const [phone, setIsPhone] = useState("");
  const [address, setIsAddress] = useState("");
  const [id, setId] = useState("");

  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  const createAddUser = (newItem: IContacts) => {
    return setUsers([...users, newItem]);
  };

  const updateField = (id: string) => {
    let temp = users.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          name: name,
          email: email,
          phone: phone,
          address: address,
          avatar: avatar,
        };
      } else {
        return el;
      }
    });
    setUsers(temp);
  };

  const deleteUser = (id: string) => {
    setUsers(users.filter((item) => item.id !== id));
  };

  const useSorted = (users: IContacts[], sort: string | undefined) => {
    const sortedUsers = useMemo(() => {
      if (sort) {
        return [...users].sort((a, b) =>
          a[sort as keyof IContacts].localeCompare(b[sort as keyof IContacts])
        );
      }
      return users;
    }, [sort, users]);

    return sortedUsers;
  };

  const showId = (id: string) => {
    setId(id);
  };

  const onUpdateSearch = (term: string) => {
    setTerm(term);
  };

  const setOpen = (toggle: boolean) => {
    setIsOpen(toggle);
  };

  const setOpenCon = (toggle: boolean) => {
    setIsOpenCon(toggle);
  };

  const setName = (name: string) => {
    setIsName(name);
  };

  const setEmail = (email: string) => {
    setIsEmail(email);
  };

  const setAvatar = (avatar: string) => {
    setIsAvatar(avatar);
  };

  const setPhone = (phone: string) => {
    setIsPhone(phone);
  };

  const setAddress = (address: string) => {
    setIsAddress(address);
  };

  const onProp = (filter: string) => {
    setFilter(filter);
  };

  const filterUser = (users: IContacts[], filter: string, term: string) => {
    switch (filter) {
      case "address":
        if (term.length === 0) {
          return users;
        }
        return users.filter((item) => {
          return (
            item.address.toLowerCase().indexOf(term.toLocaleLowerCase()) > -1
          );
        });
      case "name":
        if (term.length === 0) {
          return users;
        }
        return users.filter((item) => {
          return item.name.toLowerCase().indexOf(term.toLocaleLowerCase()) > -1;
        });
      case "phone":
        if (term.length === 0) {
          return users;
        }
        return users.filter((item) => {
          return (
            item.phone.toLowerCase().trim().indexOf(term.toLocaleLowerCase()) >
            -1
          );
        });
      case "email":
        if (term.length === 0) {
          return users;
        }
        return users.filter((item) => {
          return (
            item.email.toLowerCase().indexOf(term.toLocaleLowerCase()) > -1
          );
        });
      default:
        return users;
    }
  };

  const exportJson = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(users)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";
    link.click();
  };

  return (
    <main className="bg-[#E3E7F2] pb-8">
      <SearchPanel
        onUpdateSearch={onUpdateSearch}
        sort={sort}
        setSort={setSort}
        onProp={onProp}
        setOpenCon={setOpenCon}
        exportJson={exportJson}
      />
      <ContactInfo
        setIsAddress={setIsAddress}
        setIsAvatar={setIsAvatar}
        setIsEmail={setIsEmail}
        setIsPhone={setIsPhone}
        setIsName={setIsName}
        updateField={updateField}
        id={id}
        deleteUser={deleteUser}
        isOpen={isOpen}
        setOpen={setOpen}
        name={name}
        email={email}
        phone={phone}
        address={address}
        avatar={avatar}
      />
      <AddUser
        createAddUser={createAddUser}
        isOpenCon={isOpenCon}
        setOpenCon={setOpenCon}
      />
      <PaginatedUsers
        itemsPerPage={7}
        filterUser={filterUser}
        useSorted={useSorted}
        users={users}
        setAddress={setAddress}
        setPhone={setPhone}
        showId={showId}
        setAvatar={setAvatar}
        setOpen={setOpen}
        setEmail={setEmail}
        setName={setName}
        sort={sort}
        term={term}
        filter={filter}
      />
    </main>
  );
};

export default Main;
