import "./App.css";
import Header from "./components/Header";
import MemberList from "./components/MemberList";

export default function App() {
  return (
    <main className="grid justify-center">
      <Header />
      <MemberList />
    </main>
  );
}
