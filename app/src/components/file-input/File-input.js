import React from "react";
import { useField } from "formik";

const FileInput = ({ label, ...props }) => {
  const [field, meta,] = useField(props);
  

  return (
    <div>
      <label  htmlFor={props.id || props.name}>{label}</label>
      <input  type="file" {...field} {...props} />
      {/* {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null} */}
    </div>
    
  );
};

export default FileInput;