import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import types from "types";
import validateInputs from "./validateInputs";

export default function(initialState, props, submitFunction) {
  const { isSubmitting, formValidationErrors } = useSelector(
    state => state.auth
  );
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    // check if the user should be successfully authenticated or show errors
    // console.log(
    //   `>>>>> formValidationErrors 1: ${JSON.stringify(formValidationErrors)}`
    // );

    if (isSubmitting) {
      const errorList = Object.keys(formValidationErrors);
      let err = false;
      for (let i = 0; i < errorList.length; i++) {
        // console.log(
        //   `>>>>> errors[errorList[i]] ${JSON.stringify(
        //     formValidationErrors[errorList[i]]
        //   )}`
        // );
        if (formValidationErrors[errorList[i]]) {
          // console.log(
          //   `>>>>> Invalid ${errorList[i]}: ${
          //     formValidationErrors[errorList[i]]
          //   }`
          // );
          err = true;
          break;
        }
      }
      if (!err) {
        dispatch(submitFunction(values, props));
      }
      // reset `isSubmitting` bool after checking for form errors
      dispatch({
        type: types.IS_SUBMITTING,
        payload: false
      });
    }
  }, [formValidationErrors]);

  function handleChange(event) {
    setValues({
      ...values,
      // set the value based on the form input's name
      [event.target.name]: event.target.value
    });
  }

  function handleBlur(event) {
    dispatch({
      type: types.FORM_VALIDATION_ERRORS,
      payload: validateInputs({ [event.target.name]: event.target.value })
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({
      type: types.FORM_VALIDATION_ERRORS,
      payload: validateInputs(values)
    });
    dispatch({
      type: types.IS_SUBMITTING,
      payload: true
    });
  }

  return {
    handleChange,
    handleBlur,
    handleSubmit,
    values
  };
}
