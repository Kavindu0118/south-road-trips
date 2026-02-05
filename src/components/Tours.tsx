import './Tours.css';

const Tours = () => {
  const tours = [
    {
      name: 'Yala National Park Safari',
      duration: 'Full Day',
      destinations: ['Yala National Park', 'Leopard Spotting', 'Wildlife Safari', 'Scenic Routes'],
      rating: 4.9,
      reviews: 156,
      description: 'Experience thrilling wildlife encounters in Sri Lanka\'s most famous national park, home to leopards, elephants, and exotic birds',
      highlights: ['Leopard Safari', 'Elephant Herds', 'Bird Watching', 'Professional Guide'],
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop'
    },
    {
      name: 'Ella Hill Country Tour',
      duration: 'Full Day',
      destinations: ['Nine Arch Bridge', 'Little Adam\'s Peak', 'Ravana Falls', 'Tea Plantations'],
      rating: 4.8,
      reviews: 203,
      description: 'Explore the stunning hill country of Ella with breathtaking views, waterfalls, and lush tea estates',
      highlights: ['Scenic Train Ride', 'Hiking Trails', 'Tea Factory Visit', 'Waterfall Views'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
    },
    {
      name: 'Galle Fort Heritage Tour',
      duration: 'Half Day',
      destinations: ['Galle Fort', 'Dutch Architecture', 'Lighthouse', 'Museums'],
      rating: 4.7,
      reviews: 187,
      description: 'Walk through history in this UNESCO World Heritage Site featuring Dutch colonial architecture and coastal views',
      highlights: ['Historic Fort Walk', 'Sunset Views', 'Local Shops', 'Photography Spots'],
      image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&h=400&fit=crop'
    },
    {
      name: 'Kandy Cultural Experience',
      duration: 'Full Day',
      destinations: ['Temple of Tooth', 'Royal Botanical Gardens', 'Kandy Lake', 'Cultural Dance'],
      rating: 4.9,
      reviews: 234,
      description: 'Immerse yourself in Sri Lankan culture with visits to sacred temples, royal gardens, and traditional performances',
      highlights: ['Temple Visit', 'Cultural Show', 'Botanical Gardens', 'City Tour'],
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=400&fit=crop'
    },
    {
      name: 'Nuwara Eliya Tea Country',
      duration: 'Full Day',
      destinations: ['Tea Plantations', 'Gregory Lake', 'Victoria Park', 'Tea Factory'],
      rating: 4.8,
      reviews: 145,
      description: 'Experience the cool climate and colonial charm of Little England with stunning tea estates and scenic landscapes',
      highlights: ['Tea Tasting', 'Factory Tour', 'Lake Activities', 'Mountain Views'],
      image: 'https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=600&h=400&fit=crop'
    },
    {
      name: 'Anuradhapura Ancient City',
      duration: 'Full Day',
      destinations: ['Sacred Bo Tree', 'Ancient Stupas', 'Ruins', 'Moonstone'],
      rating: 4.7,
      reviews: 112,
      description: 'Journey through 2,500 years of history exploring ancient ruins, sacred sites, and architectural marvels',
      highlights: ['Ancient Temples', 'Historical Sites', 'Sacred Bo Tree', 'Expert Guide'],
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop'
    },
    {
      name: 'Sigiriya Rock Fortress',
      duration: 'Half Day',
      destinations: ['Sigiriya Rock', 'Mirror Wall', 'Lion\'s Gate', 'Frescoes'],
      rating: 4.9,
      reviews: 298,
      description: 'Climb the iconic Sigiriya Rock Fortress, a UNESCO World Heritage Site with stunning ancient frescoes and views',
      highlights: ['Rock Climbing', 'Ancient Frescoes', 'Panoramic Views', 'Historical Site'],
      image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=600&h=400&fit=crop'
    },
    {
      name: 'Custom Tour Packages',
      duration: 'Flexible',
      destinations: ['Your Choice', 'Multiple Locations', 'Personalized Route', 'Flexible Schedule'],
      rating: 5.0,
      reviews: 89,
      description: 'Design your perfect Sri Lankan adventure with our fully customizable tour packages tailored to your preferences',
      highlights: ['Custom Itinerary', 'Flexible Timing', 'Personal Guide', 'Any Destination'],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop'
    },
    {
      name: 'Airport Shuttle Service',
      duration: 'As Needed',
      destinations: ['Airport Transfer', 'Hotel Pickup', 'Direct Route', 'Any Location'],
      rating: 4.8,
      reviews: 421,
      description: 'Comfortable and reliable airport transfer service to and from any location in Sri Lanka',
      highlights: ['On-Time Service', 'Comfortable Ride', 'Meet & Greet', 'Luggage Assistance'],
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section className="tours-section" id="tours">
      <div className="tours-container">
        <div className="tours-header">
          <h2 className="tours-title">Popular Tours</h2>
          <p className="tours-subtitle">
            Discover our handpicked selection of unforgettable tour experiences
          </p>
        </div>
        <div className="tours-grid">
          {tours.map((tour, index) => (
            <div key={index} className="tour-card">
              <div className="tour-image-wrapper">
                <img src={tour.image} alt={tour.name} className="tour-image" />
                <div className="tour-duration">{tour.duration}</div>
              </div>
              <div className="tour-content">
                <div className="tour-header-info">
                  <h3 className="tour-name">{tour.name}</h3>
                  <div className="tour-rating">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{tour.rating}</span>
                    <span className="review-count">({tour.reviews} reviews)</span>
                  </div>
                </div>
                <p className="tour-description">{tour.description}</p>
                <div className="tour-destinations">
                  <h4 className="destinations-title">Destinations:</h4>
                  <div className="destination-tags">
                    {tour.destinations.map((dest, idx) => (
                      <span key={idx} className="destination-tag">{dest}</span>
                    ))}
                  </div>
                </div>
                <div className="tour-highlights">
                  {tour.highlights.map((highlight, idx) => (
                    <div key={idx} className="highlight-item">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="tour-footer">
                  <a 
                    href={`https://wa.me/94764546169?text=Hi!%20I'd%20like%20to%20book%20the%20${encodeURIComponent(tour.name)}%20(${tour.duration}).%20Please%20share%20the%20details!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="book-tour-btn"
                  >
                    Book Tour
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
