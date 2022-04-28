import { useState } from "react";
import "./App.css";
import { Loading, Home, About } from "./pages/";
import { NavigationUp, SocialBlock, EmailBlock } from "./components";
function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 6000);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="container-body">
        <NavigationUp />
        <EmailBlock />
        <SocialBlock />
        <div className="container-info-body">
          <Home />
          <About />
        </div>
      </div>
    );
  }
}

export default App;
