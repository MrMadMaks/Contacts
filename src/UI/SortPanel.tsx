type IOnUpdateSort = {
  onChange(value: string): void;
  value: string;
  options: { name: string; value: string }[];
  DefaultOption: string;
};

const SortPanel = ({
  DefaultOption,
  options,
  value,
  onChange,
}: IOnUpdateSort) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="inline-flex mr-2 justify-center rounded-md border border-transparent bg-blue-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 max-[630px]:mr-0"
    >
      <option disabled value="">
        {DefaultOption}
      </option>
      {options.map((item) => (
        <option value={item.value} key={item.value} className="text-black">
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default SortPanel;
