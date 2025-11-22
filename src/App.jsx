import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Newmain from "./components/Moviemain";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggle = () => {
    setMode(!mode);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <div className={`min-vh-100 ${mode ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
        <Navbar
          mode={mode}
          toggleMode={handleToggle}
          title={'Movie App'}
          onSearch={handleSearch}
        />

        <Routes>
          <Route
            path="/Home"
            element={<Newmain mode={mode} searchQuery={searchQuery} />}
          />
          <Route path="/Contact" element={<Contact mode={mode} />} />
          <Route path="/About" element={<About mode={mode} />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
