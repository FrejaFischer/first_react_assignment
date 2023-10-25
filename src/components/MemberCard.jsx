import "./stylesheets/MemberCard.css";
import Avatar from "./Avatar";
import SecondaryButton from "./SecondaryButton";
export default function MemberCard(props) {
  return (
    <li className="member_container">
      <Avatar src={props.img_src} alt={props.img_alt} />
      <div className="desc">
        <p>{props.name}</p>
        <p>{props.title}</p>
      </div>
      <SecondaryButton />
    </li>
  );
}

// https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80