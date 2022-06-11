import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51L9QNqAY3N0b0EuU8balivyEkB6NcFmBkPIIQYFed6Qy8JxnGPMagByKo8FcyjGCCCrFNHK4XYWarN2RQyaQysM400thiY8n4q"
    );
  }

  return stripePromise;
};

export default getStripe;
