
function Movie({ title, desc, img, pub, language, popularity, voteAvg, voteCount, genres, mode }) {
  const handleWatchMovie = () => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(title + ' full movie watch online')}`;
    window.open(searchUrl, '_blank');
  };

  const handleTrailer = () => {
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(title + ' official trailer')}`;
    window.open(searchUrl, '_blank');
  };

  return (
    <div
      className="card h-100 border-0"
      style={{ 
        background: mode ? '#ffffff' : '#000000',
        borderRadius: '15px',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
        border: '3px solid #e50914',
        minHeight: '650px',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(229, 9, 20, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 5px 15px rgba(229, 9, 20, 0.2)';
      }}
    >
      {/* Movie Poster */}
      <div className="position-relative overflow-hidden">
        <img 
          src={img} 
          className="card-img-top" 
          alt={title} 
          style={{ 
            height: '380px', 
            objectFit: 'cover',
            width: '100%',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
        {/* Rating Badge */}
        <div 
          className="position-absolute top-0 end-0 m-3 rounded-pill px-3 py-2 fw-bold"
          style={{
            background: '#e50914',
            color: 'white',
            fontSize: '0.9rem',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
          }}
        >
          {voteAvg}/10
        </div>
      </div>
      
      <div className="card-body d-flex flex-column p-4">
        {/* Movie Title */}
        <h5 className="card-title fw-bold mb-3" style={{ 
          color: '#e50914',
          fontSize: '1.3rem',
          lineHeight: '1.3',
          minHeight: '65px',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {title}
        </h5>
        
        {/* Movie Description */}
        <p className="card-text flex-grow-1 mb-4" style={{ 
          fontSize: '0.95rem',
          color: mode ? '#666666' : '#cccccc',
          lineHeight: '1.5',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {desc?.length > 120 ? `${desc.slice(0, 120)}...` : desc || 'No description available.'}
        </p>

        {/* Movie Details Grid */}
        <div className="row mb-4">
          <div className="col-6 mb-3">
            <div className="text-center p-2 rounded" style={{ 
              background: mode ? '#f8f9fa' : '#1a1a1a',
              border: '1px solid #e50914'
            }}>
              <div style={{ color: mode ? '#999999' : '#888888', fontSize: '0.75rem', fontWeight: '600' }}>RELEASE</div>
              <div style={{ color: mode ? '#000000' : '#ffffff', fontWeight: '700', fontSize: '0.85rem' }}>{pub}</div>
            </div>
          </div>
          <div className="col-6 mb-3">
            <div className="text-center p-2 rounded" style={{ 
              background: mode ? '#f8f9fa' : '#1a1a1a',
              border: '1px solid #e50914'
            }}>
              <div style={{ color: mode ? '#999999' : '#888888', fontSize: '0.75rem', fontWeight: '600' }}>LANGUAGE</div>
              <div style={{ color: mode ? '#000000' : '#ffffff', fontWeight: '700', fontSize: '0.85rem' }}>{language.toUpperCase()}</div>
            </div>
          </div>
          <div className="col-6">
            <div className="text-center p-2 rounded" style={{ 
              background: mode ? '#f8f9fa' : '#1a1a1a',
              border: '1px solid #e50914'
            }}>
              <div style={{ color: mode ? '#999999' : '#888888', fontSize: '0.75rem', fontWeight: '600' }}>POPULARITY</div>
              <div style={{ color: mode ? '#000000' : '#ffffff', fontWeight: '700', fontSize: '0.85rem' }}>{Math.round(popularity)}</div>
            </div>
          </div>
          <div className="col-6">
            <div className="text-center p-2 rounded" style={{ 
              background: mode ? '#f8f9fa' : '#1a1a1a',
              border: '1px solid #e50914'
            }}>
              <div style={{ color: mode ? '#999999' : '#888888', fontSize: '0.75rem', fontWeight: '600' }}>VOTES</div>
              <div style={{ color: mode ? '#000000' : '#ffffff', fontWeight: '700', fontSize: '0.85rem' }}>{voteCount}</div>
            </div>
          </div>
        </div>

        {/* Genres */}
        <div className="mb-4">
          <div style={{ color: mode ? '#999999' : '#888888', fontSize: '0.8rem', fontWeight: '700', marginBottom: '8px' }}>GENRES</div>
          <div className="d-flex flex-wrap gap-2">
            {genres.slice(0, 3).map((genre, index) => (
              <span 
                key={index}
                className="badge rounded-pill px-3 py-2"
                style={{ 
                  background: '#e50914',
                  color: 'white',
                  fontSize: '0.7rem',
                  fontWeight: '600'
                }}
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="d-grid gap-3 mt-auto">
          <button
            onClick={handleWatchMovie}
            className="btn fw-bold py-3 border-0"
            style={{
              background: '#e50914',
              color: 'white',
              borderRadius: '8px',
              fontSize: '0.95rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 8px rgba(229, 9, 20, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#ff0000';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 12px rgba(229, 9, 20, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#e50914';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 8px rgba(229, 9, 20, 0.3)';
            }}
          >
            WATCH FULL MOVIE
          </button>
          
          <button
            onClick={handleTrailer}
            className="btn fw-bold py-3 border-2"
            style={{
              background: 'transparent',
              borderColor: '#e50914',
              color: '#e50914',
              borderRadius: '8px',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#e50914';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#e50914';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            WATCH TRAILER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movie;