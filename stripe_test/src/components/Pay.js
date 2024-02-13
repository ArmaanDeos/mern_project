import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const stripe_public_key =
  "pk_test_51LRvwLSBdzvfRclOEOkhRneY246DQ3jCQA4B92uBr2RzoFwAgk9iR14fbEHtkCTeKYXbHCjVnlg6RrvHIFGAV9D900yiZwQ1ol";
const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
    console.log(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        // Check if stripeToken is not null
        if (stripeToken) {
          const res = await axios.post(
            "http://localhost:1800/api/v1/checkout/payment",
            {
              tokenId: stripeToken.id,
              amount: 2000,
            }
          );
          console.log(res);
        }
      } catch (error) {
        console.error("Axios error:", error.message); // Log error message
        console.log("Response data:", error.response.data); // Log response data if available
        console.log("Status code:", error.response.status); // Log status code if available
      }
    };
    makeRequest();
  }, [stripeToken]);

  return (
    <>
      <div className="container">
        <StripeCheckout
          name="rymo shop"
          image="https://i1.sndcdn.com/avatars-nZZPQ8uyk7gpuAdK-PhkmuQ-t500x500.jpg"
          billingAddress
          shippingAddress
          description="Your total is $20"
          amount={2000}
          token={onToken}
          stripeKey={stripe_public_key}
        >
          <button className="btn_pay">Pay</button>
        </StripeCheckout>
      </div>
    </>
  );
};

export default Pay;
