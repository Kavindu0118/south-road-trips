import turtleVideo from '../assets/blog/sea-turtle-conservation.mp4'
import turtleImage from '../assets/blog/sea-turtle.jpg'
import leapardIMG from '../assets/blog/yala-leapard.jpg'
import srilankanroadsIMG from '../assets/blog/sri-lankan-roads.jpg'

export interface BlogPostPreview {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

export interface BlogArticleContent {
  type: 'intro' | 'section' | 'list' | 'highlight-list' | 'video' | 'cta';
  title?: string;
  text?: string;
  content?: string;
  items?: string[] | Array<{ title: string; desc: string }>;
  endText?: string;
  src?: string;
}

export interface BlogArticleData extends BlogPostPreview {
  content: BlogArticleContent[];
  videoUrl?: string;
}

export const blogArticles: { [key: string]: BlogArticleData } = {
  'sea-turtle': {
    id: 'sea-turtle',
    title: 'Visit the Sea Turtle Conservation Center Near Ahangama',
    excerpt: 'If you are traveling along the beautiful south coast of Sri Lanka, visiting a Sea Turtle Conservation Center is a wonderful experience you should not miss. Located only about 7 km from Ahangama...',
    date: 'March 14, 2025',
    author: 'Sarah Johnson',
    category: 'Culture & Wildlife',
    image: turtleImage,
    readTime: '8 min read',
    videoUrl: turtleVideo,
    content: [
      {
        type: 'intro',
        text: 'If you are traveling along the beautiful south coast of Sri Lanka, visiting a Sea Turtle Conservation Center is a wonderful experience you should not miss. Located only about 7 km from Ahangama, this place is dedicated to protecting endangered sea turtles and educating visitors about marine conservation. It is a short and meaningful trip that adds something special to your Sri Lanka travel experience.'
      },
      {
        type: 'section',
        title: 'Why Sea Turtle Conservation is Important',
        content: 'Sri Lanka is home to several species of sea turtles that visit its beaches to lay eggs. Unfortunately, these turtles face many threats such as ocean pollution, fishing nets, and illegal egg collection.\n\nSea Turtle Conservation Centers work hard to:'
      },
      {
        type: 'list',
        items: [
          'Protect turtle eggs from predators and human threats',
          'Care for injured sea turtles',
          'Release baby turtles safely into the ocean',
          'Educate visitors about marine conservation'
        ],
        endText: 'By visiting these centers, travelers also help support the protection of these amazing marine animals.'
      },
      {
        type: 'section',
        title: 'What You Can See at the Conservation Center',
        content: 'When you visit the Sea Turtle Conservation Center near Ahangama, you will have the chance to see different stages of a turtle\'s life. Some of the things you can experience include:'
      },
      {
        type: 'highlight-list',
        items: [
          {
            title: 'Baby Turtles (Hatchlings)',
            desc: 'You may see tiny baby turtles that will soon be released into the ocean.'
          },
          {
            title: 'Different Species of Sea Turtles',
            desc: 'The center often protects species such as Green Turtles, Hawksbill Turtles, and Olive Ridley Turtles.'
          },
          {
            title: 'Rescued or Injured Turtles',
            desc: 'Some turtles are brought here after being injured by fishing gear or boat accidents. They are treated and cared for until they recover.'
          }
        ],
        endText: 'Visitors can also learn how conservation teams protect turtle eggs collected from nearby beaches.'
      },
      {
        type: 'section',
        title: 'Best Way to Visit From Ahangama',
        content: 'The Sea Turtle Conservation Center is located only a short 15–20 minute ride from Ahangama. The best and easiest way to reach it is by renting a scooter.\n\nWith your own scooter you can:'
      },
      {
        type: 'list',
        items: [
          'Explore hidden beaches',
          'Visit wildlife spots',
          'Stop at cafes along the coast',
          'Discover local villages and scenic roads'
        ],
        endText: 'Many travelers prefer scooters because they offer freedom and flexibility to explore the south coast at their own pace.'
      },
      {
        type: 'section',
        title: 'Explore More Hidden Places Around Ahangama',
        content: 'The south coast is full of beautiful locations waiting to be discovered. While visiting the Sea Turtle Conservation Center, you can also explore nearby attractions such as:'
      },
      {
        type: 'list',
        items: [
          'Secret Beach in Ahangama',
          'Surfing spots along the coast',
          'Beautiful sunset viewpoints',
          'Local cafes and beach restaurants'
        ],
        endText: 'Having a scooter makes it easy to visit several places in one day.'
      },
      {
        type: 'section',
        title: 'Rent a Scooter and Start Your South Road Trip',
        content: 'If you want to explore amazing places like the Sea Turtle Conservation Center and many other hidden gems along the south coast, renting a scooter is the perfect choice.\n\nWith South Road Trips scooter rentals, you can travel freely and enjoy Sri Lanka\'s coastal beauty without any hassle. Get your scooter today and start exploring!'
      },
      {
        type: 'video',
        src: turtleVideo
      },
      {
        type: 'cta'
      }
    ]
  },

  'hidden-beaches': {
    id: 'hidden-beaches',
    title: 'Hidden Gems: Secret Beaches of Sri Lanka',
    excerpt: 'Discover the most beautiful and secluded beaches that only locals know about. From pristine white sands to crystal clear waters...',
    date: 'March 12, 2025',
    author: 'Sarah Johnson',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
    readTime: '5 min read',
    content: [
      {
        type: 'intro',
        text: 'Sri Lanka boasts some of the world\'s most stunning and secluded beaches. While many travelers flock to popular spots, we\'ve discovered hidden gems that offer pristine white sands, crystal clear waters, and an authentic Sri Lankan beach experience. Here are our top secret beaches that deserve a place on your road trip itinerary.'
      },
      {
        type: 'section',
        title: 'Why Explore Hidden Beaches?',
        content: 'Hidden beaches offer a unique experience away from the crowds. You\'ll find authentic local culture, untouched natural beauty, and the chance to swim in pristine waters. Each beach has its own character and charm, making them perfect for photography, swimming, or simply relaxing.'
      },
      {
        type: 'highlight-list',
        items: [
          {
            title: 'Talalla Beach',
            desc: 'A quiet crescent bay with golden sand and clear turquoise waters, perfect for swimming and watching dolphins at sunset.'
          },
          {
            title: 'Polhena Beach',
            desc: 'A protected lagoon with calm waters, ideal for snorkeling and spotting colorful tropical fish.'
          },
          {
            title: 'Unawatuna Beach',
            desc: 'A picturesque palm-fringed beach with underwater coral formations and vibrant marine life.'
          }
        ],
        endText: 'Each of these beaches is accessible by scooter rental and offers something special that you won\'t find in guidebooks.'
      },
      {
        type: 'section',
        title: 'Best Time to Visit',
        content: 'The south coast is best visited during the dry season from December to April. During this period, you\'ll enjoy sunny days, calm seas, and perfect conditions for beach activities. Pro tip: Visit early in the morning to avoid crowds and capture stunning sunrise photos.'
      },
      {
        type: 'list',
        items: [
          'Pack sunscreen and UV protection',
          'Bring a waterproof camera or smartphone case',
          'Wear water shoes for rocky areas',
          'Carry plenty of water and snacks',
          'Respect local customs and the environment'
        ],
        endText: 'A scooter makes it easy to visit multiple beaches in one day and discover new spots.'
      },
      {
        type: 'section',
        title: 'Photography Tips for Beach Lovers',
        content: 'These hidden beaches are a photographer\'s paradise. The golden hour (sunrise and sunset) provides the best light for capturing the beauty of these untouched landscapes. Long exposure photography can create stunning images of the waves, while macro photography allows you to capture the intricate details of shells and coral.'
      },
      {
        type: 'cta'
      }
    ]
  },

  'wildlife-photography': {
    id: 'wildlife-photography',
    title: 'Wildlife Photography Guide: Capturing Leopards in Yala',
    excerpt: 'Professional tips on how to photograph elusive leopards and other wildlife in Sri Lanka\'s most famous national park...',
    date: 'March 5, 2025',
    author: 'Michael Chen',
    category: 'Photography',
    image: leapardIMG,
    readTime: '7 min read',
    content: [
      {
        type: 'intro',
        text: 'Yala National Park is home to one of the highest concentrations of leopards in the world. A safari here offers incredible opportunities for wildlife photography, but capturing these elusive big cats requires planning, patience, and the right techniques. In this guide, we\'ll share professional tips from experienced wildlife photographers.'
      },
      {
        type: 'section',
        title: 'Essential Camera Settings for Wildlife',
        content: 'To capture wildlife effectively, you need to understand your camera\'s capabilities. Fast shutter speeds are crucial to freeze motion, while appropriate apertures help you achieve the right depth of field and lighting. Learn the settings that professional wildlife photographers use when photographing predators in action.'
      },
      {
        type: 'list',
        items: [
          'Use aperture priority mode (f/5.6-f/8) for maximum depth of field',
          'Set shutter speed to minimum 1/1000s for moving subjects',
          'Use ISO 800-3200 depending on light conditions',
          'Enable continuous autofocus tracking',
          'Use burst mode to capture multiple frames per second'
        ],
        endText: 'These settings will help you capture sharp, well-exposed images of wildlife in their natural habitat.'
      },
      {
        type: 'highlight-list',
        items: [
          {
            title: 'Preparing Your Gear',
            desc: 'Invest in a quality telephoto lens (200-400mm), weather-sealed camera body, and multiple memory cards. Bring protective bags and cleaning kits for dust protection during safaris.'
          },
          {
            title: 'Timing and Patience',
            desc: 'Leopards are most active during early morning and late afternoon. Plan your safari drives during these golden hours for the best sightings and photography light.'
          },
          {
            title: 'Composition Techniques',
            desc: 'Use rule of thirds, leading lines, and negative space. Capture animals in their environment, not just close-ups. Include behavioral shots that tell a story.'
          }
        ],
        endText: 'Great wildlife photography combines technical knowledge with artistic vision and patience.'
      },
      {
        type: 'cta'
      }
    ]
  },

  'best-time-visit': {
    id: 'best-time-visit',
    title: 'Best Time to Visit: Seasons in Sri Lanka',
    excerpt: 'A comprehensive guide to understanding Sri Lankan weather patterns and choosing the perfect time for your road trip adventure...',
    date: 'February 28, 2025',
    author: 'Emma Rodriguez',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop',
    readTime: '6 min read',
    content: [
      {
        type: 'intro',
        text: 'Sri Lanka\'s tropical climate means the island has diverse weather patterns throughout the year. Understanding the monsoons and seasons will help you plan your perfect road trip. Let\'s explore what to expect in each season and which time is best for your South Road Trips adventure.'
      },
      {
        type: 'section',
        title: 'The Four Seasons Explained',
        content: 'Sri Lanka experiences two monsoon seasons and two inter-monsoon periods. The Southwest Monsoon (May-September) and Northeast Monsoon (December-February) significantly impact weather patterns across the island. The south and west coasts have different patterns than the north and east coasts.'
      },
      {
        type: 'highlight-list',
        items: [
          {
            title: 'Dry Season (December-April)',
            desc: 'Perfect for the south coast. Sunny days, minimal rainfall, calm seas, and excellent visibility. This is the peak season for tourism and the best time for beach activities and wildlife safaris.'
          },
          {
            title: 'Southwest Monsoon (May-September)',
            desc: 'Brings strong winds and heavy rains to the west and southwest coasts. While challenging for beach activities, this season offers lush landscapes and fewer tourists. Best for experiencing authentic Sri Lanka.'
          },
          {
            title: 'Shoulder Seasons (March-April, October-November)',
            desc: 'Transitional periods with mixed weather. Can be excellent for travel with fewer crowds and better prices. September-October is particularly good for adventurous travelers.'
          }
        ],
        endText: 'The dry season is ideal for most travelers, but off-season visits have their own charm and advantages.'
      },
      {
        type: 'section',
        title: 'What to Pack for Different Seasons',
        content: 'Your packing list will vary depending on when you visit. During dry season, focus on sun protection and light clothing. During monsoon season, prepare for heavy rains with waterproof gear. Regardless of season, certain items are always essential for an enjoyable road trip.'
      },
      {
        type: 'list',
        items: [
          'High SPF sunscreen (50+)',
          'Lightweight, breathable clothing',
          'Quick-dry clothes and towels',
          'Waterproof bag for electronics',
          'Hat or cap for sun protection',
          'Insect repellent',
          'Rain jacket or poncho'
        ],
        endText: 'Proper preparation ensures you\'re comfortable and safe regardless of when you visit.'
      },
      {
        type: 'cta'
      }
    ]
  },

  'local-cuisine': {
    id: 'local-cuisine',
    title: 'Local Cuisine You Must Try on Your Sri Lankan Road Trip',
    excerpt: 'Explore the authentic flavors of Sri Lanka. From street food to traditional curries, here are the must-try dishes...',
    date: 'February 21, 2025',
    author: 'Dev Patel',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&h=600&fit=crop',
    readTime: '5 min read',
    content: [
      {
        type: 'intro',
        text: 'Sri Lankan cuisine is a vibrant blend of spices, coconut, and fresh ingredients. A road trip along the south coast provides the perfect opportunity to experience authentic local food, from bustling street markets to family-run restaurants. Here are the must-try dishes that will make your culinary journey unforgettable.'
      },
      {
        type: 'section',
        title: 'Street Food Delights',
        content: 'The streets of Sri Lanka are alive with the aroma of spiced food and fresh preparations. Street food offers an authentic taste of local life and is often incredibly affordable. Here are some popular street food items you absolutely must try.'
      },
      {
        type: 'highlight-list',
        items: [
          {
            title: 'Kottu Roti',
            desc: 'Chopped flatbread mixed with curry, vegetables, and meat. This energetic street food is prepared right in front of you with rhythmic chopping sounds.'
          },
          {
            title: 'Hoppers',
            desc: 'Bowl-shaped pancakes made with rice flour and coconut milk, often topped with curry or egg. A breakfast favorite that\'s both delicious and affordable.'
          },
          {
            title: 'Lamprais',
            desc: 'A unique Portuguese-influenced dish of rice, meat, and spices baked inside banana leaves. A true Lankan favorite.'
          }
        ],
        endText: 'Street food is not just about the food; it\'s about experiencing local culture and connecting with people.'
      },
      {
        type: 'section',
        title: 'Traditional Curries and Rice',
        content: 'No Sri Lankan meal is complete without curry. The island has perfected the art of balancing heat, flavor, and authenticity. From fish curries using fresh local catch to vegetable curries bursting with spices, each dish tells a story of Sri Lankan tradition.'
      },
      {
        type: 'list',
        items: [
          'Fish Curry - made with fresh local catch and coconut milk',
          'Chicken Curry - tender meat in fragrant spice blend',
          'Vegetable Curry - seasonal vegetables in creamy sauce',
          'Dhal Curry - lentil-based protein-rich dish',
          'Sambols - spicy coconut and chili condiments'
        ],
        endText: 'Ask locals for their favorite curry spots - they always know the best places to eat authentic food.'
      },
      {
        type: 'cta'
      }
    ]
  },

  'road-trip-safety': {
    id: 'road-trip-safety',
    title: 'Road Trip Safety: Essential Tips for Driving in Sri Lanka',
    excerpt: 'Everything you need to know about road conditions, vehicle requirements, and safety protocols for a secure journey...',
    date: 'February 14, 2025',
    author: 'James Wilson',
    category: 'Safety',
    image: srilankanroadsIMG,
    readTime: '8 min read',
    content: [
      {
        type: 'intro',
        text: 'Renting a scooter for your Sri Lankan road trip is exciting and liberating, but safety should always be your top priority. Understanding local driving conditions, practicing defensive driving, and following safety protocols will ensure you have a secure and enjoyable adventure. Here\'s everything you need to know.'
      },
      {
        type: 'section',
        title: 'Understanding Local Road Conditions',
        content: 'Sri Lankan roads vary significantly in quality and traffic patterns. From well-maintained highways to narrow village roads, each presents unique challenges. The south coast roads are generally good, but they can be busy during peak season. Understanding these conditions helps you ride defensively and confidently.'
      },
      {
        type: 'list',
        items: [
          'Main roads are generally well-maintained but can be narrow',
          'Expect three-wheel taxis (tuk-tuks) and buses in traffic',
          'Livestock and pedestrians often share the road',
          'Potholes and broken road surfaces are common in some areas',
          'Traffic flows on the left side of the road (British legacy)'
        ],
        endText: 'Adapt your speed and awareness to conditions. Slow down in villages and be extra cautious at night.'
      },
      {
        type: 'highlight-list',
        items: [
          {
            title: 'Essential Safety Gear',
            desc: 'Always wear an approved helmet, protective clothing, and closed-toe shoes. Use reflective gear for visibility, especially during low-light conditions.'
          },
          {
            title: 'Vehicle Checks',
            desc: 'Inspect your scooter before each ride. Check tires, brakes, lights, and fuel. Ensure mirrors are properly adjusted for maximum visibility.'
          },
          {
            title: 'Defensive Riding Techniques',
            desc: 'Assume vehicles and pedestrians may act unpredictably. Maintain safe following distances, use turn signals consistently, and avoid riding at night when possible.'
          }
        ],
        endText: 'Your safety is our priority. South Road Trips provides well-maintained vehicles and safety equipment.'
      },
      {
        type: 'section',
        title: 'Insurance and Legal Requirements',
        content: 'Before renting a scooter, understand the insurance requirements and legal obligations. Most rental companies require proof of international driving permit or a valid motorcycle license. Insurance is typically included in the rental package, but verify coverage details.'
      },
      {
        type: 'cta'
      }
    ]
  },

  'adventure-activities': {
    id: 'adventure-activities',
    title: 'Adventure Activities Beyond the Standard Tours',
    excerpt: 'Looking for adrenaline? Discover rock climbing, surfing, hiking, and other exciting activities throughout Sri Lanka...',
    date: 'February 7, 2025',
    author: 'Alex Thompson',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    readTime: '6 min read',
    content: [
      {
        type: 'intro',
        text: 'Sri Lanka isn\'t just about relaxing on beaches and visiting temples. For thrill-seekers and adventure enthusiasts, the island offers incredible opportunities for rock climbing, surfing, paragliding, and more. Discover adrenaline-pumping activities that will make your road trip utterly unforgettable.'
      },
      {
        type: 'section',
        title: 'Water Sports Paradise',
        content: 'The south coast is a hotspot for water sports enthusiasts. From world-class surfing breaks to pristine diving sites, there\'s something for every water lover. Many activities are accessible near your road trip route.'
      },
      {
        type: 'highlight-list',
        items: [
          {
            title: 'Surfing',
            desc: 'The south coast has excellent surf breaks suitable for beginners and experts. Dikwella, Arugam Bay, and Mirissa are popular spots with local instructors available.'
          },
          {
            title: 'Scuba Diving & Snorkeling',
            desc: 'Explore underwater coral gardens and tropical fish. Multiple dive sites offer opportunities to see turtles, rays, and even reef sharks.'
          },
          {
            title: 'Whale Watching & Dolphin Tours',
            desc: 'During season (November-April), boat tours offer chances to see blue whales and spinner dolphins in their natural habitat.'
          }
        ],
        endText: 'Always use licensed operators and follow safety guidelines for water sports.'
      },
      {
        type: 'section',
        title: 'Land-Based Adventures',
        content: 'Beyond the water, Sri Lanka offers exciting terrestrial adventures. Hiking through tea plantations, rock climbing, and jungle treks provide different ways to experience the island\'s natural beauty.'
      },
      {
        type: 'list',
        items: [
          'Hiking Ella Rock for 360-degree hill country views',
          'Rock climbing at Railwaya Rocks near Ella',
          'Jungle trekking in Yala National Park',
          'Canyoning in Kitulgala',
          'Paragliding near Ella for breathtaking aerial views'
        ],
        endText: 'Combine multiple activities during your road trip for a complete adventure experience.'
      },
      {
        type: 'cta'
      }
    ]
  }
};

export const blogPostPreviews: BlogPostPreview[] = [
  blogArticles['sea-turtle'],
  blogArticles['hidden-beaches'],
  blogArticles['wildlife-photography'],
  blogArticles['best-time-visit'],
  blogArticles['local-cuisine'],
  blogArticles['road-trip-safety'],
  blogArticles['adventure-activities']
];
