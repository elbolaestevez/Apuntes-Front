import React, { FC } from "react";

interface TextInputProps {
  label: string;
  bgColor?: string;
  inputWidth?: string;
  inputheightclass?: string;
  placeholder: string;
  required?: boolean;
  inputRef: React.Ref<HTMLInputElement>;
  inputType: "text" | "email" | "password" | "number";
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
  const inputBgColor = bgColor || "bg-white"; // Fondo blanco por defecto
  const inputWidthClass = inputWidth || "w-full";
  const defaultInputHeightClass = "h-[40px]"; // Ancho completo por defecto

  return (
    <div className={`${inputWidthClass}  `}>
      <label className="block mb-2 text-base font-medium text-graytextcolor dark:text-white">
        {label}
      </label>
      <div className={``}>
        <input
          type={inputType}
          className={`border ${
            inputheightclass ?? defaultInputHeightClass
          } ${inputWidthClass} border-gray-300 text-sm text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${inputBgColor}`}
          placeholder={placeholder}
          required={required}
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default TextInput;
