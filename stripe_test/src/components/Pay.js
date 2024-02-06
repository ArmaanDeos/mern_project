import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
// import axios from "axios";

const stripe_public_key =
  "pk_test_51LRvwLSBdzvfRclOEOkhRneY246DQ3jCQA4B92uBr2RzoFwAgk9iR14fbEHtkCTeKYXbHCjVnlg6RrvHIFGAV9D900yiZwQ1ol";
const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await fetch(
          "http://localhost:1800/api/v1/checkout/payment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              tokenId: stripeToken.id,
              amount: 2000,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    // Check if stripeToken is truthy before making the request
    if (stripeToken) {
      makeRequest();
    }

    // const makeRequest = async () => {
    //   try {
    //     const res = await axios.post(
    //       "http://localhost:1800/api/v1/checkout/payment",
    //       {
    //         tokenId: stripeToken.id,
    //         amount: 2000,
    //       }
    //     );
    //     console.log(res.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // // Check if stripeToken is truthy before making the request
    // if (stripeToken) {
    //   makeRequest();
    // }
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
