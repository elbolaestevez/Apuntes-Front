import React, { FC, useState } from "react";
// Import Axios
import { RxCross2 } from "react-icons/rx";
import {
  fetchCursos,
  fetchFacultades,
  fetchGrados,
  fetchUniversidades,
} from "@/utils/apiData";
import { University, Facultad } from "@/app/types/apiFormApuntes";
type DataItem = University | Facultad;

interface SelectInputProps {
  label: string;
  bgColor?: string;
  inputWidth?: string;
  required?: boolean;
  onOptionChange: (selectedOption: string, id: number) => void;
  enabled?: boolean;
  id?: number;
}

const SelectInput: FC<SelectInputProps> = ({
  label,
  bgColor,
  inputWidth,
  required,
  onOptionChange,
  enabled = true,
  id,
}) => {
  const [inputValue, setInputValue] = useState(""); // Track the user input
  const [optionselected, setOptionselected] = useState<boolean>(false);
  const [options, setOptions] = useState<DataItem[]>([]);
  const [noData, setNoData] = useState<boolean>(false);
  const [focusedInput, setFocusedInput] = useState<string>("");

  const handleFocus = (inputLabel: string) => {
    setFocusedInput(inputLabel);
    setNoData(false);
  };

  const handleBlur = () => {
    setFocusedInput("");
  };

  const handleOptionSelect = (option: string, id: number) => {
    setInputValue(option); // Set the selected option as input value
    onOptionChange(option, id);
    setOptions([]);
    setOptionselected(true);
    enabled = true;
  };

  // Run effect when inputValue changes

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    try {
      let universityResponse;
      console.log("gRADO", id, label);

      if (!id) {
        universityResponse = await fetchUniversidades();
      } else if (label === "Facultad") {
        universityResponse = await fetchFacultades(id);
      } else if (label === "Grado") {
        universityResponse = await fetchGrados(id);
      } else if (label === "Curso") {
        universityResponse = await fetchCursos(id);
      }

      if (universityResponse) {
        const universityData = universityResponse;

        if (newValue) {
          const filteredUniversities = universityData.filter((university) =>
            university.nombre.toLowerCase().includes(newValue.toLowerCase())
          );

          setOptions(filteredUniversities);
        }
      } else {
        setOptions([]);
      }
    } catch (error) {
      console.error("Error al obtener los datos de la universidad:", error);
      setNoData(true);
    }
  };
  const handleClearInput = () => {
    setInputValue("");
    onOptionChange("", 0);
    setOptions([]);
    setOptionselected(false);
    setNoData(false);
  };

  return (
    <div className={`${inputWidth} relative`}>
      <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          value={!enabled ? "" : inputValue}
          onChange={handleInputChange}
          disabled={!enabled}
          required={required}
          onFocus={() => handleFocus(label)}
          onBlur={handleBlur}
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
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={handleClearInput}
          />
          //   </div>
        )}
        {noData && focusedInput === label && enabled ? (
          <p className="text-red-300 text-xs">
            No hay datos para este campo con los campos seleccionados
          </p>
        ) : null}
        <div className="absolute z-10 mt-1 w-full bg-white">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 transition duration-150"
              onClick={() => handleOptionSelect(option.nombre, option.id)}
            >
              {option.nombre}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectInput;
