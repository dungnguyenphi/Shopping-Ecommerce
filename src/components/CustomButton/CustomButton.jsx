import "./styles.scss";
export const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
        inverted ? "inverted" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
