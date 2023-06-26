import { useState } from "react";

interface IOnUpdateSearch {
    onUpdateSearch(term: string): void;
    onProp(filter: string | null): void;
}


const EmailFilter = ({ onUpdateSearch, onProp }: IOnUpdateSearch) => {

    const [term, setTerm] = useState('')

    const onUpdateSearchLocal = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        const filter = e.currentTarget.getAttribute('data-filter')
        setTerm(term)
        onUpdateSearch(term)
        onProp(filter)
    }

    return (
        <input
            type="text"
            className="bg-white/20 text-sm text-white py-1 pl-7 min-w-[12rem] focus:placeholder:text-slate-400  hover:placeholder:text-slate-400 rounded-lg outline-none placeholder:text-white"
            placeholder="Фильтр по Email"
            value={term}
            onChange={onUpdateSearchLocal}
            data-filter='email' />
    );
};

export default EmailFilter;