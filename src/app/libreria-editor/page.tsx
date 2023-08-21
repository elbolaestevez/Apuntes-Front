"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import TextInput from "@/common/TextInput";
import SelectInput from "@/common/SelectInput";
import Button from "@/common/Button";
import FileInput from "@/common/FileInput";
import Spinner from "@/common/Spinner";

const LiberiaEditor = () => {
  const title = useRef<HTMLInputElement>(null);
  const year = useRef<HTMLInputElement>(null);
  const professour = useRef<HTMLInputElement>(null);
  const descripction = useRef<HTMLInputElement>(null);
  const number = useRef<HTMLInputElement>(null);

  const [selectedUniversidad, setSelectedUniversidad] = useState<{
    id: number;
    opcion: string;
  }>({ id: 0, opcion: "" });

  const [selectedFacultad, setSelectedFacultad] = useState<{
    id: number;
    opcion: string;
  }>({ id: 0, opcion: "" });

  const [selectedGrado, setSelectedGrado] = useState<{
    id: number;
    opcion: string;
  }>({ id: 0, opcion: "" });

  const [selectedCurso, setSelectedCurso] = useState<{
    id: number;
    opcion: string;
  }>({ id: 0, opcion: "" });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const isUniversitySelected = selectedUniversidad.opcion.length > 1;
  const isFacultadSelected =
    selectedFacultad.opcion.length > 1 && selectedUniversidad.opcion.length > 1;
  const isGradoSelected =
    selectedGrado.opcion.length > 1 && selectedFacultad.opcion.length > 1;

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    const titleValue = title.current?.value;
    const yearValue = year.current?.value;
    const professourValue = professour.current?.value;
    const numberValue = number.current?.value;
    const descriptionValue = descripction.current?.value;

    // Validar los valores
    if (
      titleValue &&
      yearValue &&
      professourValue &&
      selectedUniversidad &&
      selectedFacultad &&
      selectedGrado &&
      selectedCurso &&
      numberValue &&
      descriptionValue &&
      selectedFile
    ) {
      console.log("titulo", titleValue);
      console.log("año", yearValue);
      console.log("Profesor", professourValue);
      console.log("UniversidadSeleccionada", selectedUniversidad);
      console.log("FacultadSeleccionada", selectedFacultad);
      console.log("GradoSeleeccionado", selectedGrado);
      console.log("CursoSeleccionado", selectedCurso);
      console.log("number", numberValue);
      console.log("descripcion", descriptionValue);
      console.log("Archivo Subido:", selectedFile.name);
      console.log("Tipo de Archivo:", selectedFile.type);
      console.log("Tamaño:", selectedFile.size, "bytes");
    } else {
      console.log("Faltan campos por completar.");
    }
  };

  const handleUniversidadChange = (option: string, id: number) => {
    setSelectedUniversidad({ id, opcion: option });
  };
  const handleFacultadChange = (option: string, id: number) => {
    setSelectedFacultad({ id, opcion: option });
  };
  const handleGradoChange = (option: string, id: number) => {
    setSelectedGrado({ id, opcion: option });
  };
  const handleCursoChange = (option: string, id: number) => {
    setSelectedCurso({ id, opcion: option });
  };
  const handleFileChange = (file: File | null) => {
    setLoading(true);
    setSelectedFile(file);
    setLoading(false);
  };
  if (loading) {
    return (
      // Contenido a mostrar mientras loading es true
      <div className="fixed top-0 left-0 w-full h-full  flex flex-col items-center justify-center bg-black bg-opacity-50">
        <div className="flex flex-col gap-4 items-center justify-center w-2/6 h-[280px] bg-white rounded-xl ">
          <Spinner />
          <p className="text-3xl">Subiendo Archivo...</p>
        </div>
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
          <div className="flex flex-row w-full">
            {" "}
            <div className="w-1/2 pr-2 ">
              <TextInput
                inputType="text"
                label="Título/Asignatura"
                bgColor="bg-gray-100"
                inputWidth="w-full"
                placeholder="Título"
                required={true}
                inputRef={title}
              />
            </div>
            <div className="w-1/4">
              <TextInput
                inputType="text"
                label="Año asignatura"
                bgColor="bg-gray-100"
                inputWidth="w-full"
                placeholder="20XX-20XX"
                required={true}
                inputRef={year}
              />
            </div>
          </div>
          <div className="flex flex-row w-full justify-between gap-2">
            <div className="w-1/2">
              <TextInput
                inputType="text"
                label="Profesor"
                bgColor="bg-gray-100"
                inputWidth="w-full"
                placeholder="Nombre profesor"
                required={true}
                inputRef={professour}
              />
            </div>
            <div className="w-1/4">
              <SelectInput
                label="Universidad"
                bgColor="bg-gray-100"
                inputWidth="w-full"
                onOptionChange={handleUniversidadChange}
                enabled={true}
              />
            </div>
            <div className="w-1/4">
              <SelectInput
                label="Facultad"
                bgColor="bg-gray-100"
                inputWidth="w-full"
                onOptionChange={handleFacultadChange}
                enabled={isUniversitySelected}
                id={selectedUniversidad.id}
              />
            </div>
          </div>
          <div className="flex flex-row w-full justify-between gap-8">
            <SelectInput
              label="Grado"
              bgColor="bg-gray-100"
              inputWidth="w-full"
              required
              onOptionChange={handleGradoChange}
              enabled={isFacultadSelected}
              id={selectedFacultad.id}
            />
            <SelectInput
              label="Curso"
              bgColor="bg-gray-100"
              inputWidth="w-full"
              required
              onOptionChange={handleCursoChange}
              enabled={isGradoSelected}
              id={selectedGrado.id}
            />
            <TextInput
              inputType="number"
              label="Notas"
              bgColor="bg-gray-100"
              inputWidth="w-full"
              placeholder="0"
              required={true}
              inputRef={number}
            />
          </div>
          <div className="w-full">
            <TextInput
              inputType="text"
              label="Descripcion Original"
              inputheightclass="h-[80px]"
              bgColor="bg-gray-100"
              inputWidth="w-12/12"
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
