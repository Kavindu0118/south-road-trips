import './About.css';

const About = () => {
  const stats = [
    { number: '5000+', label: 'Happy Customers' },
    { number: '150+', label: 'Premium Vehicles' },
    { number: '50+', label: 'Tour Destinations' },
    { number: '15+', label: 'Years Experience' }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'New York, USA',
      rating: 5,
      comment: 'Amazing experience! The vehicle was pristine and the tour guide was incredibly knowledgeable. Would definitely recommend South Road Trips to anyone.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      tour: 'Coastal Paradise Tour'
    },
    {
      name: 'James Anderson',
      location: 'London, UK',
      rating: 5,
      comment: 'Best road trip ever! The customer service was outstanding and every detail was perfectly planned. Can\'t wait to book another adventure.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      tour: 'Mountain Adventure'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Barcelona, Spain',
      rating: 5,
      comment: 'The luxury SUV exceeded all expectations. Smooth ride, comfortable, and the flexible routes made our journey perfect. Highly professional service!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      tour: 'Wine Country Escape'
    },
    {
      name: 'David Chen',
      location: 'Singapore',
      rating: 5,
      comment: 'Outstanding service from start to finish. The team went above and beyond to ensure we had an unforgettable experience. Worth every penny!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
      tour: 'Desert Safari Adventure'
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* About Header */}
        <div className="about-header">
          <h2 className="about-title">About South Road Trips</h2>
          <p className="about-subtitle">
            Your trusted partner for unforgettable journeys since 2009
          </p>
        </div>

        {/* About Content */}
        <div className="about-content">
          <div className="about-text">
            <h3 className="about-heading">Our Story</h3>
            <p>
              Founded with a passion for travel and exploration, South Road Trips has been 
              connecting adventurers with their dream destinations for over 15 years. What 
              started as a small family-owned business has grown into a leading provider of 
              vehicle rentals and guided tours.
            </p>
            <p>
              We believe that the journey is just as important as the destination. That's 
              why we maintain a premium fleet of vehicles and partner with experienced local 
              guides to ensure every trip is safe, comfortable, and memorable.
            </p>
            <p>
              Our commitment to excellence and customer satisfaction has earned us the trust 
              of thousands of travelers who return year after year to explore new horizons 
              with us.
            </p>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=700&fit=crop" 
              alt="Travel Adventure" 
            />
            <div className="about-image-overlay">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Certified & Licensed</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h3 className="values-title">Our Core Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h4>Quality Service</h4>
              <p>We maintain the highest standards in vehicle maintenance and customer care</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>Innovation</h4>
              <p>Continuously improving our services with the latest technology and trends</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>Sustainability</h4>
              <p>Committed to eco-friendly practices and responsible tourism</p>
            </div>
          </div>
        </div>

        {/* Customer Feedback Section */}
        <div className="testimonials-section">
          <h3 className="testimonials-title">What Our Customers Say</h3>
          <p className="testimonials-subtitle">
            Real experiences from travelers who chose South Road Trips
          </p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-image-wrapper">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-location">{testimonial.location}</p>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="testimonial-comment">"{testimonial.comment}"</p>
                <div className="testimonial-tour">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>{testimonial.tour}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
