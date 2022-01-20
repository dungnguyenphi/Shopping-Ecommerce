import { ErrorMessage } from "formik";
import {
  ErrorContainer,
  FormField,
  GroupContainer,
  InputLabel,
} from "./FormInputStyles";

export const FormInput = ({ label, name, value, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormField {...otherProps} name={name} />
      {label ? (
        <InputLabel className="form-input-label" value={value}>
          {label}
        </InputLabel>
      ) : null}
      <ErrorContainer>
        <ErrorMessage name={name} />
      </ErrorContainer>
    </GroupContainer>
  );
};
