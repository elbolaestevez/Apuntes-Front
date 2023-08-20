import React, { FC, useState } from "react";
import { handleInputBlur } from "@/utils/handleInputBlur";
interface TextInputProps {
  label: string;
  bgColor?: string;
  inputWidth?: string;
  inputheightclass?: string;
  placeholder: string;
  required?: boolean;
  inputRef: React.RefObject<HTMLInputElement>; // Use RefObject type
  inputType: "text" | "email" | "password" | "number";
  validateFormat?: boolean;
}

const TextInput: FC<TextInputProps> = ({
  label,
  bgColor,
  inputWidth,
  placeholder,
  required,
  inputRef,
  inputType,
  inputheightclass,
}) => {
  const [error, setError] = useState<string | null>(null);

  const inputBgColor = bgColor || "bg-white"; // Fondo blanco por defecto
  const inputWidthClass = inputWidth || "w-full";
  const defaultInputHeightClass = "h-[40px]";

  console.log("ref", inputRef);

  const handleBlur = () => {
    const inputValue = inputRef.current?.value || "";

    let valueToCheck: string | number = inputValue; // Usar unión de tipos

    if (label === "Notas") {
      valueToCheck = parseFloat(inputValue); // Convertir a número decimal
    }

    const result = handleInputBlur(label, valueToCheck);
    if (result.error && inputRef.current) {
      inputRef.current.value = "";
    }

    setError(result.error);
  };

  return (
    <div className={`${inputWidthClass}  `}>
      <label className="block mb-2 text-base font-medium text-graytextcolor dark:text-white">
        {label}
      </label>
      <div className="flex flex-col">
        <input
          type={inputType}
          className={`border ${
            inputheightclass ?? defaultInputHeightClass
          } ${inputWidthClass} text-sm  ${
            error ? "border-red-300" : "border-gray-300"
          }  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${inputBgColor}`}
          placeholder={placeholder}
          required={required}
          ref={inputRef}
          onBlur={handleBlur}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default TextInput;
