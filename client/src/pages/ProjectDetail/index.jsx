import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProjectDetails from "./ProjectDetails";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
function ProjectDetail() {
  return (
    <Elements stripe={stripePromise}>
      <ProjectDetails />
    </Elements>
  );
}

export default ProjectDetail;
