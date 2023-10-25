import PrimaryButton from "./PrimaryButton";
import "./stylesheets/SignupForm.css";
export default function SignupForm() {
  return (
    <form>
      <label htmlFor="email" aria-hidden="true" className="hidden-label">
        Email address
      </label>
      <input type="email" placeholder="Enter an email" name="email" id="email" />
      <PrimaryButton />
    </form>
  );
}
