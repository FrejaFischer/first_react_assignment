import "./stylesheets/Avatar.css";
export default function Avatar(props) {
  return (
    <img src={props.src} alt={props.alt} className="h-10 w-10 rounded-full" />
  );
}
