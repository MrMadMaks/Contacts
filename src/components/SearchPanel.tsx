import SortPanel from "../UI/SortPanel";
import SearchName from "../UI/NameFilter";
import AddressFilter from "../UI/AddressFilter";
import PhoneFilter from "../UI/PhoneFilter";
import EmailFilter from "../UI/EmailFilter";

export type IOnUpdateSearch = {
  onUpdateSearch(term: string): void;
  sort: string;
  setSort(sort: string): void;
  onProp(filter: string | null): void;
  setOpenCon(toggle: boolean): void;
  exportJson(): void;
};

const SearchPanel = ({
  onUpdateSearch,
  sort,
  setSort,
  onProp,
  setOpenCon,
  exportJson,
}: IOnUpdateSearch) => {
  const openModal = () => {
    setOpenCon(true);
  };

  return (
    <div className="bg-[#273C69] h-24 w-full p-4 px-6 flex items-center justify-between max-[1220px]:flex-col max-[1220px]:h-[9rem] max-[1220px]:items-start max-[630px]:flex-row max-[630px]:h-[11rem] max-[468px]:flex-col max-[468px]:h-[20rem]">
      <div className="flex flex-wrap gap-2 items-center w-[40rem] max-[630px]:max-w-[12rem] max-[468px]:mb-[8px]">
        <SearchName onUpdateSearch={onUpdateSearch} onProp={onProp} />
        <AddressFilter onUpdateSearch={onUpdateSearch} onProp={onProp} />
        <PhoneFilter onUpdateSearch={onUpdateSearch} onProp={onProp} />
        <EmailFilter onUpdateSearch={onUpdateSearch} onProp={onProp} />
      </div>
      <div className="flex max-[630px]:flex-col gap-2">
        <button
          className="inline-flex mr-2 justify-center rounded-md border border-transparent bg-blue-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 max-[630px]:mr-0"
          onClick={exportJson}
        >
          Скачать список контактов
        </button>
        <button
          type="button"
          className="inline-flex mr-2 justify-center rounded-md border border-transparent bg-blue-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 max-[630px]:mr-0"
          onClick={openModal}
        >
          Добавить контакт
        </button>
        <SortPanel
          value={sort}
          onChange={(sort) => setSort(sort)}
          DefaultOption="Сортировка"
          options={[
            { value: "name", name: "По имени" },
            { value: "address", name: "По адресу" },
          ]}
        />
      </div>
    </div>
  );
};

export default SearchPanel;
