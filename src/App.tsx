// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/search" element={<h1>Search Results</h1>} />
        <Route path="/book/:id" element={<h1>Book Details</h1>} />
        <Route path="/auth" element={<h1>Auth</h1>} />
        {/* PRIVATE ROUTES */}
        <Route path="/profile" element={<h1>User Profile</h1>} />
        <Route path="/create-new-book" element={<h1>Create New Book</h1>} />
        <Route path="/read/:id" element={<h1>Reading Book</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
