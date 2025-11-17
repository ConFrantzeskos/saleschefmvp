export interface LocalEvent {
  id: string;
  name: string;
  date: string;
  category: 'Weather' | 'Local Event' | 'Sports' | 'Infrastructure' | 'School/University' | 'Hyper-Local' | 'Seasonal Regional' | 'Cultural';
  location: string;
  radius?: string;
  contentRecommendation: string;
  strategicInsight: string;
  expectedImpact?: string;
  targetAudience?: string;
  icon: string;
}

export const localEvents: LocalEvent[] = [
  {
    id: 'sydney-heatwave',
    name: 'Sydney Heatwave Alert',
    date: '2025-11-21',
    category: 'Weather',
    location: 'Greater Sydney',
    radius: '50km radius',
    icon: '☀️',
    contentRecommendation: 'Promote air conditioners, portable cooling units, smart fans, and energy-efficient cooling solutions. Highlight "beat the heat with smart cooling" and energy savings messaging. Feature solar-powered devices and backup power solutions.',
    strategicInsight: '5-day heatwave forecast 38-42°C. Electronics retailers see +165% surge in cooling appliance sales during extreme heat. Smart home cooling systems and portable AC units sell out within 24 hours. Update content 48 hours before heatwave starts.',
    expectedImpact: '+165% cooling electronics',
    targetAudience: 'Homeowners, renters, families'
  },
  {
    id: 'bondi-tech-meetup',
    name: 'Eastern Suburbs Tech Community Meetup',
    date: '2025-11-24',
    category: 'Local Event',
    location: 'Bondi, Sydney',
    radius: '10km radius (Eastern Suburbs)',
    icon: '💻',
    contentRecommendation: 'Showcase latest laptops, tablets, accessories, and smart devices. Target tech-savvy Eastern Suburbs professionals with premium positioning. "Tech that powers innovation" messaging.',
    strategicInsight: 'Eastern Suburbs has highest tech adoption rate in Sydney. Premium demographic with $150K+ average household income. Strong appetite for latest gadgets and smart home devices. Tech community events drive store foot traffic +90%.',
    expectedImpact: '+125% premium electronics',
    targetAudience: 'Tech professionals, early adopters'
  },
  {
    id: 'ashes-test-scg',
    name: 'The Ashes: 4th Test at SCG',
    date: '2026-01-03',
    category: 'Sports',
    location: 'Sydney Cricket Ground, Moore Park',
    radius: '25km radius',
    icon: '🏏',
    contentRecommendation: 'Promote premium TVs and home theater systems for ultimate viewing experience. Highlight portable chargers, wireless speakers, and camera equipment for attendees. "Experience every ball in stunning clarity" messaging drives home entertainment upgrades.',
    strategicInsight: 'The Ashes is cricket\'s biggest rivalry. 5-day test attracts 40,000+ daily attendees plus millions watching at home. TV and home entertainment sales spike 200% during major cricket events. Attendees need portable tech (power banks, bluetooth speakers, headphones). Home viewers upgrade TVs and sound systems.',
    expectedImpact: '+220% home entertainment',
    targetAudience: 'Sports fans, home entertainment enthusiasts, cricket lovers'
  },
  {
    id: 'melbourne-cold-snap',
    name: 'Melbourne Cold Snap Incoming',
    date: '2025-11-22',
    category: 'Weather',
    location: 'Greater Melbourne',
    radius: '80km radius',
    icon: '❄️',
    contentRecommendation: 'Feature portable heaters, electric blankets, smart thermostats, and energy-efficient heating solutions. "Stay warm and save energy" positioning. Highlight smart home heating automation.',
    strategicInsight: 'Unexpected late-spring cold snap (8-12°C) drives emergency heating electronics purchases. Portable heater sales spike 320% during cold snaps. Smart thermostats and energy monitoring devices see sustained demand as customers seek cost-effective heating.',
    expectedImpact: '+320% heating electronics',
    targetAudience: 'Homeowners, renters, energy-conscious buyers'
  },
  {
    id: 'westfield-parramatta',
    name: 'Westfield Parramatta Expansion Opening',
    date: '2025-12-05',
    category: 'Infrastructure',
    location: 'Parramatta, Sydney',
    radius: '20km radius (Western Sydney)',
    icon: '🏗️',
    contentRecommendation: 'Major in-store electronics demonstrations and exclusive launch deals. Showcase smart home setups, gaming stations, and home theater experiences. "Experience before you buy" interactive displays drive traffic.',
    strategicInsight: 'Major retail expansion bringing 10,000+ visitors daily. Western Sydney electronics market is underserved - huge opportunity for market share. Experiential retail drives +250% conversion rates. Grand opening shoppers have high intent and spending power.',
    expectedImpact: '+250% store traffic & demos',
    targetAudience: 'Western Sydney families, tech buyers'
  },
  {
    id: 'nsw-school-holidays',
    name: 'NSW School Holidays Starting',
    date: '2025-12-21',
    category: 'School/University',
    location: 'NSW (Statewide)',
    icon: '🎓',
    contentRecommendation: 'Gaming consoles, tablets, educational tech, headphones, and portable entertainment devices. "Keep kids entertained and learning" positioning. Bundle deals on family tech packages drive basket size.',
    strategicInsight: 'NSW holidays start earlier than VIC - first-mover advantage. Parents purchase entertainment electronics 10-14 days before holidays. Gaming console sales +180%, tablets +140%, educational tech +95%. Travel-friendly electronics (portable chargers, tablets, Switch) peak demand.',
    expectedImpact: '+180% gaming & tablets',
    targetAudience: 'Parents, families with children'
  },
  {
    id: 'newtown-festival',
    name: 'Newtown Festival',
    date: '2025-11-24',
    category: 'Hyper-Local',
    location: 'Newtown, Sydney',
    radius: '5km radius (Inner West)',
    icon: '🏘️',
    contentRecommendation: 'Portable Bluetooth speakers, wireless headphones, power banks, action cameras, and mobile photography accessories. "Capture and share every moment" positioning for social-media-savvy demographic.',
    strategicInsight: 'Annual festival attracts 80,000+ visitors. Young, tech-savvy Inner West demographic (25-35 years) prioritizes portable audio, smartphone accessories, and content creation tools. Bluetooth speaker sales +180% during festival season.',
    expectedImpact: '+180% portable audio/tech',
    targetAudience: 'Young adults, content creators, music lovers'
  },
  {
    id: 'brisbane-storm-season',
    name: 'Brisbane Storm Season Alert',
    date: '2025-12-01',
    category: 'Weather',
    location: 'Brisbane & SE Queensland',
    radius: '100km radius',
    icon: '⛈️',
    contentRecommendation: 'UPS systems, surge protectors, backup power solutions, waterproof electronics, and battery backup systems. "Protect your tech investment" safety-first messaging resonates.',
    strategicInsight: 'Summer storm season = surge in power protection electronics. Queensland storms cause $200M+ in electronics damage annually. Smart homeowners invest in surge protection (+240%), UPS systems (+180%), and backup batteries. Insurance claim spike drives replacement purchases.',
    expectedImpact: '+240% power protection',
    targetAudience: 'Homeowners, home office workers'
  },
  {
    id: 'usyd-exams',
    name: 'University of Sydney Exam Period',
    date: '2025-11-18',
    category: 'School/University',
    location: 'Sydney inner suburbs (Camperdown, Newtown, Redfern)',
    radius: '8km radius',
    icon: '📚',
    contentRecommendation: 'Noise-cancelling headphones, laptops, tablet accessories, desk lamps, ergonomic peripherals, and productivity tech. "Peak performance tech for peak performance" messaging targets stressed students seeking competitive advantage.',
    strategicInsight: '50,000+ students in exam mode. Last-minute tech purchases spike 72 hours before exams. Noise-cancelling headphones +195%, laptop accessories +120%, blue light glasses +85%. Students justify premium purchases as "study investment." Target inner-city study cafes and libraries for local advertising.',
    expectedImpact: '+195% study tech',
    targetAudience: 'University students, postgrads'
  },
  {
    id: 'bondi-beach-summer',
    name: 'Bondi Beach Summer Season Peak',
    date: '2025-12-01',
    category: 'Seasonal Regional',
    location: 'Bondi Beach, Eastern Suburbs',
    radius: '12km radius',
    icon: '🏖️',
    contentRecommendation: 'Waterproof action cameras (GoPro), portable Bluetooth speakers, power banks, waterproof phone cases, underwater photography equipment. "Capture every wave, protect every device" messaging for beach lifestyle.',
    strategicInsight: 'Official summer season = massive spike in beach electronics. Waterproof speakers +210%, action cameras +175%, waterproof accessories +190%. Eastern Suburbs demographic has high disposable income for premium beach tech. Tourist purchases add 40% volume. Bondi = content creation hub - influencers drive trends.',
    expectedImpact: '+210% beach electronics',
    targetAudience: 'Beach-goers, tourists, content creators, water sports enthusiasts'
  },
  {
    id: 'adelaide-fringe',
    name: 'Adelaide Fringe Festival',
    date: '2026-02-13',
    category: 'Cultural',
    location: 'Adelaide CBD & surrounding',
    radius: '30km radius',
    icon: '🎭',
    contentRecommendation: 'Content creation gear: cameras, microphones, portable lighting, mobile recording studios, livestream equipment. Target performers, content creators, and amateur photographers documenting festival experiences.',
    strategicInsight: "Australia's biggest arts festival. 1 million+ attendees over 4 weeks = massive content creation opportunity. Performers need audio equipment, content creators need cameras/lighting (+165%), tourists upgrade phones for photography. Major tourism event = high-value tech purchases from interstate visitors.",
    expectedImpact: '+165% content creation tech',
    targetAudience: 'Content creators, performers, photographers, tourists'
  },
  {
    id: 'sydney-mardi-gras',
    name: 'Sydney Mardi Gras Parade',
    date: '2026-02-28',
    category: 'Cultural',
    location: 'Oxford St, Darlinghurst, Sydney',
    radius: '10km radius',
    icon: '🌈',
    contentRecommendation: 'LED lighting, portable speakers, smartphone gimbals, action cameras, and professional photography equipment. Target parade participants and spectators creating content. "Light up the night" and "capture pride" messaging.',
    strategicInsight: '300,000+ attendees = huge content capture moment. Parade participants need LED wearables, portable audio (+190%). Spectators upgrade cameras and phones for once-a-year shots. Month-long festival = sustained tech purchasing window. High-spending LGBTQ+ community + international tourists.',
    expectedImpact: '+190% lighting/audio/cameras',
    targetAudience: 'LGBTQ+ community, content creators, photographers, tourists'
  },
  {
    id: 'thredbo-opening',
    name: 'Thredbo Snow Season Opening',
    date: '2026-06-13',
    category: 'Seasonal Regional',
    location: 'Thredbo, NSW Snowy Mountains',
    radius: '40km radius',
    icon: '⛷️',
    contentRecommendation: 'Action cameras (GoPro), heated electronics, GPS devices, portable chargers, waterproof cases, drone photography equipment. "Capture every run" messaging for snow sports enthusiasts seeking to document alpine adventures.',
    strategicInsight: "First major ski weekend = gear-up moment. Action cameras +285% (essential for snow content), heated gloves/socks +140%, GPS tracking +95%. Queen's Birthday long weekend = premium tech buyers. Drone photography boom in alpine regions. Power banks critical for cold weather battery drain.",
    expectedImpact: '+285% action cameras/GPS',
    targetAudience: 'Snow sports enthusiasts, adventure seekers, families'
  },
  {
    id: 'darwin-wet-season',
    name: 'Darwin Wet Season Peak',
    date: '2025-12-01',
    category: 'Weather',
    location: 'Darwin & NT',
    radius: 'Territory-wide',
    icon: '🌧️',
    contentRecommendation: 'Waterproof electronics, dehumidifiers, weather stations, outdoor cameras with weatherproofing, sealed power banks. "Built for the tropics" and humidity-resistance messaging critical for NT market.',
    strategicInsight: 'Wet season = extreme humidity damages electronics. NT residents proactively invest in waterproofing (+170%), dehumidifiers (+140%), weather monitoring (+85%). Outdoor security cameras with tropical weatherproofing essential. Premium market willing to pay for durability.',
    expectedImpact: '+170% weatherproof tech',
    targetAudience: 'NT residents, homeowners, outdoor enthusiasts'
  },
  {
    id: 'melbourne-comedy-festival',
    name: 'Melbourne International Comedy Festival',
    date: '2026-03-26',
    category: 'Cultural',
    location: 'Melbourne CBD',
    radius: '25km radius',
    icon: '🎭',
    contentRecommendation: 'Streaming devices, home entertainment systems, smart TVs, soundbars for venue quality at home. Position premium home theater as "bring the festival home." Target interstate visitors upgrading hotel room entertainment tech.',
    strategicInsight: 'Major international event with 700,000+ tickets = sold-out shows drive home streaming alternatives. Comedy fans invest in quality audio (soundbars +115%) for standup streaming. Month-long event = sustained tech purchasing. Visitors from interstate = electronics tourism (tax-free shopping for some states).',
    expectedImpact: '+115% home entertainment',
    targetAudience: 'Comedy fans, home entertainment enthusiasts, tourists'
  },
  {
    id: 'ekka-brisbane',
    name: 'Ekka (Brisbane Royal Show)',
    date: '2026-08-07',
    category: 'Cultural',
    location: 'Brisbane Showgrounds, Bowen Hills',
    radius: '30km radius',
    icon: '🎡',
    contentRecommendation: 'Cameras, memory cards, portable chargers, family mobile plans, kids tablets, and smartphone accessories. "Capture family memories" messaging. Position as essential gear for full-day event with heavy camera/phone usage.',
    strategicInsight: "Queensland's biggest event with 400,000+ attendees. Families shoot hundreds of photos = memory cards sell out (+230%), portable chargers essential (+195%). Kids demand tablet entertainment during event. QLD public holiday = long weekend tech shopping. Show bags = impulse tech accessory purchases.",
    expectedImpact: '+230% photography accessories',
    targetAudience: 'Families, Queensland residents, photographers'
  },
  {
    id: 'perth-uv-alert',
    name: 'Perth Extreme UV Weekend',
    date: '2025-11-29',
    category: 'Weather',
    location: 'Perth & surrounding',
    radius: '60km radius',
    icon: '☀️',
    contentRecommendation: 'UV monitoring wearables, smart watches with sun exposure tracking, outdoor security cameras with anti-UV coating, car dash cams with heat resistance. "Protect what matters" tech positioning.',
    strategicInsight: 'Perth has highest UV levels in Australia = electronics damage risk. UV wearables (+145%) track safe sun exposure. Heat-resistant dash cams essential (car interiors reach 70°C+). Outdoor security cameras need UV-resistant coating. Health-conscious Perth market invests in monitoring tech.',
    expectedImpact: '+145% UV-monitoring tech',
    targetAudience: 'Health-conscious buyers, outdoor enthusiasts, families, drivers'
  },
  {
    id: 'boxing-day-test-mcg',
    name: 'Boxing Day Test at MCG',
    date: '2025-12-26',
    category: 'Sports',
    location: 'Melbourne Cricket Ground',
    radius: 'National viewing event',
    icon: '🏏',
    contentRecommendation: 'Large-screen TVs for home viewing parties, outdoor projectors for backyard gatherings, soundbars and home audio systems, portable speakers for beach/park watching, multi-room audio setups. "Australia\'s biggest cricket day" entertainment positioning drives TV and audio upgrades nationwide.',
    strategicInsight: 'Boxing Day Test at MCG = Australia\'s most-watched cricket event. Millions watch from home with friends and family. 100,000+ attend MCG in person (Victoria spike in portable tech). Nationwide: Large TV sales +175% (3 weeks before), soundbars +165%, outdoor projectors +140%. Social viewing = audio upgrade priority. Melbourne: portable chargers, bluetooth speakers, stadium essentials spike.',
    expectedImpact: '+175% large-screen TVs',
    targetAudience: 'Cricket fans nationwide, Melbourne attendees, social entertainment hosts'
  },
  {
    id: 'eastern-suburbs-home-refresh',
    name: 'Randwick Home & Tech Expo',
    date: '2025-12-07',
    category: 'Hyper-Local',
    location: 'Randwick, Eastern Suburbs',
    radius: '8km radius',
    icon: '🏘️',
    contentRecommendation: 'Smart home devices, security systems, robotic vacuums, smart lighting, home automation packages. "Upgrade your lifestyle" premium positioning for affluent Eastern Suburbs market.',
    strategicInsight: 'Eastern Suburbs = highest smart home adoption in Sydney. Home expo attracts 3,000+ affluent homeowners actively seeking upgrades. Smart security (+210%), robot vacuums (+180%), whole-home automation (+145%). Local expo = high-intent buyers ready to purchase. Premium suburb = budget not a barrier.',
    expectedImpact: '+210% smart home tech',
    targetAudience: 'Affluent homeowners, tech early adopters, Eastern Suburbs residents'
  }
];
