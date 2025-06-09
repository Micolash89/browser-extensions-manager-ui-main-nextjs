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
        className={`capitalize py-2 px-4 rounded-2xl cursor-pointer transition-all duration-100 ${
          isSelected
            ? "bg-red-20 text-white hover:bg-red-10 hover:text-white "
            : "dark:bg-neutral-50 dark:text-white bg-neutral-00 border border-neutral-30  hover:bg-neutral-10 dark:hover:bg-neutral-40 hover:text-black dark:hover:text-white"
        }`}
        htmlFor={name}
      >
        {name}
      </label>
    </>
  );
}
