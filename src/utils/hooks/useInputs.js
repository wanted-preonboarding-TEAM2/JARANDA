const { useState } = require('react');

const useInputs = initialState => {
  const [values, setValues] = useState(initialState);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return { values, handleChange, setValues };
};

export default useInputs;
