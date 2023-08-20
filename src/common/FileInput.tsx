// FileInput.tsx
import React, { FC } from "react";

interface FileInputProps {
  label: string;
  accept?: string;
  onChange: (file: File | null) => void;
}

const FileInput: FC<FileInputProps> = ({ label, accept, onChange }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    onChange(selectedFile);
  };

  return (
    <div>
      <div className="relative inline-block text-xl font-bold">
        <span className="bg-greenbutton  px-6 py-2.5 rounded cursor-pointer text-buttontextgray">
          {label}
        </span>
        <input
          type="file"
          accept={accept}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default FileInput;
