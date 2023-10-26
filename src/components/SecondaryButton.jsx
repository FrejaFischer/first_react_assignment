import "./stylesheets/SecondaryButton.css";
export default function SecondaryButton() {
  return (
    <button className="secondary flex shrink-0 cursor-pointer items-center gap-2 bg-transparent px-3 py-2 text-sm font-semibold text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="rgb(156 163 175)"
        aria-hidden="true"
        className="secondary_svg w-5"
      >
        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
      </svg>
      Invite
    </button>
  );
}
