import { IContactItem } from "../types/IContactItem";

const ContactItem = ({ name, phone, address, email, avatar, setOpen, setAvatar, setName, setAddress, setPhone, setEmail, showId, id }: IContactItem) => {

    const openModal = () => {
        setOpen(true)
        setName(name)
        setAddress(address)
        setPhone(phone)
        setAvatar(avatar)
        setEmail(email)
        showId(id)
    }

    return (
        < div onClick={openModal} className="mb-[3px] bg-white h-16 w-full cursor-pointer grid grid-cols-[60px_minmax(6rem,_14%)_minmax(5rem,_12%)_minmax(7rem,_30%)_minmax(7rem,_30%)] items-center pl-[0.6rem] max-[1024px]:grid-cols-1 max-[1024px]:gap-2 max-[1024px]:py-4 max-[1024px]:h-[12rem]" >
            <img className="place-self-center max-[1024px]:place-self-start" width="44px" height="44px" src={avatar} alt="аватар" />
            <span className="text-sm text-black">{name}</span>
            <span className="text-sm text-black">{phone}</span>
            <span className="text-sm text-black">{address}</span>
            <span className="text-sm text-black">{email}</span>
        </div >
    );
};

export default ContactItem;