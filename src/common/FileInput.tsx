// FileInput.tsx

import React, { FC, useState } from "react";

interface FileInputProps {
  label: string;
  accept?: string;
  onChange: (file: File | null) => void;
}

const FileInput: FC<FileInputProps> = ({ label, accept, onChange }) => {
  const [fileError, setFileError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isFileUploaded, setIsFileUploaded] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      // Validar el tamaño del archivo
      if (selectedFile.size > 250 * 1024 * 1024) {
        // 250 MB en bytes
        setFileError("El archivo excede el tamaño máximo permitido (250 MB).");
        e.target.value = "";
        onChange(null);
        setLoading(false);
        return;
      }

      setFileError(null);
      setLoading(false);
      setIsFileUploaded(true);
      onChange(selectedFile);
    } else {
      setFileError(null);
      setLoading(false);
      setIsFileUploaded(true);
      e.target.value = "";
      onChange(null);
    }
  };

  return (
    <div>
      <div className="flex flex-col relative inline-block text-xl font-bold">
        <span className="bg-greenbutton  px-6 py-2.5 rounded cursor-pointer text-buttontextgray">
          {loading ? "Cargando..." : label}
        </span>
        <input
          type="file"
          accept={accept}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
        {loading ? null : fileError ? (
          <p className="text-red-500 text-sm mt-1">{fileError}</p>
        ) : (
          isFileUploaded && <p className="text-green-500 text-sm mt-1">Listo</p>
        )}
      </div>
    </div>
  );
};

export default FileInput;
