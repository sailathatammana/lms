import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { uploadFile } from "../scripts/cloudStorage";
import FilesList from "./FilesList";

export default function MultipleUploadField({ setFiles, files }) {
  const onDrop = useCallback(
    async (acceptedFiles) => {
      for (let i = 0; i < acceptedFiles.length; i++) {
        const file = acceptedFiles[i];
        const cloudStorage_url = await uploadFile(file, file.name);
        const file_url = { name: file.name, link: cloudStorage_url };
        setFiles((current) => [...current, file_url]);
      }
    },
    [setFiles]
  );
  function onDelete(event, file) {
    event.preventDefault();
    setFiles((curr) => curr.filter((item) => item.name !== file));
  }

  const file = files.map((file, index) => (
    <FilesList key={index} file={file} onDelete={onDelete} />
  ));

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag and drop some files here, or click to select files</p>
      </div>
      <ul>{file}</ul>
    </>
  );
}
