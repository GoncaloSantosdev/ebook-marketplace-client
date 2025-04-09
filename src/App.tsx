// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Search,
  BookDetails,
  Auth,
  UserProfile,
  CreateNewBook,
  ReadingBook,
} from "./pages";
// Components
import { Header, Footer } from "./components";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <main className="flex-1">
          <Routes>
            {/* PUBLIC ROUTES */}
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/auth" element={<Auth />} />
            {/* PRIVATE ROUTES */}
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/create-new-book" element={<CreateNewBook />} />
            <Route path="/read/:id" element={<ReadingBook />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
