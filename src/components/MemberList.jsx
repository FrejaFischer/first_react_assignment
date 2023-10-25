import "./stylesheets/MemberList.css";
import MemberCard from "./MemberCard";
export default function MemberList() {
  return (
    <section className="memberlist_container">
      <h3>Team members previously added to projects</h3>
      <ul>
        <MemberCard
          name="Lindsay Walton"
          title="Front-end Developer"
          img_src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          img_alt="Lindsay Walton image"
        />
        <MemberCard
          name="Courtney Henry"
          title="Designer"
          img_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          img_alt="Courtney Henry image"
        />
        <MemberCard
          name="Tom Cook"
          title="Director of Product"
          img_src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          img_alt="Tom Cook image"
        />
      </ul>
    </section>
  );
}
