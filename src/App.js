import Header from "./Header";
import Intro from "./Intro";
import RecentWork from "./RecentWork";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="w-full flex flex-col p-2">
      <Header />
      <Intro />
      <RecentWork />
      <Footer />
    </div>
  );
};

export default App;
