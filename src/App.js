import { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const App = () => {
  const [content, setContent] = useState("home");

  return (
    <div style={{ maxWidth: "1600px", margin: "auto", color: "rgb(43,43,43)" }}>
      <Header setContent={setContent} />
      <MainContent content={content} setContent={setContent} />
      <Footer />
    </div>
  );
};

export default App;
