import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const stripe_public_key =
  "pk_test_51LRvwLSBdzvfRclOEOkhRneY246DQ3jCQA4B92uBr2RzoFwAgk9iR14fbEHtkCTeKYXbHCjVnlg6RrvHIFGAV9D900yiZwQ1ol";
const Pay = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onToken = async (token) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:1800/api/v1/checkout/payment",
        {
          tokenId: token.id,
          amount: 2000,
        }
      );
      console.log("Response data:", res);
      navigate("/success");
    } catch (error) {
      // console.error("Axios error:", error.message);
      // console.log("Response data:", error.response.data);
      // console.log("Status code:", error.response.status);\
      console.log(error);
      // Handle error gracefully
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup function if needed
    };
  }, []);

  return (
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
        disabled={loading} // Disable the button while loading
      >
        <button className="btn_pay" disabled={loading}>
          {loading ? "Processing..." : "Pay"}
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
