function change(e) {
    const name = e.target.name;
    const value = e.target.value;
    return {
      name,
      value,
      type: "CHANGE"
    };
  }
  
  function defaultValue({ name, defaultValue }) {
    return {
      name,
      defaultValue,
      type: "DEFAULT_VALUE"
    };
  }
  
  export { change, defaultValue };
  