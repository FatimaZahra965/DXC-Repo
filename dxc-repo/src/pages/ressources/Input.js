import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Input({name, label, required, select, value, type, handler, SelectProps}) {

  function handleChange(e) {
    value[name] = e.target.value;
    handler({...value});
  }
  return (
    <TextField
      size="small"
      variant="outlined"
      fullWidth
      type={type}
      name={name}
      label={label}
      value={value !== undefined && value[name]}
      onChange={handleChange}
      required={required}
      select={select}
    />
  );
}