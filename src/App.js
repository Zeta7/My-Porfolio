import { useState } from "react";
import "./App.css";
import { Loading, Home } from "./pages/";
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
        </div>
      </div>
    );
  }
}

export default App;
