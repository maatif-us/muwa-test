import { FileUploader } from "react-drag-drop-files";

import { toast } from "react-toastify";

// import "./FilesDragAndDrop.css";
import { useState } from "react";

const FilesDragAndDrop = ({ onFileUpload, formats }) => {
  const [fileInfo, setFileInfo] = useState(null);

  const handleDrop = (file) => {
    setFileInfo(file);
    onFileUpload(file);
  };

  return (
    <>
      <FileUploader
        multiple={false}
        handleChange={handleDrop}
        name="file"
        types={formats}
        onTypeError={(err) => toast.error("Invalid file format")}
        maxSize={20}
        onSizeError={(err) => toast.error("Invalid file size")}
      />
      <div className="text-gray-600 text-center mt-6 mb-2">Your file</div>

      <p className="text-center">
        {fileInfo ? fileInfo.name : <span className="text-4xl">&#128193;</span>}
      </p>
    </>
  );
};

export default FilesDragAndDrop;
