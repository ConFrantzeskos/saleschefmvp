export interface SeasonalEvent {
  id: string;
  name: string;
  date: string;
  category: 'Shopping Event' | 'National Holiday' | 'Seasonal' | 'Holiday Shopping' | 'Cultural Event' | 'Shopping Period';
  contentRecommendation: string;
  strategicInsight: string;
  region?: string;
  expectedImpact?: string;
}

export const seasonalEvents: SeasonalEvent[] = [
  {
    id: 'black-friday-2025',
    name: 'Black Friday',
    date: '2025-11-28',
    category: 'Shopping Event',
    contentRecommendation: 'Feature doorbusters on TVs, laptops, gaming consoles, smart home devices. Emphasize "biggest tech savings of the year" and "doorbuster deals" messaging. Stack offers and bundles.',
    strategicInsight: 'Australian Black Friday has grown 287% since 2020. Electronics dominate sales: TVs (+290%), laptops (+245%), gaming (+310%). Early prep beats the noise. Bundles drive basket size.',
    expectedImpact: '+290% electronics traffic'
  },
  {
    id: 'cyber-monday-2025',
    name: 'Cyber Monday',
    date: '2025-12-01',
    category: 'Shopping Event',
    contentRecommendation: 'Online-exclusive tech deals on laptops, tablets, smart home packages, accessories. "Digital doorbusters" and "online-only pricing" drive urgency. Free shipping sweetens deal.',
    strategicInsight: 'Online-first Australians spending peaks Monday-Tuesday after Black Friday. Electronics buyers comparison shop over weekend, purchase Monday. Online convenience + better selection beats in-store.',
    expectedImpact: '+240% online electronics'
  },
  {
    id: 'summer-kickoff-2025',
    name: 'Summer Season Kickoff',
    date: '2025-12-01',
    category: 'Seasonal',
    contentRecommendation: 'Promote portable speakers, action cameras, waterproof electronics, outdoor projectors, solar chargers. "Summer adventure tech" positioning for outdoor Australian lifestyle.',
    strategicInsight: 'Australian summer = peak outdoor tech spending. Portable audio (+185%), action cameras (+155%), solar power banks (+140%). Position for beach, camping, BBQs, holidays.',
    expectedImpact: '+185% portable electronics'
  },
  {
    id: 'christmas-peak-2025',
    name: 'Christmas Shopping Peak',
    date: '2025-12-10',
    category: 'Holiday Shopping',
    contentRecommendation: 'Gift tech bundles: headphones, smart watches, tablets, gaming consoles, smart home devices. "Perfect tech gift" + "arrives before Christmas" urgency messaging critical.',
    strategicInsight: 'Peak Australian online shopping period. Electronics = #1 gift category. Last-minute shoppers dominate Dec 15-23. Gift guides drive 40% of sales. Bundle positioning increases basket size 65%.',
    expectedImpact: '+320% gift electronics'
  },
  {
    id: 'boxing-day-2025',
    name: 'Boxing Day Sales',
    date: '2025-12-26',
    category: 'Shopping Event',
    contentRecommendation: 'Clearance pricing on TVs, laptops, last-gen devices. "New year upgrade" and "biggest clearance" messaging. Make room for new models arriving February.',
    strategicInsight: "Australia's biggest retail event. Bigger than Black Friday for local retailers. Electronics clearance drives foot traffic. TVs (+350%), computing (+280%), home appliances (+240%). Bargain hunters expect aggressive pricing.",
    expectedImpact: '+350% electronics clearance'
  },
  {
    id: 'nye-resolutions-2026',
    name: 'New Year Resolutions Period',
    date: '2026-01-01',
    category: 'Cultural Event',
    contentRecommendation: 'Fitness tech (smartwatches, fitness trackers), smart home organization devices, productivity laptops/tablets. "New year, better tech" and self-improvement positioning.',
    strategicInsight: 'Resolution-driven purchases peak first two weeks of January. Fitness wearables (+210%), smart home (+165%), productivity tech (+145%). Self-improvement mindset = premium willingness.',
    expectedImpact: '+210% fitness tech'
  },
  {
    id: 'australia-day-2026',
    name: 'Australia Day',
    date: '2026-01-26',
    category: 'National Holiday',
    contentRecommendation: 'Outdoor entertainment packages: portable projectors, Bluetooth speakers, outdoor TVs, BBQ entertainment systems. "Aussie entertaining" and "long weekend setup" messaging.',
    strategicInsight: 'Long weekend = increased outdoor entertainment electronics. Portable audio (+140%), outdoor projectors (+120%), TV upgrades for cricket/Triple J Hottest 100 (+95%). National pride = "Australian-made tech" resonates.',
    region: 'National',
    expectedImpact: '+140% outdoor entertainment'
  },
  {
    id: 'back-to-school-2026',
    name: 'Back to School',
    date: '2026-01-28',
    category: 'Shopping Period',
    contentRecommendation: 'Student laptops, tablets, Chromebooks, study headphones, ergonomic accessories. "Student tech essentials" and educational productivity positioning. Bundle deals on laptop + accessories.',
    strategicInsight: 'Major Australian shopping event. Student tech dominates: laptops (+280%), tablets (+195%), headphones (+165%). Parents invest in quality tech for educational success. Educational pricing drives premium purchases.',
    expectedImpact: '+280% student tech'
  },
  {
    id: 'valentines-2026',
    name: "Valentine's Day",
    date: '2026-02-14',
    category: 'Holiday Shopping',
    contentRecommendation: 'Tech gift ideas: smartwatches, wireless earbuds, digital photo frames, couples\' tech accessories. "Gifts they\'ll actually use" practical romance positioning.',
    strategicInsight: 'Growing Australian commercial holiday. Tech now beats traditional gifts - smartwatches (+175%), wireless earbuds (+145%), streaming devices (+95%). Men = primary tech gift buyers. Practical > sentimental.',
    expectedImpact: '+175% gift tech'
  },
  {
    id: 'easter-2026',
    name: 'Easter',
    date: '2026-04-03',
    category: 'Holiday Shopping',
    contentRecommendation: 'Travel tech: portable chargers, travel adapters, noise-cancelling headphones, e-readers, tablets. "Long weekend escape essentials" positioning.',
    strategicInsight: 'Second-biggest holiday spending period. Easter Monday = major retail traffic day. Long weekend travel drives portable tech (+135%), travel accessories (+110%). Family purchases spike.',
    expectedImpact: '+135% travel tech'
  },
  {
    id: 'mothers-day-2026',
    name: "Mother's Day",
    date: '2026-05-10',
    category: 'Holiday Shopping',
    contentRecommendation: 'Gift tech for mums: smartwatches, e-readers, smart home devices, digital photo frames, wireless earbuds. "Tech that shows you care" thoughtful positioning.',
    strategicInsight: "Australia's third-largest gifting occasion after Christmas and Valentine's. Smart home (+165%), wearables (+140%), beauty tech (+120%) lead. Adult children = primary buyers with premium budget.",
    expectedImpact: '+165% gift tech'
  },
  {
    id: 'eofy-sales-2026',
    name: 'EOFY Sales',
    date: '2026-06-01',
    category: 'Shopping Period',
    contentRecommendation: 'Business tech: laptops, monitors, printers, office equipment. "Tax deductible tech upgrades" and "end of year savings" messaging. Target small business and home office.',
    strategicInsight: 'Massive Australian retail phenomenon. B2B and big-ticket purchases spike. Businesses looking for tax write-off tech investments. Business laptops (+290%), monitors (+220%), office electronics (+180%).',
    expectedImpact: '+290% business tech'
  },
  {
    id: 'tax-return-season-2026',
    name: 'Tax Return Season',
    date: '2026-07-01',
    category: 'Shopping Period',
    contentRecommendation: 'Big-ticket electronics: premium TVs, high-end laptops, gaming setups, home theater systems. "Smart ways to use your tax return" investment positioning.',
    strategicInsight: 'Australians receive $30+ billion in tax returns annually. Discretionary spending peaks July-August. Premium electronics purchases (+175%), home entertainment upgrades (+155%). Guilt-free spending window.',
    expectedImpact: '+175% premium electronics'
  },
  {
    id: 'fathers-day-2026',
    name: "Father's Day",
    date: '2026-09-06',
    category: 'Holiday Shopping',
    contentRecommendation: 'Dad tech: power tools, smart garage devices, gaming gear, audio equipment, outdoor tech. "Gifts for the modern dad" practical tech positioning.',
    strategicInsight: 'Australian Father\'s Day is FIRST Sunday in September (not June like US). Tech dominates: gaming (+190%), audio (+165%), smart home (+140%). Tools and tech = safe bets for dad gifts.',
    expectedImpact: '+190% dad tech'
  },
  {
    id: 'grand-finals-2026',
    name: 'Grand Finals Season',
    date: '2026-09-26',
    category: 'Cultural Event',
    contentRecommendation: 'Home entertainment: large screen TVs, soundbars, streaming devices, projectors. "Ultimate finals viewing experience" entertainment positioning.',
    strategicInsight: 'Major Australian cultural moment. AFL/NRL finals drive entertainment electronics spending. TV upgrades (+220%), audio systems (+180%), streaming devices (+125%). Party hosting drives purchases.',
    expectedImpact: '+220% home entertainment'
  },
  {
    id: 'melbourne-cup-2026',
    name: 'Melbourne Cup',
    date: '2026-11-03',
    region: 'VIC (National interest)',
    category: 'Cultural Event',
    contentRecommendation: 'Entertainment tech for parties: portable speakers, projectors, streaming devices, party lighting. "Race day entertainment" celebration positioning.',
    strategicInsight: '"The race that stops a nation" = entertainment and hospitality electronics surge. Portable audio (+145%), display tech (+120%), smart lighting (+95%). Victorian public holiday = premium opportunity.',
    expectedImpact: '+145% party tech'
  },
  {
    id: 'black-friday-2026',
    name: 'Black Friday 2026',
    date: '2026-11-27',
    category: 'Shopping Event',
    contentRecommendation: 'Prepare early for next year\'s cycle. Review 2025 performance data to optimize 2026 strategy.',
    strategicInsight: 'Annual planning begins now. Learn from this year\'s performance to maximize next Black Friday.',
    expectedImpact: 'Strategic planning'
  }
];
