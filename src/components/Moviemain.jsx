
import React, { useEffect, useState, useRef } from 'react';
import Movie from './Movie';

function Moviemain({ mode, searchQuery = '' }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const loader = useRef(null);
  const chatContainerRef = useRef(null);

  // Movie fetching code same as before
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`);
        const data = await res.json();
        setMovies((prev) => [...prev, ...data.results]);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.5 }
    );

    if (loader.current) observer.observe(loader.current);

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [loading]);

  // Chatbot functions
  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const userMessage = { text: inputMessage, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Auto bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1000);
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm your movie assistant. How can I help you today?";
    } else if (message.includes('movie') || message.includes('film')) {
      return "I can help you find great movies! Try searching above or browse through our popular collection.";
    } else if (message.includes('popular') || message.includes('trending')) {
      return "Check out our popular movies section for the latest trending films!";
    } else if (message.includes('help')) {
      return "I can help you with movie recommendations, search tips, and general information about our movie app.";
    } else if (message.includes('thank')) {
      return "You're welcome! Enjoy exploring movies! 🎬";
    } else {
      return "I'm here to help with movie-related questions. Try asking about popular movies or how to search!";
    }
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container-fluid mt-4" style={{
      minHeight: '100vh',
      padding: '30px',
      background: mode ? '#ffffff' : '#000000',
      position: 'relative'
    }}>
      {/* Header Section */}
      <div className="text-center mb-5">
        <div className="mb-4">
          <div
            className="badge rounded-pill px-4 py-3 mb-3 fw-bold d-inline-block"
            style={{
              background: '#e50914',
              color: 'white',
              fontSize: '1rem'
            }}
          >
            🎬 POPULAR MOVIES
          </div>
          <h1 style={{
            color: '#e50914',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
            fontSize: '3rem',
            marginBottom: '15px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            LATEST BLOCKBUSTERS
          </h1>
        </div>
        <p style={{
          color: mode ? '#666666' : '#cccccc',
          fontSize: '1.2rem',
          fontFamily: 'Arial, sans-serif',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Discover the most popular and trending movies from around the world
        </p>
      </div>

      {/* Results Count */}
      {searchQuery && (
        <div className="mb-5 text-center">
          <span className="badge p-3 fw-bold" style={{
            background: '#e50914',
            color: 'white',
            fontSize: '1.1rem',
            borderRadius: '8px'
          }}>
            Found {filteredMovies.length} movies for "{searchQuery}"
          </span>
        </div>
      )}

      {/* Movies Grid */}
      <div className="row g-5 justify-content-center">
        {filteredMovies.map((movie, index) => (
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={`${movie.id}-${index}`}>
            <Movie
              mode={mode}
              id={movie.id}
              title={movie.title}
              desc={movie.overview}
              img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              pub={movie.release_date}
              language={movie.original_language}
              popularity={movie.popularity}
              voteAvg={movie.vote_average}
              voteCount={movie.vote_count}
              genres={movie.genre_ids.map(id => genreMap[id]).filter(Boolean)}
            />
          </div>
        ))}
      </div>

      {/* Loading Spinner */}
      {filteredMovies.length > 0 && (
        <div ref={loader} className="d-flex flex-column align-items-center my-5 py-5">
          <div
            className="spinner-border"
            role="status"
            style={{
              width: '4rem',
              height: '4rem',
              color: '#e50914',
              borderWidth: '4px'
            }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <small className="mt-4 fw-bold" style={{
            color: mode ? '#666666' : '#cccccc',
            fontSize: '1.1rem'
          }}>
            Loading more amazing movies...
          </small>
        </div>
      )}

      {/* No Results Message */}
      {filteredMovies.length === 0 && !loading && (
        <div className="text-center my-5 py-5">
          <div style={{
            fontSize: '5rem',
            marginBottom: '30px',
            color: '#e50914'
          }}>
            🎭
          </div>
          <h3 style={{
            color: mode ? '#666666' : '#cccccc',
            marginBottom: '15px',
            fontSize: '2rem'
          }}>
            {searchQuery ? 'No Movies Found' : 'Loading Movies...'}
          </h3>
          <p style={{
            color: mode ? '#666666' : '#cccccc',
            fontSize: '1.1rem'
          }}>
            {searchQuery ? `No results found for "${searchQuery}"` : 'Please wait while we load the movies...'}
          </p>
        </div>
      )}

      {/* Chatbot */}
      <div className="position-fixed" style={{ bottom: '20px', right: '20px', zIndex: 1050 }}>
        {/* Chat Button */}
        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            className="btn rounded-circle shadow-lg border-0"
            style={{
              width: '60px',
              height: '60px',
              background: '#e50914',
              color: 'white',
              fontSize: '1.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.background = '#ff0000'}
            onMouseLeave={(e) => e.target.style.background = '#e50914'}
          >
            💬
          </button>
        )}

        {/* Chat Window */}
        {chatOpen && (
          <div 
            ref={chatContainerRef}
            className="card shadow-lg border-0"
            style={{
              width: '350px',
              height: '500px',
              background: mode ? '#ffffff' : '#1a1a1a',
              border: '2px solid #e50914'
            }}
          >
            {/* Chat Header */}
            <div 
              className="card-header d-flex justify-content-between align-items-center border-0"
              style={{ background: '#e50914', color: 'white' }}
            >
              <div className="d-flex align-items-center">
                <span className="me-2">🤖</span>
                <strong>Movie Assistant</strong>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="btn btn-sm border-0"
                style={{ color: 'white', fontSize: '1.2rem' }}
              >
                ✕
              </button>
            </div>

            {/* Chat Messages */}
            <div 
              className="card-body p-3 d-flex flex-column"
              style={{ 
                height: '400px', 
                overflowY: 'auto',
                background: mode ? '#f8f9fa' : '#2d3436'
              }}
            >
              {messages.length === 0 ? (
                <div className="text-center text-muted mt-5">
                  <div style={{ fontSize: '3rem' }}>🎬</div>
                  <p className="mt-2">Hello! I'm your movie assistant. Ask me anything about movies!</p>
                </div>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`d-flex mb-3 ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
                  >
                    <div
                      className={`p-3 rounded-4 ${message.sender === 'user' 
                        ? 'text-white' 
                        : mode ? 'bg-light text-dark' : 'bg-dark text-light'
                      }`}
                      style={{
                        maxWidth: '80%',
                        background: message.sender === 'user' ? '#e50914' : 'transparent',
                        border: message.sender === 'user' ? 'none' : `1px solid ${mode ? '#dee2e6' : '#495057'}`
                      }}
                    >
                      {message.text}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Chat Input */}
            <div className="card-footer border-0 p-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  style={{
                    background: mode ? '#ffffff' : '#2d3436',
                    color: mode ? '#000000' : '#ffffff',
                    border: `1px solid ${mode ? '#dee2e6' : '#495057'}`
                  }}
                />
                <button
                  onClick={handleSendMessage}
                  className="btn border-0"
                  style={{ background: '#e50914', color: 'white' }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Moviemain;

const genreMap = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Sci-Fi',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western'
};