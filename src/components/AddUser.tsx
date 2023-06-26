
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { IContacts } from '../types/IContacts';


interface IAddUser {
    isOpenCon: boolean;
    setOpenCon(toggle: boolean): void;
    createAddUser(newItem: IContacts): void;
}

const AddUser = ({ isOpenCon, setOpenCon, createAddUser }: IAddUser) => {

    const [newUser, setNewUser] = useState({ name: '', avatar: '', phone: '', address: '', email: '', })

    const style = "text-sm font-medium text-gray-600 border border-gray-400 py-1 pl-7 w-full focus:text-slate-700 hover:text-slate-700 rounded-lg outline-none mb-1 truncate"

    const closeModal = () => {
        setOpenCon(false)
        setNewUser({ name: '', avatar: '', phone: '', address: '', email: '', })
    }

    const createUser = (name: string, avatar: string, phone: string, address: string, email: string,) => {
        const newItem = {
            name,
            avatar,
            phone,
            address,
            email,
            id: uuidv4(),
        }
        return newItem;
    }

    const crtUser = () => {
        closeModal()
        createAddUser(createUser(newUser.name, newUser.avatar, newUser.phone, newUser.address, newUser.email,))
    }

    return (
        <>
            <Transition appear show={isOpenCon} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <span className="mb-1 inline-block text-xs text-gray-600" >Аватар:</span> <input
                                        type="text"
                                        value={newUser.avatar}
                                        onChange={(e) => setNewUser({ ...newUser, avatar: e.target.value })}
                                        className={style} />
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg leading-6 text-gray-900 bg-white"
                                    >
                                        <span className="mb-1 inline-block text-xs text-gray-600" >Имя:</span><input
                                            type="text"
                                            value={newUser.name}
                                            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                            className={style} />
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-600">
                                            <span className='mb-1 inline-block text-xs' >Телефон:</span>
                                            <input type="text" value={newUser.phone} onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })} className={style} />
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className='mb-1 inline-block text-xs' >Адрес:</span>
                                            <input type="text" value={newUser.address} onChange={(e) => setNewUser({ ...newUser, address: e.target.value })} className={style} />
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className='mb-1 inline-block text-xs' >Email:</span>
                                            <input type="email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} className={style} />
                                        </p>
                                    </div>

                                    <div className="flex gap-2 flex-wrap mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex mr-2 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Закрыть
                                        </button>
                                        <button
                                            type="button"
                                            className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                                            onClick={crtUser}
                                        >
                                            Сохранить
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default AddUser;