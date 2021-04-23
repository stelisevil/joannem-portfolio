import { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const App = () => {
  const [content, setContent] = useState("home");

  return (
    <>
      <Header setContent={setContent} />
      <MainContent content={content} />
      <Footer />
    </>
  );
};

export default App;
