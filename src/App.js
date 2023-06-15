import "./assets/css/App.css";
import "./assets/css/bootstrap.min.css";
import ChatInput from "./components/ChatInput";
import ChatItem from "./components/ChatItem";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <section className="chatbox">
        <ChatItem />
        <ChatInput />
      </section>
    </div>
  );
}

export default App;
