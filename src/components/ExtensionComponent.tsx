import { useState } from "react";
import Image from "next/image";
import { ExtensionComponentProps } from "@/lib/definitions";
import { motion } from "framer-motion";

export default function ExtensionComponent({
  name,
  description,
  url,
  isActive: initialIsActive,
  onToggle,
  onRemove,
  mensajeEliminar,
  index
}: ExtensionComponentProps) {
  const [isActive, setIsActive] = useState(initialIsActive);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  const tableRowVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.10,
        duration: 0.25,
        ease: "easeOut",
      },
    }),
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const handleToggle = () => {
    const newActiveState = !isActive;
    setIsActive(newActiveState);

    if (onToggle) {
      onToggle(name, newActiveState);
    }
  };

  const showConfirmation = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsConfirmationVisible(true);
  };

  const hideConfirmation = () => {
    setIsConfirmationVisible(false);
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove(name);
    }
  };

  return (
    <motion.section variants={tableRowVariants} className="w-80 dark:bg-neutral-60 bg-neutral-00 p-5 rounded-2xl border border-neutral-30 flex flex-col justify-between" 
           initial="hidden"
          animate="visible"
          exit="exit"
          custom={index}
      >
      <div className="flex gap-4 items-start ">
        <Image src={url} alt={name + " logo"} width={50} height={50} />
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-black dark:text-white |">{name}</h4>
          <p className="text-sm text-neutral-50 dark:text-neutral-30">
            {description}
          </p>
        </div>
      </div>

      <div className=" flex justify-between mt-6">
        <button
          onClick={showConfirmation}
          className="border text-black border-neutral-30 dark:text-white hover:border-red-200 hover:bg-red-30 rounded-2xl py-1 px-3 cursor-pointer
          hover:text-white transition-all duration-100"
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
          <div
            className="relative w-11 h-6 bg-neutral-30 dark:bg-neutral-40 peer-focus:outline-none rounded-full peer peer-focus:ring-2 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600 
          peer-checked:hover:bg-red-10 dark:peer-checked:bg-red-600 transition-all duration-300"
          ></div>
        </label>
        {isConfirmationVisible && (
          <div className="fixed inset-0 backdrop-blur-xs  flex items-center justify-center z-50">
            <div className="w-72 p-4 bg-white dark:bg-neutral-60 border border-neutral-30 dark:border-neutral-40 rounded-2xl shadow-lg">
              <p className="mb-2 text-sm">
                Are you sure you want to delete {" "}
                {mensajeEliminar ? mensajeEliminar : "this item?"}
              </p>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={hideConfirmation}
                  className="px-3 capitalize py-1 text-sm bg-gray-50 rounded text-gray-600 hover:text-gray-800 cursor-pointer dark:bg-neutral-30 dark:text-black" 
                >
                  cancel
                </button>
                <button
                  type="button"
                  onClick={handleRemove}
                  className="px-3 capitalize py-1  text-sm text-white bg-red-20 rounded hover:bg-red-30 cursor-pointer"
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}