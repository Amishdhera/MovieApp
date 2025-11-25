import React from 'react';
import { Link } from 'react-router-dom';

function About({ mode }) {
  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Flutter', level: 80 },
    { name: 'Firebase', level: 75 },
    { name: 'UI/UX Design', level: 40 },
    { name: 'BootStrap', level: 90 },
    { name: 'ASP.NET', level: 60 },
    { name: 'ANGULAR', level: 40 },
    { name: 'SSMS', level: 50 },
  ];

  const projects = [
    {
      name: 'Rozana Ka Hisab',
      description: 'A daily expense tracker with visual analytics and a clean UI, built using HTML, CSS, Bootstrap, and JavaScript to help users manage personal finances efficiently.',
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      link: 'https://amishdhera.github.io/Rozana-Ka-Hisab/loader'
    },

    {
      name: 'Delicious Bites',
      description: 'A modern one-page restaurant landing website built using HTML, CSS, and Bootstrap. Features include hero banner, menu cards, testimonials, and contact section.',
      tech: ['HTML', 'CSS', 'Bootstrap', 'UI/UX'],
      link: 'https://amishdhera.github.io/Delicious-Bites/'
    },

    {
      name: 'Portfolio App',
      description: 'Personal portfolio app built with Flutter showcasing projects and skills',
      tech: ['Flutter', 'Dart', 'Firebase'],
      link: 'https://amishdhera.github.io/Appportfolio/'
    },
    {
      name: 'Cities Guide App',
      description: 'Comprehensive city guide application with location-based services',
      tech: ['Flutter', 'Firebase', 'Maps API'],
      link: 'https://amishdhera.github.io/app/'
    },

    {
      name: 'Tappy Number',
      description: 'Interactive number tapping game with score tracking and multiple difficulty levels',
      tech: ['Flutter', 'Game Development', 'State Management'],
      link: 'https://amishdhera.github.io/Tappy_Number/'
    },
    {
      name: 'Greeting/Celebration App',
      description: 'Beautiful celebration and greeting card application with custom messages and animations',
      tech: ['Flutter', 'Firebase', 'Animations'],
      link: 'https://amishdhera.github.io/wish_app/'
    },
    {
      name: 'Currency Converter',
      description: 'Real-time currency conversion app with live exchange rates and multiple currency support',
      tech: ['Flutter', 'API Integration', 'Real-time Data'],
      link: 'https://amishdhera.github.io/currency_converter/'
    },
    {
      name: 'Pet Care TechWiz',
      description: 'Team project - Comprehensive pet care platform with veterinary services and pet management',
      tech: ['Team Project', 'Firebase', 'UI/UX'],
      link: 'https://wahabniazi09.github.io/Pet-Care-TechWiz/'
    },
    {
      name: 'NewPulse',
      description: 'Modern news application with real-time updates, built with React Vite and news API integration',
      tech: ['React', 'Vite', 'News API', 'Responsive Design'],
      link: 'https://github.com/Amishdhera/NewPulse'
    },

  ];

  const stats = [
    { number: '15+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '10+', label: 'Happy Clients' },
    { number: '8+', label: 'Technologies' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: mode ? '#ffffff' : '#000000',
      color: mode ? '#000000' : '#ffffff'
    }}>
      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center py-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="text-center text-lg-start">
              <div className="mb-4">
                <div
                  className="badge rounded-pill px-4 py-2 mb-3 fw-bold d-inline-block"
                  style={{
                    background: '#e50914',
                    color: 'white',
                    fontSize: '0.9rem'
                  }}
                >
                  FULL STACK DEVELOPER
                </div>
                <h1 className="display-4 fw-bold mb-3" style={{ color: '#e50914' }}>
                  Ameet Kumar <span style={{ color: mode ? '#000000' : '#ffffff' }}>Dhera</span>
                </h1>
                <p className="lead fw-semibold mb-4" style={{
                  fontSize: '1.4rem',
                  color: mode ? '#666666' : '#cccccc'
                }}>
                  Creating Digital Experiences That Matter
                </p>
              </div>

              <p className="mb-5" style={{
                fontSize: '1.1rem',
                color: mode ? '#666666' : '#cccccc',
                lineHeight: '1.6'
              }}>
                Passionate about creating beautiful, functional, and user-friendly applications.
                I specialize in Flutter mobile development and modern web technologies,
                turning complex problems into simple, elegant solutions.
              </p>

              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                <Link
                  to="https://wa.me/923161103616"
                  className="btn fw-bold px-4 py-3 rounded-0 border-0"
                  style={{
                    background: '#e50914',
                    color: 'white',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#ff0000'}
                  onMouseLeave={(e) => e.target.style.background = '#e50914'}
                >
                  GET IN TOUCH
                </Link>
                <a
                  href="https://amishdhera.github.io/Appportfolio/"
                  className="btn fw-bold px-4 py-3 rounded-0 border-2"
                  style={{
                    borderColor: '#e50914',
                    color: '#e50914',
                    background: 'transparent',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#e50914';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#e50914';
                  }}
                >
                  VIEW PROJECTS
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <div className="position-relative d-inline-block">
              <div
                className="overflow-hidden"
                style={{
                  border: '4px solid #e50914',
                  background: mode ? '#ffffff' : '#000000'
                }}
              >
                <img
                  src="src/assets/ameet.jpg"
                  alt="Ameet Kumar Dhera"
                  className="img-fluid"
                  style={{
                    width: '400px',
                    height: '400px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  className="d-none align-items-center justify-content-center fw-bold display-4"
                  style={{
                    width: '400px',
                    height: '400px',
                    background: mode ? '#f8f9fa' : '#1a1a1a',
                    color: mode ? '#000000' : '#ffffff'
                  }}
                >
                  <div className="text-center">
                    <div style={{ fontSize: '4rem', color: '#e50914' }}>AK</div>
                    <div className="mt-2" style={{ fontSize: '1.5rem' }}>Ameet Kumar Dhera</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row py-5">
          <div className="col-12">
            <div className="row g-4">
              {stats.map((stat, index) => (
                <div className="col-md-3 col-sm-6" key={index}>
                  <div
                    className="p-4 text-center border"
                    style={{
                      background: mode ? '#ffffff' : '#000000',
                      borderColor: '#e50914 !important',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = mode ? '#f8f9fa' : '#1a1a1a'}
                    onMouseLeave={(e) => e.currentTarget.style.background = mode ? '#ffffff' : '#000000'}
                  >
                    <h3 className="fw-bold mb-2" style={{ color: '#e50914', fontSize: '2.5rem' }}>
                      {stat.number}
                    </h3>
                    <p className="mb-0" style={{ color: mode ? '#666666' : '#cccccc', fontSize: '1.1rem' }}>
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="row py-5">
          <div className="col-lg-10 mx-auto">
            <h2 className="display-5 fw-bold mb-5 text-center" style={{ color: '#e50914' }}>
              ABOUT ME
            </h2>
            <div className="row g-4">
              <div className="col-md-6">
                <div
                  className="p-4 h-100 border"
                  style={{
                    background: mode ? '#ffffff' : '#000000',
                    borderColor: '#e50914 !important',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = mode ? '#f8f9fa' : '#1a1a1a'}
                  onMouseLeave={(e) => e.currentTarget.style.background = mode ? '#ffffff' : '#000000'}
                >
                  <h4 className="fw-bold mb-3" style={{ color: '#e50914' }}>EDUCATION & BACKGROUND</h4>
                  <p style={{ color: mode ? '#666666' : '#cccccc', lineHeight: '1.6' }}>
                    Computer Science graduate with specialization in Mobile App Development
                    and Web Technologies. Continuously learning and adapting to new technologies
                    to create innovative solutions that solve real-world problems.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="p-4 h-100 border"
                  style={{
                    background: mode ? '#ffffff' : '#000000',
                    borderColor: '#e50914 !important',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = mode ? '#f8f9fa' : '#1a1a1a'}
                  onMouseLeave={(e) => e.currentTarget.style.background = mode ? '#ffffff' : '#000000'}
                >
                  <h4 className="fw-bold mb-3" style={{ color: '#e50914' }}>PASSION & VISION</h4>
                  <p style={{ color: mode ? '#666666' : '#cccccc', lineHeight: '1.6' }}>
                    Passionate about creating applications that make a difference.
                    Believe in clean code, user-centric design, and continuous improvement
                    to deliver exceptional digital experiences that users love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="row py-5">
          <div className="col-lg-10 mx-auto">
            <h2 className="display-5 fw-bold mb-5 text-center" style={{ color: '#e50914' }}>
              TECHNICAL SKILLS
            </h2>
            <div className="row g-4">
              {skills.map((skill, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div
                    className="p-4 border"
                    style={{
                      background: mode ? '#ffffff' : '#000000',
                      borderColor: '#e50914 !important',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = mode ? '#f8f9fa' : '#1a1a1a'}
                    onMouseLeave={(e) => e.currentTarget.style.background = mode ? '#ffffff' : '#000000'}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h6 className="fw-bold mb-0" style={{ color: mode ? '#000000' : '#ffffff' }}>{skill.name}</h6>
                      <span style={{ color: '#e50914', fontWeight: 'bold' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="progress"
                      style={{
                        height: '8px',
                        background: mode ? '#e9ecef' : '#333333',
                        borderRadius: '0px'
                      }}
                    >
                      <div
                        className="progress-bar"
                        style={{
                          width: `${skill.level}%`,
                          background: '#e50914'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="row py-5">
          <div className="col-lg-10 mx-auto">
            <h2 className="display-5 fw-bold mb-5 text-center" style={{ color: '#e50914' }}>
              FEATURED PROJECTS
            </h2>
            <div className="row g-4">
              {projects.map((project, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div
                    className="p-4 h-100 border d-flex flex-column"
                    style={{
                      background: mode ? '#ffffff' : '#000000',
                      borderColor: '#e50914 !important',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = mode ? '#f8f9fa' : '#1a1a1a'}
                    onMouseLeave={(e) => e.currentTarget.style.background = mode ? '#ffffff' : '#000000'}
                  >
                    <h5 className="fw-bold mb-3" style={{ color: '#e50914' }}>
                      {project.name}
                    </h5>

                    <p style={{ color: mode ? '#666666' : '#cccccc' }} className="mb-3 flex-grow-1">
                      {project.description}
                    </p>

                    <div className="mb-3">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="badge rounded-0 me-1 mb-2 px-3 py-2"
                          style={{
                            background: '#e50914',
                            color: 'white',
                            fontSize: '0.7rem'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn fw-bold rounded-0 border-2 mt-auto"
                      style={{
                        background: 'transparent',
                        borderColor: '#e50914',
                        color: '#e50914',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#e50914';
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#e50914';
                      }}
                    >
                      VIEW PROJECT
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>

      {/* Footer */}
      <footer
        className="py-5 border-top"
        style={{
          background: mode ? '#ffffff' : '#000000',
          borderColor: '#e50914 !important'
        }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-12 text-center">
              <div className="d-flex flex-wrap gap-4 mb-3 justify-content-center">
                {['Home', 'About', 'Movies'].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-decoration-none fw-bold"
                    style={{
                      color: '#e50914',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      padding: '8px 16px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#ff0000';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#e50914';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <p className="mb-0" style={{
                color: mode ? '#666666' : '#cccccc',
                fontSize: '1rem'
              }}>
                © 2025 <strong style={{ color: '#e50914' }}>Ameet Kumar Dhera</strong>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;