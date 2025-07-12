// pages/DestinationDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/DestinationDetail.css';
import baliImage from '../assets/images/bali.jpg';
import santoriniImage from '../assets/images/santorini.avif';
import kyotoImage from '../assets/images/kyoto.jpg';
import parisImage from '../assets/images/paris.jpg';
import machuPicchuImage from '../assets/images/machu-picchu.webp';
import serengetiImage from '../assets/images/serengeti.jpg';
import newYorkImage from '../assets/images/new-york.jpg';
import greatBarrierReefImage from '../assets/images/great-barrier-reef.webp';

const DestinationDetail = () => {
  const { id } = useParams();
  
  const destinations = [
    { 
      id: 1, 
      name: 'Bali, Indonesia', 
      image: baliImage, 
      category: 'beach', 
      rating: 4.8,
      cost: '$$$ (Mid-range)',
      duration: '7-10 days',
      bestTime: 'April to October',
      description: 'Bali is a tropical paradise known for its lush jungles, stunning beaches, vibrant culture, and spiritual retreats. This Indonesian island offers the perfect blend of relaxation and adventure.',
      highlights: [
        'Visit the sacred Monkey Forest in Ubud',
        'Relax on the beaches of Seminyak and Canggu',
        'Watch the sunset at Tanah Lot Temple',
        'Explore the Tegallalang Rice Terraces',
        'Experience Balinese culture in Ubud',
        'Snorkel or dive in Nusa Penida',
        'Try authentic Balinese cuisine'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Denpasar',
          activities: [
            'Airport pickup and transfer to your hotel',
            'Relax and acclimate to the tropical climate',
            'Evening stroll along Kuta Beach'
          ]
        },
        {
          day: 2,
          title: 'Ubud Cultural Tour',
          activities: [
            'Visit the Sacred Monkey Forest',
            'Explore Ubud Art Market',
            'Lunch at a local warung',
            'Tegallalang Rice Terraces visit',
            'Traditional Balinese dance performance'
          ]
        },
        {
          day: 3,
          title: 'Beach Day in Seminyak',
          activities: [
            'Relax at Seminyak Beach',
            'Visit Tanah Lot Temple for sunset',
            'Enjoy seafood dinner at Jimbaran Bay'
          ]
        },
        {
          day: 4,
          title: 'Nusa Penida Excursion',
          activities: [
            'Speedboat to Nusa Penida',
            'Visit Kelingking Beach and Angel\'s Billabong',
            'Snorkeling at Crystal Bay',
            'Return to mainland Bali'
          ]
        },
        {
          day: 5,
          title: 'North Bali Exploration',
          activities: [
            'Visit Gitgit Waterfall',
            'See the Ulun Danu Temple at Lake Bratan',
            'Explore Munduk region',
            'Coffee plantation tour'
          ]
        }
      ],
      tips: [
        'Dress modestly when visiting temples (cover shoulders and knees)',
        'Bargain at markets but do so respectfully',
        'Try local dishes like Nasi Goreng, Babi Guling, and Lawar',
        'Rent a scooter for easy transportation (with proper license)',
        'Carry small bills for tipping and small purchases',
        'Respect local customs and religious ceremonies',
        'Stay hydrated and use sunscreen'
      ]
    },
    { 
      id: 2, 
      name: 'Santorini, Greece', 
      image: santoriniImage, 
      category: 'beach', 
      rating: 4.9,
      cost: '$$$$ (Luxury)',
      duration: '5-7 days',
      bestTime: 'May to October',
      description: 'Famous for its white-washed buildings with blue domes overlooking the Aegean Sea, Santorini offers breathtaking sunsets, volcanic beaches, and romantic getaways in the Cyclades islands.',
      highlights: [
        'Watch sunset in Oia village',
        'Explore the caldera views in Fira',
        'Visit the ancient ruins of Akrotiri',
        'Swim at the unique Red Beach',
        'Take a boat tour to the volcanic islands',
        'Sample Assyrtiko wine at local wineries',
        'Stay in a cliffside cave hotel'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Santorini',
          activities: [
            'Airport transfer to your hotel',
            'Relax at your accommodation',
            'Evening stroll in Fira'
          ]
        },
        {
          day: 2,
          title: 'Oia and Northern Villages',
          activities: [
            'Explore Oia village',
            'Visit Amoudi Bay for seafood lunch',
            'See the famous blue domes',
            'Sunset viewing at Oia Castle'
          ]
        },
        {
          day: 3,
          title: 'Caldera Boat Tour',
          activities: [
            'Catamaran cruise around the caldera',
            'Visit the volcanic hot springs',
            'Swim stops at secluded beaches',
            'Sunset dinner on board'
          ]
        },
        {
          day: 4,
          title: 'Southern Santorini',
          activities: [
            'Visit Akrotiri archaeological site',
            'Explore Red Beach and Perissa Beach',
            'Wine tasting at Santo Wines',
            'Dinner with caldera views'
          ]
        }
      ],
      tips: [
        'Book sunset viewing spots in Oia early',
        'Wear comfortable shoes for cobblestone streets',
        'Try local specialties like fava, tomato keftedes, and white eggplant',
        'Respect private property when taking photos',
        'Visit popular sites early to avoid crowds',
        'Bring swim shoes for volcanic beaches',
        'Carry cash for small shops and taxis'
      ]
    },
    { 
      id: 3, 
      name: 'Kyoto, Japan', 
      image: kyotoImage, 
      category: 'cultural', 
      rating: 4.7,
      cost: '$$$$',
      duration: '7-14 days',
      bestTime: 'March-May (cherry blossoms), October-November (fall foliage)',
      description: 'Kyoto, Japan\'s ancient capital, is a living museum of traditional Japanese culture with over 2,000 temples and shrines, beautiful gardens, and preserved geisha districts.',
      highlights: [
        'Visit Fushimi Inari Shrine with its thousands of torii gates',
        'See the golden Kinkaku-ji Temple',
        'Walk through the bamboo forest in Arashiyama',
        'Experience a traditional tea ceremony',
        'Explore Gion, Kyoto\'s geisha district',
        'Admire cherry blossoms or autumn leaves',
        'Try kaiseki (traditional multi-course meal)'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Kyoto',
          activities: [
            'Check into ryokan (traditional inn)',
            'Explore Higashiyama district',
            'Visit Yasaka Shrine',
            'Evening walk in Gion'
          ]
        },
        {
          day: 2,
          title: 'Eastern Kyoto Temples',
          activities: [
            'Kiyomizu-dera Temple',
            'Sanjusangen-do Hall',
            'Heian Shrine and garden',
            'Philosopher\'s Path walk'
          ]
        },
        {
          day: 3,
          title: 'Northern Kyoto',
          activities: [
            'Kinkaku-ji (Golden Pavilion)',
            'Ryoan-ji rock garden',
            'Ninnaji Temple',
            'Arashiyama bamboo forest'
          ]
        },
        {
          day: 4,
          title: 'Southern Kyoto',
          activities: [
            'Fushimi Inari Shrine hike',
            'Tofuku-ji Temple',
            'Byodo-in Temple in Uji',
            'Green tea tasting'
          ]
        },
        {
          day: 5,
          title: 'Cultural Experiences',
          activities: [
            'Traditional tea ceremony',
            'Kimono wearing experience',
            'Nishiki Market food tour',
            'Gion cultural walk'
          ]
        }
      ],
      tips: [
        'Purchase a Japan Rail Pass before arrival if traveling around Japan',
        'Learn basic Japanese phrases and bowing etiquette',
        'Remove shoes when entering temples and traditional buildings',
        'Try local specialties like matcha, yudofu, and kaiseki',
        'Use public transportation (buses and trains) efficiently',
        'Be quiet and respectful in temples and shrines',
        'Carry cash as many places don\'t accept credit cards'
      ]
    },
    { 
      id: 4, 
      name: 'Paris, France', 
      image: parisImage, 
      category: 'city', 
      rating: 4.6,
      cost: '$$$',
      duration: '4-7 days',
      bestTime: 'April-June, September-October',
      description: 'The City of Light offers world-class museums, iconic landmarks, charming neighborhoods, and unparalleled cuisine, making it one of the most romantic and culturally rich cities in the world.',
      highlights: [
        'Visit the Eiffel Tower and Champ de Mars',
        'Explore the Louvre Museum',
        'Walk along the Seine River',
        'See Notre-Dame Cathedral',
        'Stroll through Montmartre',
        'Shop on Champs-Élysées',
        'Enjoy French pastries and cuisine'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Central Paris',
          activities: [
            'Check into hotel',
            'Eiffel Tower visit',
            'Seine River cruise',
            'Dinner in Saint-Germain'
          ]
        },
        {
          day: 2,
          title: 'Museum Day',
          activities: [
            'Louvre Museum',
            'Tuileries Garden',
            'Orsay Museum',
            'Evening in Latin Quarter'
          ]
        },
        {
          day: 3,
          title: 'Historic Paris',
          activities: [
            'Notre-Dame Cathedral',
            'Sainte-Chapelle',
            'Île Saint-Louis',
            'Marais district exploration'
          ]
        },
        {
          day: 4,
          title: 'Montmartre & Shopping',
          activities: [
            'Sacré-Cœur Basilica',
            'Artist\'s Square in Montmartre',
            'Champs-Élysées walk',
            'Arc de Triomphe'
          ]
        }
      ],
      tips: [
        'Purchase museum passes in advance to skip lines',
        'Learn basic French phrases (bonjour, merci)',
        'Be aware of pickpockets in tourist areas',
        'Try local bakeries for breakfast',
        'Use the Metro for efficient transportation',
        'Make dinner reservations for popular restaurants',
        'Visit popular sites early morning or late afternoon'
      ]
    },
    { 
      id: 5, 
      name: 'Machu Picchu, Peru', 
      image: machuPicchuImage, 
      category: 'adventure', 
      rating: 4.9,
      cost: '$$',
      duration: '10-14 days',
      bestTime: 'May-September (dry season)',
      description: 'This ancient Incan citadel nestled high in the Andes Mountains is one of the New Seven Wonders of the World, offering breathtaking ruins, mountain views, and fascinating history.',
      highlights: [
        'Explore Machu Picchu ruins',
        'Hike the Inca Trail (4-day trek)',
        'Visit Sacred Valley towns',
        'See Cusco\'s colonial architecture',
        'Experience Andean culture',
        'Try Peruvian cuisine',
        'Visit Rainbow Mountain'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Lima',
          activities: [
            'Flight to Lima',
            'City tour of historic center',
            'Dinner with Peruvian cuisine'
          ]
        },
        {
          day: 2,
          title: 'Flight to Cusco',
          activities: [
            'Acclimate to altitude',
            'Explore Plaza de Armas',
            'Visit Qorikancha temple'
          ]
        },
        {
          day: 3,
          title: 'Sacred Valley',
          activities: [
            'Pisac market and ruins',
            'Ollantaytambo fortress',
            'Stay in valley overnight'
          ]
        },
        {
          day: 4,
          title: 'Start Inca Trail',
          activities: [
            'Begin trek at KM 82',
            'Hike to Wayllabamba',
            'Camp overnight'
          ]
        },
        {
          day: 5,
          title: 'Dead Woman\'s Pass',
          activities: [
            'Challenging hike to highest point',
            'Descend to Pacaymayo valley',
            'Second campsite'
          ]
        },
        {
          day: 6,
          title: 'Cloud Forest',
          activities: [
            'Pass through ruins of Runkurakay',
            'Descend to Phuyupatamarca',
            'Final campsite near Wiñay Wayna'
          ]
        },
        {
          day: 7,
          title: 'Machu Picchu',
          activities: [
            'Sunrise at Inti Punku',
            'Full day exploring ruins',
            'Bus to Aguas Calientes'
          ]
        },
        {
          day: 8,
          title: 'Return to Cusco',
          activities: [
            'Train back to Cusco',
            'Free afternoon to relax',
            'Farewell dinner'
          ]
        }
      ],
      tips: [
        'Acclimate to altitude in Cusco before trekking',
        'Pack layers for changing mountain weather',
        'Hire a reputable tour company for Inca Trail',
        'Drink coca tea to help with altitude',
        'Bring broken-in hiking boots',
        'Carry small bills in Peruvian soles',
        'Respect the sacred nature of the site'
      ]
    },
    { 
      id: 6, 
      name: 'Serengeti, Tanzania', 
      image: serengetiImage, 
      category: 'wildlife', 
      rating: 4.8,
      cost: '$$$$',
      duration: '7-10 days',
      bestTime: 'June-October (Great Migration), January-February (calving season)',
      description: 'Experience the ultimate African safari in Tanzania\'s Serengeti National Park, home to the Great Migration and the Big Five (lion, leopard, rhino, elephant, and buffalo).',
      highlights: [
        'Witness the Great Migration',
        'See the Big Five on game drives',
        'Hot air balloon safari at sunrise',
        'Visit Ngorongoro Crater',
        'Experience Maasai culture',
        'Stay in luxury safari lodges',
        'Night game drives (in some areas)'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Arusha',
          activities: [
            'International flight arrival',
            'Transfer to lodge',
            'Safari briefing',
            'Rest and prepare'
          ]
        },
        {
          day: 2,
          title: 'Tarangire National Park',
          activities: [
            'Morning game drive',
            'See baobab trees and elephants',
            'Afternoon game drive',
            'Lodge overnight'
          ]
        },
        {
          day: 3,
          title: 'Ngorongoro Crater',
          activities: [
            'Descend into the crater',
            'Full day wildlife viewing',
            'Picnic lunch by hippo pool',
            'Lodge on crater rim'
          ]
        },
        {
          day: 4,
          title: 'Central Serengeti',
          activities: [
            'Game drive en route to Serengeti',
            'Afternoon game drive',
            'Sunset viewing',
            'Lodge in central Serengeti'
          ]
        },
        {
          day: 5,
          title: 'Northern Serengeti',
          activities: [
            'Morning game drive',
            'Transfer to northern area',
            'River crossing viewing (seasonal)',
            'Luxury camp stay'
          ]
        },
        {
          day: 6,
          title: 'Full Day Safari',
          activities: [
            'Sunrise game drive',
            'Visit Retina Hippo Pool',
            'Afternoon game drive',
            'Sundowner drinks'
          ]
        },
        {
          day: 7,
          title: 'Return to Arusha',
          activities: [
            'Morning game drive',
            'Scenic flight to Arusha',
            'Day room for refresh',
            'Evening departure'
          ]
        }
      ],
      tips: [
        'Pack neutral-colored clothing for safari',
        'Bring quality binoculars and camera equipment',
        'Follow all safety instructions from guides',
        'Respect wildlife viewing distances',
        'Take malaria prophylaxis as recommended',
        'Pack for both hot days and cool nights',
        'Bring small bills for tipping guides and staff'
      ]
    },
    { 
      id: 7, 
      name: 'New York, USA', 
      image: newYorkImage, 
      category: 'city', 
      rating: 4.5,
      cost: '$$$',
      duration: '5-7 days',
      bestTime: 'April-June, September-November',
      description: 'The city that never sleeps offers world-famous landmarks, Broadway shows, diverse neighborhoods, and an unparalleled dining and cultural scene in the heart of the United States.',
      highlights: [
        'Visit Times Square and Broadway',
        'See the Statue of Liberty',
        'Walk through Central Park',
        'Explore Metropolitan Museum of Art',
        'Experience top restaurants',
        'See skyline from Top of the Rock',
        'Shop in SoHo and Fifth Avenue'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Midtown',
          activities: [
            'Check into hotel',
            'Times Square exploration',
            'Broadway show in evening'
          ]
        },
        {
          day: 2,
          title: 'Lower Manhattan',
          activities: [
            'Statue of Liberty and Ellis Island',
            'Wall Street and Charging Bull',
            '9/11 Memorial and Museum',
            'Dinner in Tribeca'
          ]
        },
        {
          day: 3,
          title: 'Museums & Central Park',
          activities: [
            'Metropolitan Museum of Art',
            'Walk through Central Park',
            'Museum of Modern Art (MoMA)',
            'Rooftop drinks'
          ]
        },
        {
          day: 4,
          title: 'Uptown & Harlem',
          activities: [
            'American Museum of Natural History',
            'Explore Harlem culture',
            'Apollo Theater tour',
            'Soul food dinner'
          ]
        },
        {
          day: 5,
          title: 'Brooklyn & Trendy Areas',
          activities: [
            'Walk across Brooklyn Bridge',
            'Explore DUMBO and Brooklyn Heights',
            'Williamsburg street art',
            'Pizza in Brooklyn'
          ]
        }
      ],
      tips: [
        'Use subway for efficient transportation',
        'Purchase attraction passes for savings',
        'Make restaurant reservations in advance',
        'Walk as much as possible to experience neighborhoods',
        'Be prepared for all weather conditions',
        'Visit popular museums on less crowded days',
        'Try diverse cuisines from different cultures'
      ]
    },
    { 
      id: 8, 
      name: 'Great Barrier Reef, Australia', 
      image: greatBarrierReefImage, 
      category: 'beach', 
      rating: 4.7,
      cost: '$$$',
      duration: '7-10 days',
      bestTime: 'June-October',
      description: 'The world\'s largest coral reef system offers incredible snorkeling and diving opportunities with vibrant marine life, along with beautiful tropical islands and coastal experiences.',
      highlights: [
        'Snorkel or dive on the reef',
        'Stay on a tropical island',
        'See the Daintree Rainforest',
        'Visit Whitehaven Beach',
        'Experience Aboriginal culture',
        'Take a scenic helicopter flight',
        'Explore Cairns and Port Douglas'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Cairns',
          activities: [
            'Check into hotel',
            'Esplanade walk',
            'Lagoon swimming',
            'Night markets'
          ]
        },
        {
          day: 2,
          title: 'Outer Reef Tour',
          activities: [
            'Boat trip to outer reef',
            'Snorkeling at multiple sites',
            'Optional scuba diving',
            'Underwater observatory'
          ]
        },
        {
          day: 3,
          title: 'Daintree Rainforest',
          activities: [
            'Cape Tribulation tour',
            'Rainforest walks',
            'Crocodile spotting cruise',
            'Indigenous cultural experience'
          ]
        },
        {
          day: 4,
          title: 'Travel to Whitsundays',
          activities: [
            'Flight to Hamilton Island',
            'Check into island resort',
            'Relax on beach',
            'Sunset viewing'
          ]
        },
        {
          day: 5,
          title: 'Whitehaven Beach',
          activities: [
            'Boat to Whitehaven Beach',
            'Hill Inlet lookout walk',
            'Beach relaxation',
            'Snorkeling at nearby reefs'
          ]
        },
        {
          day: 6,
          title: 'Island Activities',
          activities: [
            'Kayaking or paddleboarding',
            'Reef snorkeling tour',
            'Luxury spa treatment',
            'Sunset cruise'
          ]
        }
      ],
      tips: [
        'Use reef-safe sunscreen to protect coral',
        'Book reef tours in advance during peak season',
        'Be cautious of jellyfish (stinger season Nov-May)',
        'Pack waterproof bags for boat trips',
        'Respect marine life - don\'t touch coral',
        'Stay hydrated in tropical climate',
        'Consider getting dive certified before trip'
      ]
    }
  ];

  const destination = destinations.find(dest => dest.id === parseInt(id));

  if (!destination) {
    return <div className="destination-not-found">Destination not found</div>;
  }

  return (
    <div className="destination-detail-page">
      <section className="destination-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${destination.image})` }}>
        <div className="hero-content">
          <h1>{destination.name}</h1>
          <div className="destination-meta">
            <div className="meta-item">
              <i className="fas fa-star"></i>
              <span>{destination.rating} Rating</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-wallet"></i>
              <span>{destination.cost}</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-clock"></i>
              <span>{destination.duration}</span>
            </div>
            {destination.bestTime && (
              <div className="meta-item">
                <i className="fas fa-calendar-alt"></i>
                <span>Best Time: {destination.bestTime}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="destination-content">
        <div className="destination-overview">
          <h2>Overview</h2>
          <p>{destination.description}</p>
          
          <div className="highlights-section">
            <h3>Top Highlights</h3>
            <ul className="highlights-list">
              {destination.highlights.map((highlight, index) => (
                <li key={index}>
                  <i className="fas fa-check-circle"></i>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="destination-details">
          <div className="itinerary-section">
            <h2>Suggested Itinerary</h2>
            <div className="itinerary-days">
              {destination.itinerary.map(day => (
                <div key={day.day} className="itinerary-day">
                  <h4>Day {day.day}: {day.title}</h4>
                  <ul>
                    {day.activities.map((activity, index) => (
                      <li key={index}>
                        <i className="fas fa-circle"></i>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="tips-section">
            <h3>Travel Tips</h3>
            <ul className="tips-list">
              {destination.tips.map((tip, index) => (
                <li key={index}>
                  <i className="fas fa-lightbulb"></i>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="booking-section">
          <h2>Ready to Explore {destination.name}?</h2>
          <p>Contact our travel experts to plan your perfect trip</p>
          <div className="booking-actions">
            <button className="book-now-btn">
              <i className="fas fa-calendar-check"></i> Book Now
            </button>
            <button className="contact-btn">
              <i className="fas fa-envelope"></i> Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetail;