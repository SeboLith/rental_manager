import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import validateInputs from "./validateInputs";

export default function(initialState, submitFunction) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // check if the user should be successfully authenticated or show errors
    if (isSubmitting) {
        // if there are no errors
        if (!Object.keys(errors).length) {
            setTimeout(() => {
                // reset `isSubmitting` bool after async action
                dispatch(submitFunction(values));
                setSubmitting(false);
            }, 3000);
        } else {
            Object.keys(errors).forEach(error => {
                console.log(`>>>>> Invalid ${error}:::`, errors[error]);
            });
            setSubmitting(false);
        }
        
    }
  }, [errors]);

  function handleChange(event) {
    setValues({
      ...values,
      // set the value based on the form input's name
      [event.target.name]: event.target.value
    });
  }

  function handleBlur() {
    setErrors(validateInputs(values));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrors(validateInputs(values));
    setSubmitting(true);
  }

  return { handleChange, handleBlur, handleSubmit, values, errors, isSubmitting };
}
