import { ErrorMessage, Field } from "formik";
import "./styles.scss";

export const FormInput = ({ label, name, ...otherProps }) => {
  return (
    <div className="group">
      <Field className="form-input" {...otherProps} name={name} />
      {label ? (
        <label
          className={`${
            otherProps.value?.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
      <label className="error">
        <ErrorMessage name={name} />
      </label>
    </div>
  );
};
