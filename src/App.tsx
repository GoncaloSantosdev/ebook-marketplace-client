// React Router
import { Route, Routes } from "react-router-dom";
// Pages
import { LandingPage } from "./pages";
// Components
import { Footer, Header } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
