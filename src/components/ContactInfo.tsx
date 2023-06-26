import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

interface IContactInfo {
  isOpen: boolean;
  name: string;
  email: string;
  phone: string;
  address: string;
  avatar: string;
  id: string;
  setOpen(toggle: boolean): void;
  deleteUser(id: string): void;
  updateField(id: string): void;
  setIsName(name: string): void;
  setIsPhone(phone: string): void;
  setIsAddress(address: string): void;
  setIsEmail(email: string): void;
  setIsAvatar(avatar: string): void;
}

const ContactInfo = ({
  isOpen,
  setOpen,
  name,
  email,
  phone,
  avatar,
  address,
  id,
  deleteUser,
  updateField,
  setIsName,
  setIsPhone,
  setIsAddress,
  setIsEmail,
  setIsAvatar,
}: IContactInfo) => {
  const [disabled, setDisabled] = useState(true);

  const toggleDisable = (disabled: boolean): string | undefined => {
    if (!disabled) {
      const style =
        "text-sm font-medium text-gray-600 border border-gray-400 py-1 pl-7 w-full focus:text-slate-700 hover:text-slate-700 rounded-lg outline-none mb-1 truncate";
      return style;
    }
  };

  const closeModal = () => {
    setDisabled(true);
    setOpen(false);
    setIsName("");
    setIsPhone("");
    setIsAddress("");
    setIsAvatar("");
    setIsEmail("");
  };

  const saveUpdate = () => {
    updateField(id);
    closeModal();
  };

  const deleteContact = (id: string) => {
    deleteUser(id);
    closeModal();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
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
                  <div className="flex justify-center mb-2">
                    <img src={avatar} width="84px" height="84px" alt="аватар" />
                  </div>
                  {!disabled ? (
                    <span className="mb-1 inline-block text-xs text-gray-600">
                      Аватар:
                    </span>
                  ) : null}
                  {!disabled ? (
                    <input
                      type="text"
                      value={avatar}
                      onChange={(e) => setIsAvatar(e.target.value)}
                      disabled={disabled}
                      className={`disabled:bg-white disabled:w-[80%] ${toggleDisable(
                        disabled
                      )}`}
                    />
                  ) : null}
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 text-gray-900 bg-white"
                  >
                    {!disabled ? (
                      <span className="mb-1 inline-block text-xs text-gray-600">
                        Имя:
                      </span>
                    ) : null}
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setIsName(e.target.value)}
                      disabled={disabled}
                      className={`disabled:bg-white disabled:w-[80%] ${toggleDisable(
                        disabled
                      )}`}
                    />
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">
                      <label
                        htmlFor="phone"
                        className={`mb-1 inline-block ${
                          !disabled ? "text-xs" : "text-sm"
                        }`}
                      >
                        Телефон:
                      </label>{" "}
                      <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setIsPhone(e.target.value)}
                        disabled={disabled}
                        className={`disabled:bg-white disabled:w-[80%] ${toggleDisable(
                          disabled
                        )}`}
                      />
                    </p>
                    <p className="text-sm text-gray-600">
                      <span
                        className={`mb-1 inline-block ${
                          !disabled ? "text-xs" : "text-sm"
                        }`}
                      >
                        Адрес:
                      </span>{" "}
                      <input
                        type="text"
                        onChange={(e) => setIsAddress(e.target.value)}
                        value={address}
                        disabled={disabled}
                        className={`disabled:bg-white disabled:w-[80%] ${toggleDisable(
                          disabled
                        )}`}
                      />
                    </p>
                    <p className="text-sm text-gray-600">
                      <span
                        className={`mb-1 inline-block ${
                          !disabled ? "text-xs" : "text-sm"
                        }`}
                      >
                        Email:
                      </span>{" "}
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setIsEmail(e.target.value)}
                        disabled={disabled}
                        className={`disabled:bg-white disabled:w-[80%] ${toggleDisable(
                          disabled
                        )}`}
                      />
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
                      className="inline-flex mr-2 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => deleteContact(id)}
                    >
                      Удалить
                    </button>
                    <button
                      type="button"
                      className={`${
                        disabled ? "inline-flex" : "hidden"
                      } justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                      onClick={() => setDisabled(false)}
                    >
                      Редактировать
                    </button>
                    <button
                      type="button"
                      className={`${
                        disabled ? "hidden" : "inline-flex"
                      } justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                      onClick={saveUpdate}
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
  );
};

export default ContactInfo;
