import React from 'react';

function Contact({ mode }) {
  const contactMethods = [
    {
      title: 'CALL US',
      description: 'Available 24/7 for support',
      link: 'tel:+923161103616',
      linkText: 'CALL NOW'
    },
    {
      title: 'EMAIL US',
      description: 'Quick response within hours',
      link: 'mailto:ameetdhera@gmail.com',
      linkText: 'SEND EMAIL'
    },
    {
      title: 'INSTAGRAM',
      description: 'Follow for latest updates',
      link: 'https://www.instagram.com/ameet_kumar12/',
      linkText: 'FOLLOW US'
    },
    {
      title: 'WHATSAPP',
      description: 'Instant messaging support',
      link: 'https://wa.me/923161103616',
      linkText: 'START CHAT'
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      background: mode ? '#ffffff' : '#000000',
      color: mode ? '#000000' : '#ffffff'
    }}>
      {/* Header Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <div className="mb-4">
            <div 
              className="badge rounded-pill px-4 py-2 mb-3 fw-bold d-inline-block"
              style={{ 
                background: '#e50914',
                color: 'white',
                fontSize: '0.9rem'
              }}
            >
              CONTACT US
            </div>
            <h1 className="fw-bold mb-4 display-4" style={{ color: '#e50914' }}>
              GET IN TOUCH
            </h1>
          </div>
          <p className="lead mx-auto" style={{ 
            maxWidth: '700px',
            fontSize: '1.3rem',
            color: mode ? '#666666' : '#cccccc',
            lineHeight: '1.6'
          }}>
            We're here to help! Whether you have questions about our services, need technical support, 
            or just want to share your feedback - we'd love to hear from you.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="row g-4 mb-5">
          {contactMethods.map((method, index) => (
            <div className="col-xl-3 col-lg-6 col-md-6" key={index}>
              <div 
                className="p-4 h-100 text-center border"
                style={{
                  background: mode ? '#ffffff' : '#000000',
                  borderColor: '#e50914 !important',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = mode ? '#f8f9fa' : '#1a1a1a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = mode ? '#ffffff' : '#000000';
                }}
                onClick={() => window.open(method.link, '_blank')}
              >
                <h5 className="fw-bold mb-3" style={{ color: '#e50914' }}>
                  {method.title}
                </h5>
                <p className="mb-4" style={{ color: mode ? '#666666' : '#cccccc' }}>
                  {method.description}
                </p>
                
                <div className="fw-bold" style={{ color: '#e50914', fontSize: '0.9rem' }}>
                  {method.linkText}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location & Map Section */}
        <div className="row g-5 mb-5">
          <div className="col-lg-6">
            <div 
              className="p-5 h-100 border"
              style={{
                background: mode ? '#ffffff' : '#000000',
                borderColor: '#e50914 !important'
              }}
            >
              <div className="mb-4">
                <h3 className="fw-bold mb-1" style={{ color: '#e50914' }}>
                  OUR LOCATION
                </h3>
                <p className="mb-0" style={{ color: mode ? '#666666' : '#cccccc' }}>
                  Karachi, Pakistan
                </p>
              </div>
              
              <div className="mt-4">
                <h5 className="fw-semibold mb-3" style={{ color: '#e50914' }}>
                  OFFICE ADDRESS
                </h5>
                <p style={{ color: mode ? '#666666' : '#cccccc', lineHeight: '1.6' }}>
                  Based in Karachi, serving clients worldwide with cutting-edge solutions 
                  and professional services.
                </p>
                
                <div className="mt-4">
                  <h6 className="fw-semibold mb-2" style={{ color: '#e50914' }}>
                    BUSINESS HOURS
                  </h6>
                  <p style={{ color: mode ? '#666666' : '#cccccc' }} className="mb-1">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p style={{ color: mode ? '#666666' : '#cccccc' }} className="mb-0">
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div 
              className="overflow-hidden border"
              style={{
                borderColor: '#e50914 !important',
                height: '400px'
              }}
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.9939451867!2d67.00110147441055!3d24.86073434617021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e0b0ba5f8b1%3A0x66f3b1a7b69018d3!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1720499870513!5m2!1sen!2s"
                style={{ 
                  border: 0, 
                  width: '100%', 
                  height: '100%',
                  filter: mode ? 'none' : 'invert(90%) hue-rotate(180deg)'
                }}
                allowFullScreen
                loading="lazy"
              />
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

export default Contact;
