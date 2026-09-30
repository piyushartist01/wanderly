// ===== WANDERLY MOCK DATA =====

const destinations = [
  {
    id: 'd1', slug: 'kedarkantha', name: 'Kedarkantha', region: 'Uttarakhand', country: 'India',
    tagline: 'Where Mountains Kiss the Sky',
    description: 'Kedarkantha is a crown jewel of winter treks in India. At 12,500 feet, this Himalayan summit offers a rare combination — achievable for beginners yet breathtaking enough to humble seasoned trekkers. Snow-blanketed trails wind through ancient oak and pine forests, past frozen streams and shepherds\' meadows, leading to a summit that rewards you with a 360° panorama of Swargarohini, Bandarpoonch, and Black Peak.',
    difficulty: 'Moderate', rating: 4.9, reviewCount: 234, priceFrom: 8999,
    bestMonths: [11, 12, 1, 2, 3, 4],
    highlights: ['Summit at 12,500 ft with 360° Himalayan views', 'Snow camping under star-lit skies', 'Ancient oak & pine forest trails', 'Shepherds\' meadows at Juda Ka Talab', 'Beginner-friendly winter trek'],
    activities: ['Trekking', 'Camping', 'Nature & Wildlife'],
    artPalette: { type: 'mountain', sky: ['#1a2a3a', '#2d4a5c', '#4a7a8f'], mountains: ['#5a7a6a', '#7a9a8a', '#9ab0a0'], ground: '#dce9da', accent: '#D9694A', sun: '#F2A03D', timeOfDay: 'dawn' }
  },
  {
    id: 'd2', slug: 'jaisalmer', name: 'Jaisalmer', region: 'Rajasthan', country: 'India',
    tagline: 'Golden City of the Thar',
    description: 'Rising from the Thar Desert like a golden mirage, Jaisalmer is a city carved from honey-coloured sandstone. The massive Jaisalmer Fort — one of the few "living forts" in the world — still houses shops, restaurants, and families within its ancient walls. Beyond the city, the Sam Sand Dunes stretch endlessly, offering camel safaris at sunset and nights under a canopy of stars so dense it feels unreal.',
    difficulty: 'Easy', rating: 4.7, reviewCount: 189, priceFrom: 6999,
    bestMonths: [10, 11, 12, 1, 2, 3],
    highlights: ['Camel safari across Sam Sand Dunes', 'Stay in a luxury desert camp', 'Jaisalmer Fort — a living fortress', 'Sunset at Kuldhara ghost village', 'Traditional Rajasthani feast under stars'],
    activities: ['Desert Trips', 'Cultural'],
    artPalette: { type: 'desert', sky: ['#f5c77e', '#e8a84c', '#d4893a'], mountains: ['#d4a574', '#c8956a', '#bc8560'], ground: '#e8c8a0', accent: '#D9694A', sun: '#F2A03D', timeOfDay: 'sunset' }
  },
  {
    id: 'd3', slug: 'jaipur', name: 'Jaipur', region: 'Rajasthan', country: 'India',
    tagline: 'The Pink City of Palaces',
    description: 'Jaipur is where royal history meets vibrant street life. Every corner tells a story — from the mathematical precision of Jantar Mantar to the honeycomb facade of Hawa Mahal. The City Palace still houses the royal family, and the hilltop Amber Fort commands views over the Aravalli Hills. At night, the bazaars of Johari and Bapu come alive with jewellers, textile merchants, and the aroma of dal baati churma.',
    difficulty: 'Easy', rating: 4.8, reviewCount: 156, priceFrom: 12999,
    bestMonths: [10, 11, 12, 1, 2, 3],
    highlights: ['Amber Fort sunrise tour', 'City Palace museum & royal quarters', 'Hawa Mahal & Jantar Mantar', 'Shopping in Johari Bazaar', 'Elephant village visit'],
    activities: ['Cultural'],
    artPalette: { type: 'cultural', sky: ['#d4a0a0', '#c88080', '#bc6060'], mountains: ['#b87070', '#a85050', '#c87070'], ground: '#f0d0d0', accent: '#D9694A', sun: '#F2A03D', timeOfDay: 'golden' }
  },
  {
    id: 'd4', slug: 'rishikesh', name: 'Rishikesh', region: 'Uttarakhand', country: 'India',
    tagline: 'Adventure Capital of India',
    description: 'Nestled in the foothills of the Himalayas where the Ganges flows swift and green, Rishikesh is India\'s undisputed adventure capital. It\'s where you can go white-water rafting through Grade III-IV rapids in the morning, cliff jump at sunset, and find inner peace at an ashram by nightfall. The town straddles the sacred and the adrenaline-fueled with effortless grace.',
    difficulty: 'Moderate', rating: 4.6, reviewCount: 312, priceFrom: 4999,
    bestMonths: [2, 3, 4, 5, 9, 10, 11],
    highlights: ['White-water rafting on the Ganges', 'Bungee jumping at Jumpin Heights', 'Cliff jumping at Shivpuri', 'Ganga Aarti at Triveni Ghat', 'Camping by the riverside'],
    activities: ['Water Adventures', 'Trekking', 'Nature & Wildlife'],
    artPalette: { type: 'forest', sky: ['#2a4a3a', '#3a5a4a', '#4a7a5a'], mountains: ['#3a6a4a', '#4a8a5a', '#5aaa6a'], ground: '#dce9da', accent: '#1F7A8C', sun: '#F2A03D', timeOfDay: 'morning' }
  },
  {
    id: 'd5', slug: 'ladakh', name: 'Ladakh', region: 'Jammu & Kashmir', country: 'India',
    tagline: 'The Land of High Passes',
    description: 'Ladakh isn\'t just a destination — it\'s a rite of passage. This high-altitude desert, framed by the Karakoram and Himalayan ranges, is where the earth feels closest to the sky. Ride through Khardung La, one of the world\'s highest motorable passes. Watch the "magnetic hill" illusion defy gravity. Camp beside the impossibly blue Pangong Tso. Ladakh strips away the noise of modern life and replaces it with raw, humbling beauty.',
    difficulty: 'Challenging', rating: 4.9, reviewCount: 178, priceFrom: 24999,
    bestMonths: [5, 6, 7, 8, 9],
    highlights: ['Khardung La Pass — 17,982 ft', 'Pangong Tso — the infinite blue lake', 'Nubra Valley & Hunder Sand Dunes', 'Thiksey Monastery sunrise', 'Magnetic Hill & Confluence of rivers'],
    activities: ['Cycling', 'Trekking', 'Nature & Wildlife'],
    artPalette: { type: 'mountain', sky: ['#1a2a4a', '#3a5a7a', '#5a8aaa'], mountains: ['#8a7a6a', '#a09080', '#b8a898'], ground: '#d0c8b8', accent: '#1F7A8C', sun: '#F2A03D', timeOfDay: 'day' }
  },
  {
    id: 'd6', slug: 'goa', name: 'Goa', region: 'Goa', country: 'India',
    tagline: 'Sun, Sand & Soul of the Coast',
    description: 'Goa is India\'s pocket-sized paradise — where golden beaches meet Portuguese-era charm, spice plantations scent the air, and every sunset feels like a celebration. Whether you\'re dancing at a beachside club in North Goa or finding solitude in the palm-fringed coves of the south, Goa wraps you in a warm, salty embrace.',
    difficulty: 'Easy', rating: 4.5, reviewCount: 623, priceFrom: 9999,
    bestMonths: [11, 12, 1, 2, 3],
    highlights: ['Sunset at Palolem Beach crescent', 'Old Goa\'s UNESCO churches', 'Dudhsagar waterfall trek', 'Spice plantation tour and lunch', 'Night market at Arpora'],
    activities: ['Beach', 'Water Adventures', 'Nature & Wildlife'],
    artPalette: { type: 'beach', sky: ['#2a5a4a', '#3a7a5a', '#4a9a6a'], mountains: ['#3a6a4a', '#5a8a5a', '#6aaa6a'], ground: '#f0e8d0', accent: '#D9694A', sun: '#F2A03D', timeOfDay: 'sunset' }
  },
  {
    id: 'd7', slug: 'andaman', name: 'Andaman Islands', region: 'Andaman & Nicobar', country: 'India',
    tagline: 'Turquoise Waters & Untouched Shores',
    description: 'The Andaman Islands are India\'s best-kept tropical secret. Crystal-clear waters reveal coral gardens teeming with marine life. Pristine white-sand beaches stretch empty for miles. The islands offer world-class scuba diving, kayaking through mangrove creeks, and a poignant history at the Cellular Jail.',
    difficulty: 'Easy', rating: 4.7, reviewCount: 145, priceFrom: 19999,
    bestMonths: [10, 11, 12, 1, 2, 3, 4, 5],
    highlights: ['Scuba diving at Havelock Island', 'Radhanagar Beach — Asia\'s best', 'Sea walking at North Bay', 'Cellular Jail light & sound show', 'Kayaking through mangrove creeks'],
    activities: ['Beach', 'Water Adventures'],
    artPalette: { type: 'beach', sky: ['#1a4a6a', '#2a6a8a', '#4a8aaa'], mountains: ['#2a5a3a', '#3a7a4a', '#5a9a5a'], ground: '#f5f0e0', accent: '#1F7A8C', sun: '#F2A03D', timeOfDay: 'day' }
  },
  {
    id: 'd8', slug: 'munnar', name: 'Munnar', region: 'Kerala', country: 'India',
    tagline: 'God\'s Own Tea Garden',
    description: 'Munnar is where India\'s Western Ghats unfold in rolling carpets of emerald tea plantations. At 1,600 metres, this hill station in Kerala offers a cooler, greener world — misty mornings, winding roads through cardamom estates, and wildlife sanctuaries where you might spot the endangered Nilgiri Tahr.',
    difficulty: 'Easy', rating: 4.6, reviewCount: 198, priceFrom: 11999,
    bestMonths: [9, 10, 11, 12, 1, 2, 3, 4, 5],
    highlights: ['Tea plantation walk & tasting', 'Eravikulam National Park', 'Mattupetty Dam & Echo Point', 'Neelakurinji blooms (seasonal)', 'Spice garden tour'],
    activities: ['Nature & Wildlife', 'Cultural'],
    artPalette: { type: 'forest', sky: ['#2a4a3a', '#3a6a4a', '#5a8a5a'], mountains: ['#3a7a4a', '#4a8a5a', '#5aaa6a'], ground: '#dce9da', accent: '#1F7A8C', sun: '#F2A03D', timeOfDay: 'morning' }
  }
];

const packages = [
  {
    id: 'p1', slug: 'kedarkantha-summit-trek', title: 'Kedarkantha Summit Trek', subtitle: 'Conquer the snow-clad peak at 12,500 ft',
    destinationId: 'd1', category: 'Trekking', difficulty: 'Moderate',
    days: 5, nights: 4, price: 8999, originalPrice: 11999, pricePerDay: 1800,
    rating: 4.9, reviewCount: 234, bestSeller: true, freeCancellation: true,
    groupSize: { min: 4, max: 20 },
    tags: ['Winter Trek', 'Summit', 'Snow', 'Beginner Friendly'],
    priceBreakdown: { accommodation: 3000, transport: 2000, meals: 1500, guide: 1500, permits: 500, tax: 499 },
    inclusions: ['All meals from Day 1 dinner to Day 5 breakfast', 'Professional certified trek leader & support staff', 'Quality camping gear (tents, sleeping bags, mats)', 'First aid kit & oxygen cylinder', 'All forest permits and fees', 'Transport from Dehradun to basecamp and back'],
    exclusions: ['Travel to/from Dehradun', 'Personal trekking gear (shoes, backpack, thermals)', 'Travel insurance', 'Tips and personal expenses', 'Any meals not mentioned'],
    itinerary: [
      { day: 1, title: 'Dehradun to Sankri Basecamp', description: 'Drive through scenic Mussoorie and Purola. Arrive at Sankri village, your basecamp at 6,400 ft. Evening briefing, gear check, and acclimatization walk.', meals: ['Dinner'], stay: 'Guesthouse', elevation: '6,400 ft', distance: '220 km drive' },
      { day: 2, title: 'Sankri to Juda Ka Talab', description: 'Trek through dense oak and pine forests. The trail is gentle but gains altitude steadily. Reach the magical Juda Ka Talab — a frozen lake surrounded by silver birch trees.', meals: ['Breakfast', 'Lunch', 'Dinner'], stay: 'Tent Camp', elevation: '9,100 ft', distance: '4 km trek' },
      { day: 3, title: 'Juda Ka Talab to Kedarkantha Base', description: 'A shorter trek through open meadows with panoramic Himalayan views. Set up camp at the base of the summit. Evening bonfire and star-gazing session.', meals: ['Breakfast', 'Lunch', 'Dinner'], stay: 'Tent Camp', elevation: '11,250 ft', distance: '3 km trek' },
      { day: 4, title: 'Summit Day & Return to Sankri', description: 'Pre-dawn start for the summit push. Watch the sunrise illuminate the Himalayan peaks from 12,500 ft. Descend all the way back to Sankri. Celebration dinner!', meals: ['Breakfast', 'Packed Lunch', 'Dinner'], stay: 'Guesthouse', elevation: '12,500 ft summit', distance: '12 km trek' },
      { day: 5, title: 'Sankri to Dehradun', description: 'Morning departure. Drive back to Dehradun with memories of a lifetime. Trip ends by afternoon.', meals: ['Breakfast'], stay: 'N/A', distance: '220 km drive' }
    ],
    departures: [
      { date: '2026-11-15', price: 8999, spotsLeft: 8, status: 'filling' },
      { date: '2026-12-01', price: 9499, spotsLeft: 14, status: 'available' },
      { date: '2026-12-20', price: 10999, spotsLeft: 4, status: 'filling' },
      { date: '2027-01-10', price: 9999, spotsLeft: 16, status: 'available' }
    ]
  },
  {
    id: 'p2', slug: 'jaisalmer-desert-safari', title: 'Jaisalmer Desert Safari', subtitle: 'Camel rides, dune sunsets & starlit camps',
    destinationId: 'd2', category: 'Desert Trips', difficulty: 'Easy',
    days: 2, nights: 1, price: 6999, pricePerDay: 3500,
    rating: 4.7, reviewCount: 189, bestSeller: false, freeCancellation: true,
    groupSize: { min: 2, max: 12 },
    tags: ['Desert', 'Safari', 'Stargazing', 'Cultural'],
    priceBreakdown: { accommodation: 2500, transport: 1500, meals: 1200, activities: 1300, tax: 499 },
    inclusions: ['Luxury desert camp stay', 'Camel safari at sunset', 'All meals', 'Cultural performance & bonfire', 'Jeep safari to Sam Dunes', 'Pick-up from Jaisalmer station/hotel'],
    exclusions: ['Travel to Jaisalmer', 'Personal expenses', 'Travel insurance'],
    itinerary: [
      { day: 1, title: 'Jaisalmer to Desert Camp', description: 'Afternoon pick-up. Drive to Sam Sand Dunes for a spectacular camel safari at sunset. Arrive at the luxury desert camp for a traditional Rajasthani dinner under the stars with folk music and dance.', meals: ['Dinner'], stay: 'Desert Camp', distance: '40 km drive' },
      { day: 2, title: 'Sunrise & Return', description: 'Early morning dune walk for sunrise. Breakfast at camp. Optional jeep safari. Return to Jaisalmer by noon.', meals: ['Breakfast'], stay: 'N/A', distance: '40 km drive' }
    ],
    departures: [
      { date: '2026-10-20', price: 6999, spotsLeft: 6, status: 'filling' },
      { date: '2026-11-05', price: 7499, spotsLeft: 10, status: 'available' },
      { date: '2026-12-25', price: 8999, spotsLeft: 3, status: 'filling' }
    ]
  },
  {
    id: 'p3', slug: 'jaipur-royal-heritage-tour', title: 'Jaipur Royal Heritage Tour', subtitle: 'Palaces, forts & the art of Rajput grandeur',
    destinationId: 'd3', category: 'Cultural', difficulty: 'Easy',
    days: 3, nights: 2, price: 12999, originalPrice: 15999, pricePerDay: 4333,
    rating: 4.8, reviewCount: 156, bestSeller: false, freeCancellation: true,
    groupSize: { min: 2, max: 15 },
    tags: ['Heritage', 'Palace', 'History', 'Food Tour'],
    priceBreakdown: { accommodation: 5000, transport: 2500, meals: 2500, guide: 2000, tax: 999 },
    inclusions: ['Heritage hotel stay', 'Expert historian guide', 'All monument entry fees', 'All meals including food walk', 'AC transport throughout', 'Elephant village visit'],
    exclusions: ['Travel to/from Jaipur', 'Shopping expenses', 'Travel insurance'],
    itinerary: [
      { day: 1, title: 'Arrival & City Exploration', description: 'Hotel check-in. Afternoon visit to Hawa Mahal, Jantar Mantar, and City Palace. Evening food walk through the old city bazaars.', meals: ['Dinner'], stay: 'Heritage Hotel', distance: 'City tour' },
      { day: 2, title: 'Amber Fort & Outskirts', description: 'Sunrise visit to Amber Fort. Explore the Step Well (Panna Meena Ka Kund). Afternoon at Jal Mahal and Nahargarh Fort for sunset views. Evening cultural show.', meals: ['Breakfast', 'Lunch', 'Dinner'], stay: 'Heritage Hotel', distance: '30 km drive' },
      { day: 3, title: 'Elephant Village & Departure', description: 'Morning visit to the Elephant Village for an ethical interaction. Last-minute shopping at Johari Bazaar. Trip ends by afternoon.', meals: ['Breakfast', 'Lunch'], stay: 'N/A' }
    ],
    departures: [
      { date: '2026-10-15', price: 12999, spotsLeft: 10, status: 'available' },
      { date: '2026-11-20', price: 13999, spotsLeft: 7, status: 'filling' }
    ]
  },
  {
    id: 'p4', slug: 'rishikesh-adventure-weekend', title: 'Rishikesh Adventure Weekend', subtitle: 'Raft, jump & camp by the holy Ganges',
    destinationId: 'd4', category: 'Water Adventures', difficulty: 'Moderate',
    days: 2, nights: 1, price: 4999, pricePerDay: 2500,
    rating: 4.6, reviewCount: 312, bestSeller: false, freeCancellation: true,
    groupSize: { min: 4, max: 25 },
    tags: ['Rafting', 'Camping', 'Bungee', 'Weekend'],
    priceBreakdown: { accommodation: 1200, transport: 800, meals: 800, activities: 1800, tax: 399 },
    inclusions: ['Riverside camp stay', 'White-water rafting (16 km)', 'All meals', 'Bonfire & music', 'All safety equipment', 'Transport within Rishikesh'],
    exclusions: ['Travel to Rishikesh', 'Bungee jumping (extra)', 'Personal expenses'],
    itinerary: [
      { day: 1, title: 'Arrival & Rafting', description: 'Arrive by noon. 16 km white-water rafting through Grade III-IV rapids. Evening camp setup by the Ganges with bonfire and music.', meals: ['Lunch', 'Dinner'], stay: 'Riverside Camp', distance: '16 km rafting' },
      { day: 2, title: 'Activities & Departure', description: 'Morning cliff jumping and body surfing. Optional bungee jump. Visit Triveni Ghat for the Ganga Aarti. Depart by evening.', meals: ['Breakfast', 'Lunch'], stay: 'N/A' }
    ],
    departures: [
      { date: '2026-10-05', price: 4999, spotsLeft: 12, status: 'available' },
      { date: '2026-10-12', price: 4999, spotsLeft: 5, status: 'filling' },
      { date: '2026-11-02', price: 5499, spotsLeft: 20, status: 'available' }
    ]
  },
  {
    id: 'p5', slug: 'leh-ladakh-road-trip', title: 'Leh-Ladakh Road Trip', subtitle: 'High passes, blue lakes & moonland drives',
    destinationId: 'd5', category: 'Cycling', difficulty: 'Challenging',
    days: 7, nights: 6, price: 24999, originalPrice: 29999, pricePerDay: 3571,
    rating: 4.9, reviewCount: 178, bestSeller: true, freeCancellation: true,
    groupSize: { min: 4, max: 12 },
    tags: ['Road Trip', 'High Altitude', 'Lake', 'Adventure'],
    priceBreakdown: { accommodation: 8000, transport: 7000, meals: 4500, guide: 3000, permits: 1500, tax: 999 },
    inclusions: ['All accommodation', 'Innova/Tempo Traveller throughout', 'All meals', 'Inner Line Permits', 'Experienced driver-guide', 'Oxygen cylinder & first aid', 'All monastery/park entry fees'],
    exclusions: ['Flights to/from Leh', 'Personal gear', 'Travel insurance (mandatory)', 'Tips', 'Bike rental (optional)'],
    itinerary: [
      { day: 1, title: 'Arrival in Leh', description: 'Arrive at Kushok Bakula Airport. Rest and acclimatize. Evening walk to Leh Market and Shanti Stupa for sunset.', meals: ['Dinner'], stay: 'Hotel', elevation: '11,500 ft' },
      { day: 2, title: 'Leh Local Sightseeing', description: 'Visit Thiksey Monastery, Hemis Monastery, and Shey Palace. Afternoon at Hall of Fame and Magnetic Hill. Confluence of Indus & Zanskar rivers.', meals: ['Breakfast', 'Lunch', 'Dinner'], stay: 'Hotel', distance: '80 km drive' },
      { day: 3, title: 'Leh to Nubra Valley', description: 'Cross Khardung La (17,982 ft). Descend into Nubra Valley. Camel ride on Hunder sand dunes. Evening at campsite.', meals: ['Breakfast', 'Lunch', 'Dinner'], stay: 'Camp', elevation: '17,982 ft', distance: '120 km drive' },
      { day: 4, title: 'Nubra to Pangong Tso', description: 'Drive through Shyok route to Pangong Tso. Watch the lake change colours through the day. Overnight by the lake.', meals: ['Breakfast', 'Lunch', 'Dinner'], stay: 'Camp', elevation: '14,270 ft', distance: '150 km drive' },
      { day: 5, title: 'Pangong to Leh', description: 'Sunrise at Pangong. Drive back to Leh via Chang La (17,586 ft). Evening free for shopping and rest.', meals: ['Breakfast', 'Lunch', 'Dinner'], stay: 'Hotel', distance: '160 km drive' },
      { day: 6, title: 'Leh Free Day / Optional Bike Ride', description: 'Free day for optional activities — rent a Royal Enfield for a Khardung La ride, visit local cafes, or explore Leh\'s hidden lanes. Farewell dinner.', meals: ['Breakfast', 'Dinner'], stay: 'Hotel' },
      { day: 7, title: 'Departure', description: 'Transfer to airport. Trip ends with memories of a lifetime.', meals: ['Breakfast'], stay: 'N/A' }
    ],
    departures: [
      { date: '2027-05-15', price: 24999, spotsLeft: 8, status: 'filling' },
      { date: '2027-06-01', price: 26999, spotsLeft: 12, status: 'available' },
      { date: '2027-07-10', price: 27999, spotsLeft: 10, status: 'available' }
    ]
  },
  {
    id: 'p6', slug: 'goa-beach-escape', title: 'Goa Beach Escape', subtitle: 'Sun-kissed shores & Portuguese vibes',
    destinationId: 'd6', category: 'Beach', difficulty: 'Easy',
    days: 4, nights: 3, price: 9999, pricePerDay: 2500,
    rating: 4.5, reviewCount: 267, bestSeller: false, freeCancellation: true,
    groupSize: { min: 2, max: 20 },
    tags: ['Beach', 'Nightlife', 'Food', 'Relaxation'],
    priceBreakdown: { accommodation: 4000, transport: 1500, meals: 2500, activities: 1500, tax: 499 },
    inclusions: ['Beach resort stay', 'All meals', 'Dudhsagar waterfall trip', 'Spice plantation tour with lunch', 'Old Goa heritage walk', 'Airport/station transfers'],
    exclusions: ['Travel to Goa', 'Water sports (extra)', 'Nightlife expenses', 'Travel insurance'],
    itinerary: [
      { day: 1, title: 'Arrival & South Goa', description: 'Arrive and check-in at beach resort. Afternoon at Palolem Beach. Sunset dinner at a beach shack.', meals: ['Dinner'], stay: 'Beach Resort' },
      { day: 2, title: 'Dudhsagar & Spices', description: 'Morning trip to Dudhsagar waterfall. Afternoon spice plantation tour with traditional Goan lunch. Evening free.', meals: ['Breakfast', 'Lunch', 'Dinner'], stay: 'Beach Resort', distance: '120 km drive' },
      { day: 3, title: 'Old Goa & North Goa', description: 'Heritage walk through Old Goa churches (UNESCO). Afternoon at Anjuna/Baga beach. Evening at the Night Market.', meals: ['Breakfast', 'Lunch', 'Dinner'], stay: 'Beach Resort', distance: '70 km drive' },
      { day: 4, title: 'Relaxation & Departure', description: 'Morning yoga on the beach. Leisurely brunch. Transfer to airport/station.', meals: ['Breakfast', 'Brunch'], stay: 'N/A' }
    ],
    departures: [
      { date: '2026-11-01', price: 9999, spotsLeft: 15, status: 'available' },
      { date: '2026-12-20', price: 12999, spotsLeft: 5, status: 'filling' }
    ]
  }
];

const reviews = [
  { id: 'r1', packageId: 'p1', author: 'Aditya Sharma', rating: 5, title: 'Best trek of my life!', content: 'The summit sunrise was unreal. Our guide Vikram was incredibly knowledgeable and made everyone feel safe. The snow camping experience was magical — waking up to a white world outside your tent is something everyone should experience at least once.', verified: true, tripType: 'Friends', date: '2026-03-15' },
  { id: 'r2', packageId: 'p1', author: 'Meera Patel', rating: 5, title: 'Perfect winter trek for beginners', content: 'I was nervous as a first-time trekker, but the team made it so comfortable. The pace was perfect, the food was surprisingly good for camping, and the views from Juda Ka Talab will stay with me forever.', verified: true, tripType: 'Solo', date: '2026-02-20' },
  { id: 'r3', packageId: 'p2', author: 'Rahul Verma', rating: 4, title: 'Magical desert night', content: 'The camel safari at sunset was beautiful, and sleeping under the stars in the desert was an unforgettable experience. The camp was comfortable and the folk music performance was authentic.', verified: true, tripType: 'Couple', date: '2026-01-10' },
  { id: 'r4', packageId: 'p3', author: 'Sneha Iyer', rating: 5, title: 'History came alive', content: 'Our guide was a retired history professor. The stories about the Rajput rulers and the architecture were fascinating. The food walk through the old city was the highlight — we tried things you\'d never find on your own.', verified: true, tripType: 'Family', date: '2026-02-28' },
  { id: 'r5', packageId: 'p4', author: 'Karan Singh', rating: 4, title: 'Adrenaline overload!', content: 'The rafting was incredible — Grade IV rapids are no joke! The camping by the river with bonfire and guitar was the perfect way to end the day. Wish it was longer than 2 days.', verified: true, tripType: 'Friends', date: '2026-03-05' },
  { id: 'r6', packageId: 'p5', author: 'Ananya Roy', rating: 5, title: 'Life-changing road trip', content: 'Pangong Tso is even more beautiful than the photos. The entire trip was meticulously planned — acclimatization, oxygen support, everything. The driver knew every hairpin turn by heart. This trip changed my perspective on life.', verified: true, tripType: 'Solo', date: '2026-08-12' },
  { id: 'r7', packageId: 'p5', author: 'Vivek Nair', rating: 5, title: 'Dream come true', content: 'Crossing Khardung La was a bucket list moment. The Nubra Valley campsite under the stars was incredible. The team handled altitude sickness concerns professionally.', verified: true, tripType: 'Friends', date: '2026-07-20' },
  { id: 'r8', packageId: 'p6', author: 'Priya Deshmukh', rating: 4, title: 'Perfect beach getaway', content: 'The Dudhsagar waterfall was breathtaking and the spice plantation lunch was the best Goan food we had the entire trip. The beach resort was clean and right on the shore.', verified: true, tripType: 'Couple', date: '2026-12-10' }
];

const blogPosts = [
  { id: 'b1', slug: 'ultimate-winter-trek-packing', title: '12 Things You\'ll Forget to Pack for a Winter Trek', excerpt: 'We surveyed 500 trekkers and compiled the most commonly forgotten items. Number 7 will surprise you (hint: it\'s not thermals).', category: 'Gear', readTime: 5, author: 'Arjun Kapoor', date: '2026-03-01', tags: ['Trekking', 'Winter', 'Packing', 'Tips'], content: 'Winter trekking requires careful preparation and the right gear. Many first-time trekkers focus on the obvious — warm jackets, hiking boots, and sleeping bags — but forget the small essentials that can make or break a trip. Lip balm with SPF is often the first thing forgotten. At high altitude, dry air and intense UV reflection off snow can crack your lips painfully within hours. A good quality lip balm with SPF 30+ is non-negotiable. Toe warmers and hand warmers are lightweight chemical heat packs that can be lifesavers on summit mornings. Sunglasses with UV protection — snow blindness is a real risk above 10,000 ft. A water bottle insulator to prevent your water from freezing solid overnight. Quick-dry towel for washing and wiping condensation inside your tent. Extra zip-lock bags for keeping electronics, documents, and snacks dry. Power bank — cold temperatures drain batteries 3x faster.' },
  { id: 'b2', slug: 'responsible-travel-india', title: 'How to Travel Responsibly in India', excerpt: 'A practical guide to reducing your footprint, supporting local communities, and leaving every place better than you found it.', category: 'Sustainability', readTime: 8, author: 'Priya Menon', date: '2026-02-15', tags: ['Sustainability', 'India', 'Community', 'Tips'], content: 'Responsible travel is not about sacrifice — it is about making choices that create positive impact. In India, where tourism directly affects fragile ecosystems and local communities, every traveller has the power to make a difference. Choose local homestays over international hotel chains. Your money goes directly to families who often use tourism income to educate their children. Carry a reusable water bottle and a fabric bag. India generates 26,000 tonnes of plastic waste daily, and tourist destinations bear a disproportionate share. Learn a few words in the local language — even a simple namaste or dhanyavaad opens doors and hearts. Respect photography boundaries, especially at religious sites and with local people. Always ask before photographing someone. Support local artisans by buying directly from craftspeople rather than middlemen. Eat local — street food and home-cooked meals have a fraction of the carbon footprint of imported hotel cuisine.' },
  { id: 'b3', slug: 'best-time-ladakh', title: 'When Should You Actually Visit Ladakh?', excerpt: 'Everyone says "summer" but the answer is more nuanced than that. Here\'s a month-by-month breakdown from someone who\'s been in every season.', category: 'Guides', readTime: 6, author: 'Vikram Singh', date: '2026-01-20', tags: ['Ladakh', 'Planning', 'Weather', 'Seasons'], content: 'Ladakh is accessible year-round, but each season offers a radically different experience. June to September is the classic tourist season. Roads are open, the weather is warm (by Ladakh standards), and you can access Pangong Tso, Nubra Valley, and all the passes. July-August brings the Hemis Festival, one of Ladakh\'s biggest cultural celebrations. However, this is also monsoon season for the rest of India, which can cause landslides on the Manali-Leh highway. September is my personal favourite — the crowds thin, the weather is still pleasant, and the landscape takes on golden autumn hues. October sees the first snowfall and road closures begin. Winter (December-February) transforms Ladakh into a frozen wonderland. The famous Chadar Trek on the frozen Zanskar River happens in January-February. Flights operate year-round, but road access via Manali or Srinagar closes. March-May is shoulder season — roads begin reopening, some passes may still be snowbound, but it is peaceful and uncrowded.' },
  { id: 'b4', slug: 'budget-travel-india-2026', title: 'Budget Travel in India: The ₹1,500/Day Challenge', excerpt: 'We spent 30 days traveling across 5 states on just ₹1,500 per day. Here\'s exactly how we did it (with spreadsheets).', category: 'Budget', readTime: 10, author: 'Ananya Sharma', date: '2026-03-10', tags: ['Budget', 'India', 'Tips', 'Backpacking'], content: 'India is one of the most affordable countries to travel in, but costs can sneak up on you if you are not strategic. We set ourselves a challenge — ₹1,500 per day covering accommodation, food, transport, and activities across Rajasthan, Kerala, Uttarakhand, Goa, and Karnataka. Accommodation averaged ₹500-600/night using a mix of hostels, dharamshalas, and budget guesthouses. We used platforms like Zostel and madefortravellers hostels. Train travel was our biggest money saver — sleeper class on Indian Railways costs a fraction of buses for the same route. We booked everything on IRCTC 60 days in advance. Food cost ₹200-300/day eating at local dhabas, thali restaurants, and street food stalls. The key insight was that tourist restaurants charge 3-5x what locals pay for the same food. Activities were the hardest to budget — but many of India\'s best experiences are free: temple visits, beach walks, mountain viewpoints, and local market exploration.' }
];

// ===== HELPER FUNCTIONS =====
function formatPrice(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

function getReviewsForPackage(packageId) {
  return reviews.filter(r => r.packageId === packageId);
}

function getPackagesForDestination(destId) {
  return packages.filter(p => p.destinationId === destId);
}

function getDestinationById(id) {
  return destinations.find(d => d.id === id);
}

function getPackageBySlug(slug) {
  return packages.find(p => p.slug === slug);
}

function getDestinationBySlug(slug) {
  return destinations.find(d => d.slug === slug);
}

function getBlogBySlug(slug) {
  return blogPosts.find(b => b.slug === slug);
}
