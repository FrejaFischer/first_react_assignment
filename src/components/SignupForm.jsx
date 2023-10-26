import PrimaryButton from "./PrimaryButton";
import "./stylesheets/SignupForm.css";
export default function SignupForm() {
  return (
    <form className="justify-content my-6 flex w-full gap-8">
      <label htmlFor="email" className="hidden-label sr-only">
        Email address
      </label>
      <input
        type="email"
        placeholder="Enter an email"
        name="email"
        id="email"
        className="border-grey-300 w-full rounded-md border border-solid px-2 py-1"
      />
      <PrimaryButton />
    </form>
  );
}
