import { IContacts } from "../types/IContacts";
import ContactItem from "./ContactItem";

interface IUsers {
  visibleData: IContacts[];
  setOpen(toggle: boolean): void;
  setAddress(address: string): void;
  setPhone(phone: string): void;
  setEmail(email: string): void;
  setName(name: string): void;
  setAvatar(avatar: string): void;
  showId(id: string): void;
}

const ContactsList = ({
  visibleData,
  setOpen,
  setAddress,
  setPhone,
  setEmail,
  setName,
  setAvatar,
  showId,
}: IUsers) => {
  return (
    <>
      <div className="relative z-10 bg-white h-12 w-full shadow-md flex items-center max-[1024px]:h-40">
        <div className="w-full h-full mx-[1.5rem] grid grid-cols-[60px_minmax(6rem,_14%)_minmax(5rem,_12%)_minmax(7rem,_30%)_minmax(7rem,_30%)] items-center pl-[0.6rem] max-[1024px]:grid-cols-1 max-[1024px]:gap-2 max-[1024px]:py-4">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            className="place-self-center cursor-pointer max-[1024px]:place-self-start"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="11" r="4" fill="#273C69" />
            <circle cx="11" cy="4" r="4" fill="#273C69" />
            <circle cx="18" cy="11" r="4" fill="#273C69" />
            <circle cx="11" cy="18" r="4" fill="#273C69" />
          </svg>

          <span className="text-sm text-black">Имя</span>
          <span className="text-sm text-black">Телефон</span>
          <span className="text-sm text-black">Адрес</span>
          <span className="text-sm text-black">Электронная почта</span>
        </div>
      </div>

      <div className="border-x-[24px] border-[#E3E7F2] pb-6">
        {visibleData.map((item) => {
          const { id, ...itemProps } = item;
          return (
            <ContactItem
              key={id}
              id={item.id}
              showId={showId}
              setOpen={setOpen}
              setAddress={setAddress}
              setPhone={setPhone}
              setEmail={setEmail}
              setName={setName}
              setAvatar={setAvatar}
              {...itemProps}
            />
          );
        })}
      </div>
    </>
  );
};

export default ContactsList;
