
import { useState } from 'react';
import Image from 'next/image';

interface ExtensionComponentProps {
  name: string;
  description: string;
  url: string;
  isActive: boolean;
  onToggle?: (name: string, isActive: boolean) => void; // Callback opcional para notificar cambios al componente padre
  onRemove?: (name: string) => void; // Callback opcional para remover
}

export default function ExtensionComponent({ 
  name, 
  description, 
  url, 
  isActive: initialIsActive,
  onToggle,
  onRemove 
}: ExtensionComponentProps) {
  const [isActive, setIsActive] = useState(initialIsActive);

  const handleToggle = () => {
    const newActiveState = !isActive;
    setIsActive(newActiveState);
    
    // Notificar al componente padre si existe el callback
    if (onToggle) {
      onToggle(name, newActiveState);
    }
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove(name);
    }
  };

  return (
    <section className="w-80 dark:bg-blue-900 bg-blue-100 p-5 rounded-2xl border border-blue-300">
      <div className="flex gap-4 items-start">
        <Image
          src={url}
          alt={name + " logo"}
          width={50}
          height={50}
        />
        <div className="flex flex-col gap-2">
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm">{description}</p>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button 
          onClick={handleRemove}
          className="border border-blue-300 text-white hover:border-red-800 hover:bg-red-900 rounded-2xl py-1 px-3 cursor-pointer"
        >
          Remove
        </button>

        <label className="inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            checked={isActive} 
            onChange={handleToggle}
            className="sr-only peer" 
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-focus:ring-2 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600 dark:peer-checked:bg-red-600"></div>
        </label>
      </div>
    </section>
  );
}