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
        className={`capitalize py-2 px-4 rounded-2xl cursor-pointer transition-all duration-200 ${
          isSelected
            ? "bg-red-800 text-white hover:bg-red-900"
            : "dark:bg-blue-900 bg-blue-100 hover:bg-blue-800"
        }`}
        htmlFor={name}
      >
        {name}
      </label>
    </>
  );
}
