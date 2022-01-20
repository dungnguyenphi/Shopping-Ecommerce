import { CustomButtonContainer } from "./CustomStyles";

export const CustomButton = ({ children, ...otherProps }) => {
  return (
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
};
