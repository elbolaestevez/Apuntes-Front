    import React, { FC, useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import { fakeUniversityData } from "@/utils/fakeDataUniversity";
import { RxCross2 } from "react-icons/rx";

interface SelectInputProps {
  label: string;
  bgColor?: string;
  inputWidth?: string;
  required?: boolean;
  onOptionChange: (selectedOption: string) => void;
  enabled?: boolean;
}

const SelectInput: FC<SelectInputProps> = ({
  label,
  bgColor,
  inputWidth,
  required,
  onOptionChange,
  enabled = true,
}) => {
  const [inputValue, setInputValue] = useState(""); // Track the user input
  const [options, setOptions] = useState<string[]>([]);
  const [optionselected, setOptionselected] = useState<boolean>(false);

  const handleOptionSelect = (option: string) => {
    setInputValue(option); // Set the selected option as input value
    onOptionChange(option);
    setOptions([]);
    setOptionselected(true);
    enabled = true;
  };

  // Run effect when inputValue changes

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (newValue) {
      const filteredUniversities = fakeUniversityData.filter((university) =>
        university.universidad.toLowerCase().includes(newValue.toLowerCase())
      );
      const universityOptions = filteredUniversities.map(
        (university) => university.universidad
      );
      setOptions(universityOptions);
    } else {
      setOptions([]);
    }
  };
  const handleClearInput = () => {
    setInputValue("");
    onOptionChange("");
    setOptions([]);
    setOptionselected(false);
  };

  return (
    <div className={`${inputWidth}`}>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          value={!enabled ? "" : inputValue}
          onChange={handleInputChange}
          disabled={!enabled}
          required={required}
          className={`border ${inputWidth} ${
            !enabled ? "bg-gray-300" : ""
          } border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${bgColor}`}
        />
        {optionselected && enabled && (
          //   <div
          //     className="absolute left-80 bg-red-300 top-1/2 transform -translate-y-1/2 cursor-pointer"
          //     onClick={handleClearInput}
          //   >
          <RxCross2
            className="absolute right-60 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handleClearInput}
          />
          //   </div>
        )}
        <div className="absolute z-10 mt-1 w-full bg-white">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 transition duration-150"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectInput;
