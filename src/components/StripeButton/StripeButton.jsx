import StripeCheckout from "react-stripe-checkout";
import Logo from "../../assets/crown.svg";

export const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KJTARJ97MJDfvmEfglZg5PnTqjFtbnXxKL5Wh6UqBtSXyvup4dFhGlNPkBJsXGEBozMcF8ocHrZLaLkFjYMihh2008wdiZFOV";
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Fashion LLC."
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={(token) => {
        console.log(token);
        alert("Payment Successful");
      }}
      stripeKey={publishableKey}
    />
  );
};
