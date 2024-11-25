// React Router
import { Route, Routes } from "react-router-dom";
// Pages
import { LandingPage } from "./pages";
// Components
import { Footer, Header } from "./components";
// Theme
import { ThemeProvider } from "./contexts/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="eBook-marketplace-theme">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
