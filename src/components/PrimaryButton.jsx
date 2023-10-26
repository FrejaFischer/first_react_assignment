import "./stylesheets/PrimaryButton.css";
export default function PrimaryButton() {
  return (
    <button className="primary shrink-0 cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-2">
      Send invite
    </button>
  );
}
