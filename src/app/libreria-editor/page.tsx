"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import TextInput from "@/common/TextInput";
import SelectInput from "@/common/SelectInput";
import Button from "@/common/Button";
import FileInput from "@/common/FileInput";

const LiberiaEditor = () => {
  const title = useRef<HTMLInputElement>(null);
  const year = useRef<HTMLInputElement>(null);
  const professour = useRef<HTMLInputElement>(null);
  const descripction = useRef<HTMLInputElement>(null);
  const number = useRef<HTMLInputElement>(null);

  const [selectedUniversidad, setSelectedUniversidad] = useState("");
  const [selectedFacultad, setSelectedFacultad] = useState("");
  const [selectedGrado, setSelectedGrado] = useState("");
  const [selectedCurso, setSelectedCurso] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const isUniversitySelected = selectedUniversidad.length > 1;
  const isFacultadSelected = selectedFacultad.length > 1;
  const isGradoSelected =
    selectedGrado.length > 1 && selectedFacultad.length > 1;

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    console.log("titulo", title.current?.value);
    console.log("año", year.current?.value);
    console.log("Profesor", professour.current?.value);
    console.log("UniversidadSeleccionada", selectedUniversidad);
    console.log("FacultadSeleccionada", selectedFacultad);
    console.log("GradoSeleeccionado", selectedGrado);
    console.log("CursoSeleccionado", selectedCurso);
    console.log("number", number.current?.value);
    console.log("descripcion", descripction.current?.value);
    if (selectedFile) {
      console.log("Archivo Subido:", selectedFile.name);
      console.log("Tipo de Archivo:", selectedFile.type);
      console.log("Tamaño:", selectedFile.size, "bytes");
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
  const handleFileChange = (file: File | null) => {
    setLoading(true);
    setSelectedFile(file);
    setLoading(false);
  };
  if (loading) {
    return (
      // Contenido a mostrar mientras loading es true
      <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
        <p className="text-5xl">...Loading</p>
      </div>
    );
  }

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
              required={true}
              inputRef={title}
            />
            <TextInput
              inputType="text"
              label="Año asignatura"
              bgColor="bg-gray-100"
              inputWidth="w-10/12"
              placeholder="20XX-20XX"
              required={true}
              inputRef={year}
            />
          </div>
          <div className="flex flex-row">
            <TextInput
              inputType="text"
              label="Profesor"
              bgColor="bg-gray-100"
              inputWidth="w-7/12"
              placeholder="Nombre profesor"
              required={true}
              inputRef={professour}
            />
            <SelectInput
              label="Universidad"
              bgColor="bg-gray-100"
              inputWidth="w-10/12"
              onOptionChange={handleUniversidadChange}
              enabled={true}
            />

            <SelectInput
              label="Facultad"
              bgColor="bg-gray-100"
              inputWidth="w-10/12"
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
              required={true}
              inputRef={number}
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
              required={true}
              inputRef={descripction}
            />
          </div>
          <div className="flex flex-row gap-2 w-full justify-center gap-8">
            <FileInput
              label="Subir apunte"
              accept=".pdf,.jpg,.png"
              onChange={handleFileChange}
            />
            <FileInput
              label="Subir justificante notas"
              accept=".pdf,.jpg,.png"
              onChange={handleFileChange}
            />
          </div>
          <div className=" w-full">
            <Button
              loading={loading}
              disabled={loading}
              onClick={handleButtonClick}
              className="w-[15%] font-bold mt-5 bg-yellow-300 h-[50px] m-auto"
            >
              Enviar Solicitud
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LiberiaEditor;
