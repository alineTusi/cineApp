import React from "react";
import { useField } from "formik";

const FileInput = ({ label, ...props }) => {
  const [field] = useField(props);
  

  return (
    <div>
      <label  htmlFor={props.id || props.name}>{label}</label>
      <input  type="file" {...field} {...props} />
    </div>
    
  );
};

export default FileInput;