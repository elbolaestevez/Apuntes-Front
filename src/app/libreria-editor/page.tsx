"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import TextInput from "@/common/TextInput";
import SelectInput from "@/common/SelectInput";

const LiberiaEditor = () => {
  const tituloref = useRef<HTMLInputElement>(null);
  const anio = useRef<HTMLInputElement>(null);
  const profesor = useRef<HTMLInputElement>(null);
  const [selectedUniversidad, setSelectedUniversidad] = useState("");
  const [selectedFacultad, setSelectedFacultad] = useState("");
  const [selectedGrado, setSelectedGrado] = useState("");
  const [selectedCurso, setSelectedCurso] = useState("");
  const isUniversitySelected = selectedUniversidad.length > 1;
  const isFacultadSelected = selectedFacultad.length > 1;
  const isGradoSelected = selectedGrado.length > 1;

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    if (tituloref.current) {
      console.log("Title:", tituloref.current.value);
    }
  };

  const handleUniversidadChange = (option: string) => {
    setSelectedUniversidad(option);
  };
  const handleFacultadChange = (option: string) => {
    setSelectedFacultad(option);
  };
  const handleGradoChange = (option: string) => {
    setSelectedGrado(option);
  };
  const handleCursoChange = (option: string) => {
    setSelectedCurso(option);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex w-[99%] bg-greenphotobg mt-2 m-auto h-[400px]">
        {" "}
        <Image
          src="/svg/vender-apuntes.png"
          alt="photo"
          width={2000}
          height={200}
          className="h-10/12 w-8/12 m-auto "
        ></Image>
      </div>
      <div className=" w-[90%] m-auto ">
        <h1 className="text-4xl	font-semibold mt-4">
          Rellena el formulario y empieza a vender
        </h1>
        <form className="flex flex-col mt-8 h-full gap-4">
          <div className="flex flex-row  ">
            {" "}
            <TextInput
              inputType="text"
              label="Título/Asignatura"
              bgColor="bg-gray-100"
              inputWidth="w-10/12"
              placeholder="Título"
              required
              inputRef={tituloref}
            />
            <TextInput
              inputType="text"
              label="Año asignatura"
              bgColor="bg-gray-100"
              inputWidth="w-10/12"
              placeholder="20XX-20XX"
              required
              inputRef={anio}
            />
          </div>
          <div className="flex flex-row">
            <TextInput
              inputType="text"
              label="Profesor"
              bgColor="bg-gray-100"
              inputWidth="w-7/12"
              placeholder="Nombre profesor"
              required
              inputRef={profesor}
            />
            <SelectInput
              label="Universidad"
              bgColor="bg-gray-100"
              inputWidth="w-10/12"
              required
              onOptionChange={handleUniversidadChange}
              enabled={true}
            />

            <SelectInput
              label="Facultad"
              bgColor="bg-gray-100"
              inputWidth="w-10/12"
              required
              onOptionChange={handleFacultadChange}
              enabled={isUniversitySelected}
            />
          </div>
          <div className="flex flex-row">
            <SelectInput
              label="Grado"
              bgColor="bg-gray-100"
              inputWidth="w-10/12"
              required
              onOptionChange={handleGradoChange}
              enabled={isFacultadSelected}
            />
            <SelectInput
              label="Curso"
              bgColor="bg-gray-100"
              inputWidth="w-10/12"
              required
              onOptionChange={handleCursoChange}
              enabled={isGradoSelected}
            />
            <TextInput
              inputType="number"
              label="Notas"
              bgColor="bg-gray-100"
              inputWidth="w-7/12"
              placeholder="0"
              required
              inputRef={profesor}
            />
          </div>
          <div>
            <TextInput
              inputType="text"
              label="Descripcion Original"
              inputheightclass="h-[80px]"
              bgColor="bg-gray-100"
              inputWidth="w-11/12"
              placeholder="Introduce una breve descripción acerca de la universidad, asignatura, apunte, etc"
              required
              inputRef={profesor}
            />
          </div>
          <button onClick={handleButtonClick}>Log Title</button>
        </form>
      </div>
    </div>
  );
};

export default LiberiaEditor;
