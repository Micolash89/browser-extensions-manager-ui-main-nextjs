"use client";

export default function FilterButton({
  name,
  tipo,
  isSelected,
  callBackFunction,
}: {
  name: string;
  tipo: string;
  isSelected: boolean;
  callBackFunction: () => void;
}) {
  
  return (
    <>
      <input
        onChange={callBackFunction}
        id={name}
        name={tipo}
        type="radio"
        checked={isSelected}
        className="hidden"
      />
      <label
        className={`capitalize py-2 px-4 rounded-2xl cursor-pointer transition-all duration-300 ${
          isSelected
            ? "bg-red-20 text-white hover:bg-red-10 hover:text-white hover:bg-red-"
            : "dark:bg-blue-900 bg-neutral-00 border border-neutral-30  hover:bg-neutral-10 dark:hover:bg-blue-800 hover:text-neutral-40 "
        }`}
        htmlFor={name}
      >
        {name}
      </label>
    </>
  );
}
