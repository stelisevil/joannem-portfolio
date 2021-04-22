import Header from "./Header";
import Intro from "./Intro";
import RecentWork from "./RecentWork";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col p-2">
        <Intro />
        <RecentWork />
      </div>
      <Footer />
    </>
  );
};

export default App;
