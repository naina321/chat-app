import "./App.css";
// import { Button, ButtonGroup } from "@chakra-ui/react";
import { homepage } from "./pages/homepage";
import { chatpage } from "./pages/chatpage";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Route path="/" component={homepage} exact />
      <Route path="/chat" component={chatpage} />
      hello
    </div>
  );
}

export default App;
