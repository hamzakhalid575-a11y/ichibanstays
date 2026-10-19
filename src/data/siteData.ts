export interface ServiceItem {
  slug: string;
  title: string;
  shortDesc: string;
  heroSubtitle: string;
  highlights: string[];
  details: string[];
}

export interface AreaItem {
  slug: string;
  name: string;
  region: "London" | "England" | "Scotland" | "Wales";
  boroughOrArea: string;
  avgNightlyRate: string;
  occupancyTarget: string;
  summary: string;
  guestProfile: string;
  regulationNote: string;
}

export interface GuideItem {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  excerpt: string;
  sections: { heading: string; body: string }[];
}

export const BRAND_INFO = {
  name: "Ichiban Stays",
  tagline: "Short Let Management Across the UK",
  subTagline: "Your Property. Our Property",
  email: "contact@ichibanstays.com",
  phone: "+44 7572 190291",
  phoneClean: "+447572190291",
  whatsappUrl: "https://wa.me/447572190291",
  address: "25 Hill Street, Mayfair, London W1J 5LW, United Kingdom",
  hours: "Monday to Friday, 9:00–18:00 UK time",
  copyright: "© 2026 Ichiban Stays. All Rights Reserved. Registered in England & Wales.",
};

export const HERO_STATS = [
  { value: "98%", label: "Average Occupancy" },
  { value: "24/7", label: "Guest Support" },
  { value: "350+", label: "Bookings Managed" },
  { value: "Approx. 35%", label: "Higher Rental Returns" },
];

export const PERFORMANCE_STATS = [
  { value: "£2M+", label: "Revenue Generated" },
  { value: "4.9 ★", label: "Average Guest Rating" },
  { value: "120+", label: "Properties Managed" },
  { value: "5 ★", label: "Guest Experience" },
];

export const FIVE_STEPS = [
  {
    step: 1,
    title: "Free Property Assessment",
    description: "We evaluate your property and its short stay potential.",
  },
  {
    step: 2,
    title: "Income Projection",
    description: "Receive a tailored income projection and strategy.",
  },
  {
    step: 3,
    title: "Prepare & List",
    description: "We prepare your property and list it on top platforms.",
  },
  {
    step: 4,
    title: "Guest Management",
    description: "We handle guests, cleaning, maintenance & support.",
  },
  {
    step: 5,
    title: "Monthly Payments",
    description: "Receive your rental income with a clear monthly statement.",
  },
];

export const HANDPICKED_PROPERTIES = [
  {
    id: "prop-mayfair-apt",
    title: "Luxury Apartment",
    location: "London (Mayfair)",
    beds: 2,
    baths: 2,
    type: "Apartment",
    avgMonthlyRevenue: "£6,400",
    occupancy: "98%",
    alt: "Luxury apartment in London managed by Ichiban Stays",
  },
  {
    id: "prop-country-estate",
    title: "Country Estates",
    location: "London & Home Counties",
    beds: 2,
    baths: 1,
    type: "House",
    avgMonthlyRevenue: "£4,950",
    occupancy: "96%",
    alt: "Country estate property managed as a short let by Ichiban Stays",
  },
  {
    id: "prop-terraced-house",
    title: "Terraced House",
    location: "London (Chelsea)",
    beds: 1,
    baths: 1,
    type: "House",
    avgMonthlyRevenue: "£4,200",
    occupancy: "99%",
    alt: "Terraced house managed as a short let by Ichiban Stays",
  },
  {
    id: "prop-central-london",
    title: "Central London",
    location: "London (Westminster)",
    beds: 3,
    baths: 3,
    type: "Apartment",
    avgMonthlyRevenue: "£8,850",
    occupancy: "97%",
    alt: "Central London apartment managed by Ichiban Stays",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    slug: "short-term-property-management",
    title: "Short-Term Let Management",
    shortDesc: "Listings, guests, cleaning and dynamic pricing for stays of a few nights to a few weeks.",
    heroSubtitle: "End-to-end short-term rental management for London and UK landlords with zero upfront fees.",
    highlights: [
      "No upfront fees to get started",
      "A dedicated manager for your property, not a call centre",
      "PriceLabs dynamic pricing responding to local demand & events",
      "Professional hotel-grade housekeeping and linen changeovers",
    ],
    details: [
      "Ichiban Stays provides short-term let management for London and UK landlords and handles every part of that process, end to end.",
      "We combine multi-platform distribution (Airbnb, Booking.com, VRBO, and direct corporate channels) with our in-house property management software so bookings, cleaning, maintenance, and reporting stay connected.",
    ],
  },
  {
    slug: "airbnb-management",
    title: "Airbnb Management",
    shortDesc: "Airbnb, Booking.com and premium platforms run for you with Superhost-standard care.",
    heroSubtitle: "Maximise your Airbnb occupancy and nightly rates while our 24/7 team handles every guest.",
    highlights: [
      "Multi-platform listing creation & professional photography",
      "Strict guest vetting, ID verification, and security deposits",
      "24/7 guest communication, check-in & check-out coordination",
      "5-star review management and listing rank optimisation",
    ],
    details: [
      "Running a high-performing Airbnb takes rapid guest response times, dynamic rate adjustments, and spotless turnovers between every stay.",
      "Our team manages your listing across Airbnb and partner portals simultaneously, preventing double-bookings and keeping occupancy around 98%.",
    ],
  },
  {
    slug: "serviced-accommodation-management",
    title: "Serviced Accommodation",
    shortDesc: "Longer corporate, contractor, and relocation stays — ideal around London's 90-night rule.",
    heroSubtitle: "Furnished, hotel-standard serviced apartments tailored for corporate travellers, relocations, and extended stays.",
    highlights: [
      "Strategic mix of short lets and 28+ night corporate bookings",
      "Full compliance with London's 90-day short-let planning limit",
      "Direct partnerships with relocation agents and corporate travel desks",
      "Reduced wear and tear with high-value professional guests",
    ],
    details: [
      "Serviced accommodation bridges the gap between short-term holiday lets and traditional AST tenancies.",
      "By blending high-yield short stays with medium-term corporate and relocation bookings, we keep your property earning year-round while respecting local council limits.",
    ],
  },
  {
    slug: "guaranteed-rent",
    title: "Guaranteed Rent",
    shortDesc: "Fixed, predictable monthly rental payouts paid on time every month with zero void periods.",
    heroSubtitle: "Enjoy total peace of mind with guaranteed fixed monthly income and zero management fees.",
    highlights: [
      "Fixed monthly rent paid automatically regardless of occupancy",
      "Zero void periods, zero commission fees, zero arrears",
      "Routine maintenance and light wear-and-tear covered by us",
      "Flexible 1 to 5 year corporate lease agreements",
    ],
    details: [
      "For landlords who prefer certainty over variable seasonal yields, our Guaranteed Rent scheme effectively makes Ichiban Stays your corporate tenant.",
      "You receive a fixed monthly payment on the same date every month while we manage vetted corporate and professional stays.",
    ],
  },
  {
    slug: "for-landlords",
    title: "Services for Landlords",
    shortDesc: "Complete portfolio advisory, compliance, furnishing, and dedicated UK property management.",
    heroSubtitle: "If you own a property anywhere in the UK and want it to earn more without becoming a second job, start here.",
    highlights: [
      "Honest initial assessment of whether short-let, serviced, or AST suits best",
      "Interior staging, furnishing packages, and safety compliance setup",
      "Transparent monthly statements and automated landlord payouts",
      "Over 20 years of UK property and hospitality experience",
    ],
    details: [
      "Most well-presented properties can work as managed short lets, especially when close to transport links, business districts, hospitals, or visitor attractions.",
      "If your property isn't a natural short let, we will tell you honestly in your free assessment and recommend the strategy that maximises your net return.",
    ],
  },
];

export const LONDON_AREAS: AreaItem[] = [
  {
    slug: "property-management-mayfair",
    name: "Mayfair",
    region: "London",
    boroughOrArea: "City of Westminster (W1J / W1K)",
    avgNightlyRate: "£340 – £650",
    occupancyTarget: "98%",
    summary: "Home to our headquarters at 25 Hill Street, Mayfair attracts ultra-prime diplomatic, corporate finance, and luxury leisure guests year-round.",
    guestProfile: "International executives, private banking clients, diplomatic visitors, and luxury travellers.",
    regulationNote: "Westminster 90-night cap managed seamlessly via hybrid corporate serviced stays (28+ nights).",
  },
  {
    slug: "property-management-belgravia",
    name: "Belgravia",
    region: "London",
    boroughOrArea: "City of Westminster / RBKC (SW1W / SW1X)",
    avgNightlyRate: "£320 – £580",
    occupancyTarget: "97%",
    summary: "Grand stucco terraces and quiet garden squares make Belgravia one of London's highest-yielding districts for executive relocations and embassy stays.",
    guestProfile: "Embassy staff, relocating families, and high-net-worth extended-stay guests.",
    regulationNote: "Managed with tailored short-let and 30+ day corporate lets to maintain year-round compliance.",
  },
  {
    slug: "property-management-chelsea",
    name: "Chelsea",
    region: "London",
    boroughOrArea: "Royal Borough of Kensington & Chelsea (SW3 / SW10)",
    avgNightlyRate: "£260 – £480",
    occupancyTarget: "98%",
    summary: "Chelsea combines quiet residential streets with some of London's best-known shopping, galleries, and King's Road culture.",
    guestProfile: "Design professionals, international families, Chelsea Flower Show visitors, and medical tourists.",
    regulationNote: "RBKC 90-night tracking built into our in-house software with automatic medium-term switchovers.",
  },
  {
    slug: "property-management-kensington",
    name: "Kensington",
    region: "London",
    boroughOrArea: "Royal Borough of Kensington & Chelsea (W8 / SW7)",
    avgNightlyRate: "£250 – £460",
    occupancyTarget: "98%",
    summary: "Bordering Hyde Park and Museum Mile, Kensington commands strong nightly rates across every season.",
    guestProfile: "Academic visitors, museum & cultural travellers, and corporate consultants.",
    regulationNote: "Full RBKC 90-day compliance monitoring and mid-term corporate booking integration.",
  },
  {
    slug: "property-management-notting-hill",
    name: "Notting Hill",
    region: "London",
    boroughOrArea: "Royal Borough of Kensington & Chelsea (W11)",
    avgNightlyRate: "£230 – £410",
    occupancyTarget: "97%",
    summary: "Iconic pastel townhouses, Portobello Market, and boutique dining drive exceptional leisure and creative-industry demand.",
    guestProfile: "Media & film professionals, international tourists, and boutique leisure travellers.",
    regulationNote: "Balanced calendar strategy combining peak summer short stays with autumn/winter corporate lets.",
  },
  {
    slug: "property-management-battersea",
    name: "Battersea",
    region: "London",
    boroughOrArea: "London Borough of Wandsworth (SW11)",
    avgNightlyRate: "£185 – £330",
    occupancyTarget: "98%",
    summary: "With the regenerated Battersea Power Station, Northern Line extension, and riverside parks, SW11 is a magnet for corporate and tech stays.",
    guestProfile: "Tech & media professionals (Apple campus nearby), young families, and US/EU business travellers.",
    regulationNote: "Wandsworth council rules observed with automated night-counter and extended corporate stays.",
  },
  {
    slug: "property-management-islington",
    name: "Islington",
    region: "London",
    boroughOrArea: "London Borough of Islington (N1 / N5)",
    avgNightlyRate: "£190 – £320",
    occupancyTarget: "98%",
    summary: "Minutes from King's Cross St Pancras, Tech City, and the City, Islington Georgian flats and loft apartments achieve near-continuous occupancy.",
    guestProfile: "Eurostar business travellers, tech executives, and academic visitors.",
    regulationNote: "Full 90-day calendar management with strong mid-term demand from King's Cross knowledge quarter.",
  },
  {
    slug: "property-management-camden",
    name: "Camden",
    region: "London",
    boroughOrArea: "London Borough of Camden (NW1 / NW3)",
    avgNightlyRate: "£180 – £340",
    occupancyTarget: "97%",
    summary: "Spanning Regent's Park, Bloomsbury, and Camden Town, the borough draws medical, academic, and cultural guests all year.",
    guestProfile: "University researchers, hospital consultants, and music/cultural visitors.",
    regulationNote: "Camden short-let rules managed with hybrid short and 28+ night medical/academic stays.",
  },
  {
    slug: "property-management-covent-garden",
    name: "Covent Garden",
    region: "London",
    boroughOrArea: "City of Westminster / Camden (WC2)",
    avgNightlyRate: "£290 – £520",
    occupancyTarget: "99%",
    summary: "At the heart of the West End and Theatreland, Covent Garden flats enjoy some of the highest occupancy rates in Europe.",
    guestProfile: "Theatre & entertainment executives, legal professionals, and West End visitors.",
    regulationNote: "Managed via PriceLabs dynamic pricing and compliant West End corporate relocations.",
  },
  {
    slug: "property-management-shoreditch",
    name: "Shoreditch",
    region: "London",
    boroughOrArea: "London Borough of Hackney / Tower Hamlets (E1 / EC2A)",
    avgNightlyRate: "£200 – £360",
    occupancyTarget: "98%",
    summary: "Situated right on the Silicon Roundabout and Liverpool Street corridor, Shoreditch warehouse apartments thrive on weekday corporate and weekend leisure stays.",
    guestProfile: "Fintech & startup founders, creative directors, and City consultants.",
    regulationNote: "Hackney & Tower Hamlets 90-day tracking with strong corporate project stays.",
  },
  {
    slug: "property-management-canary-wharf",
    name: "Canary Wharf",
    region: "London",
    boroughOrArea: "London Borough of Tower Hamlets (E14)",
    avgNightlyRate: "£210 – £390",
    occupancyTarget: "98%",
    summary: "Modern high-rise serviced apartments serving international banks, law firms, and Excel London exhibition delegates.",
    guestProfile: "Investment bankers, financial auditors, legal teams, and conference delegates.",
    regulationNote: "High proportion of 30–90 night corporate secondments keeps properties earning above AST levels all year.",
  },
];

export const UK_CITIES: AreaItem[] = [
  { slug: "property-management-manchester", name: "Manchester", region: "England", boroughOrArea: "Greater Manchester (M1–M4, Salford Quays)", avgNightlyRate: "£145 – £260", occupancyTarget: "97%", summary: "MediaCityUK, Spinningfields, and football/music tourism make Manchester the UK's top regional short-let market.", guestProfile: "Media crews, corporate consultants, and stadium/concert visitors.", regulationNote: "No 90-day statutory cap; lease and planning compliance checked prior to onboarding." },
  { slug: "property-management-birmingham", name: "Birmingham", region: "England", boroughOrArea: "West Midlands (B1–B5, Jewellery Quarter)", avgNightlyRate: "£135 – £230", occupancyTarget: "96%", summary: "NEC exhibitions, HS2 infrastructure teams, and Colmore Row financial services drive consistent Monday–Sunday bookings.", guestProfile: "Engineering contractors, NEC exhibitors, and corporate professionals.", regulationNote: "Local planning and building lease conditions verified during free assessment." },
  { slug: "property-management-liverpool", name: "Liverpool", region: "England", boroughOrArea: "Merseyside (L1–L3, Baltic Triangle, Docks)", avgNightlyRate: "£130 – £240", occupancyTarget: "97%", summary: "Maritime heritage, biomedical hubs, and premier sporting events support high yields across waterfront and city-centre flats.", guestProfile: "Film production crews, maritime executives, and weekend leisure guests.", regulationNote: "Full local compliance check included in onboarding." },
  { slug: "property-management-leeds", name: "Leeds", region: "England", boroughOrArea: "West Yorkshire (LS1–LS2)", avgNightlyRate: "£130 – £220", occupancyTarget: "96%", summary: "A major UK legal, healthcare, and digital hub with strong mid-week corporate occupancy and weekend leisure stays.", guestProfile: "Legal & NHS professionals, Channel 4 media teams, and city visitors.", regulationNote: "Free assessment checks local council and freeholder terms." },
  { slug: "property-management-bristol", name: "Bristol", region: "England", boroughOrArea: "South West (BS1–BS8, Clifton, Harbourside)", avgNightlyRate: "£155 – £270", occupancyTarget: "97%", summary: "Aerospace, green energy, and universities make Bristol one of the highest-earning regional serviced accommodation markets.", guestProfile: "Aerospace engineers, university researchers, and South West travellers.", regulationNote: "Checked against Bristol City Council guidance prior to launch." },
  { slug: "property-management-newcastle", name: "Newcastle", region: "England", boroughOrArea: "Tyne & Wear (NE1, Quayside, Jesmond)", avgNightlyRate: "£125 – £215", occupancyTarget: "96%", summary: "Quayside business parks, offshore energy, and teaching hospitals create steady demand for well-managed serviced homes.", guestProfile: "Energy sector contractors, visiting clinicians, and city-break guests.", regulationNote: "Leasehold and council compliance reviewed before listing." },
  { slug: "property-management-nottingham", name: "Nottingham", region: "England", boroughOrArea: "East Midlands (NG1–NG7, Lace Market)", avgNightlyRate: "£120 – £200", occupancyTarget: "95%", summary: "Two major universities, Queen's Medical Centre, and East Midlands commercial hubs support reliable year-round bookings.", guestProfile: "Visiting academics, medical locums, and corporate project teams.", regulationNote: "Local council rules verified during property assessment." },
  { slug: "property-management-sheffield", name: "Sheffield", region: "England", boroughOrArea: "South Yorkshire (S1–S10, Kelham Island)", avgNightlyRate: "£115 – £195", occupancyTarget: "95%", summary: "Advanced manufacturing corridors and proximity to the Peak District deliver balanced corporate and outdoor-leisure occupancy.", guestProfile: "Manufacturing engineers, university guests, and Peak District visitors.", regulationNote: "Standard UK compliance and safety checks managed end-to-end." },
  { slug: "property-management-leicester", name: "Leicester", region: "England", boroughOrArea: "East Midlands (LE1–LE2)", avgNightlyRate: "£115 – £190", occupancyTarget: "95%", summary: "Central transport links and logistics/engineering parks create dependable contractor and business stay demand.", guestProfile: "Logistics managers, engineering contractors, and visiting families.", regulationNote: "Assessed individually for optimal short-let vs serviced strategy." },
  { slug: "property-management-oxford", name: "Oxford", region: "England", boroughOrArea: "Oxfordshire (OX1–OX4, Jericho, Summertown)", avgNightlyRate: "£195 – £350", occupancyTarget: "98%", summary: "World-renowned university colleges, biotech campuses, and global tourism generate premium nightly rates year-round.", guestProfile: "Visiting fellows, biotech executives, and international tourists.", regulationNote: "Carefully managed around local Oxford short-let planning policies." },
  { slug: "property-management-cambridge", name: "Cambridge", region: "England", boroughOrArea: "Cambridgeshire (CB1–CB4, Station Road, Historic Core)", avgNightlyRate: "£200 – £360", occupancyTarget: "98%", summary: "Silicon Fen tech headquarters, pharmaceutical R&D (AstraZeneca), and historic colleges fuel exceptional serviced apartment yields.", guestProfile: "Biotech & AI researchers, visiting professors, and corporate relocations.", regulationNote: "Tailored mix of short stays and 30+ night academic/corporate lets." },
  { slug: "property-management-brighton", name: "Brighton", region: "England", boroughOrArea: "East Sussex (BN1–BN3, Lanes, Hove)", avgNightlyRate: "£165 – £310", occupancyTarget: "97%", summary: "Year-round conferences at the Brighton Centre, creative agencies, and coastal tourism drive strong seasonal and mid-week revenue.", guestProfile: "Conference delegates, digital creatives, and coastal holidaymakers.", regulationNote: "Dynamic pricing captures peak summer and conference surges." },
  { slug: "property-management-bath", name: "Bath", region: "England", boroughOrArea: "Somerset (BA1–BA2)", avgNightlyRate: "£185 – £340", occupancyTarget: "98%", summary: "UNESCO Georgian architecture, thermal spas, and filming locations make Bath one of the UK's highest ADR leisure markets.", guestProfile: "Heritage tourists, film productions, and luxury weekend guests.", regulationNote: "Bath & North East Somerset guidelines checked during assessment." },
  { slug: "property-management-york", name: "York", region: "England", boroughOrArea: "North Yorkshire (YO1–YO10)", avgNightlyRate: "£160 – £290", occupancyTarget: "98%", summary: "Historic city walls, York Racecourse, and rail links between London and Edinburgh deliver consistent 12-month occupancy.", guestProfile: "Heritage travellers, racegoers, and rail/engineering professionals.", regulationNote: "City of York Council guidance reviewed for every property." },
  { slug: "property-management-edinburgh", name: "Edinburgh", region: "Scotland", boroughOrArea: "City of Edinburgh (EH1–EH12, New Town, West End)", avgNightlyRate: "£210 – £420", occupancyTarget: "98%", summary: "Financial services, international festivals, and historic landmarks make Edinburgh second only to London for UK nightly rates.", guestProfile: "Festival performers & visitors, financial executives, and international tourists.", regulationNote: "Guided through Scotland's Short-Term Let Licensing & Control Area rules or longer corporate stays." },
  { slug: "property-management-glasgow", name: "Glasgow", region: "Scotland", boroughOrArea: "Glasgow City (G1–G12, Merchant City, Finnieston)", avgNightlyRate: "£145 – £260", occupancyTarget: "97%", summary: "SEC conferences, OVO Hydro events, and major engineering/financial headquarters support high year-round occupancy.", guestProfile: "Conference attendees, broadcast crews, and corporate contractors.", regulationNote: "Managed in full accordance with Glasgow City Council short-term let licensing." },
  { slug: "property-management-cardiff", name: "Cardiff", region: "Wales", boroughOrArea: "Cardiff Capital Region (CF10–CF24, Cardiff Bay)", avgNightlyRate: "£140 – £250", occupancyTarget: "96%", summary: "Principality Stadium events, government offices, and Pinewood/Wolf Studios film productions create strong short and mid-term demand.", guestProfile: "TV & film crews, civil service visitors, and major stadium event guests.", regulationNote: "Compliant with Welsh statutory registration and safety requirements." },
];

export const ALL_AREAS: AreaItem[] = [...LONDON_AREAS, ...UK_CITIES];

export const GUIDES: GuideItem[] = [
  {
    slug: "how-to-choose-a-property-management-company",
    title: "Choosing a Property Manager",
    category: "Landlord Guide",
    readTime: "5 min read",
    publishedDate: "October 5, 2026",
    excerpt: "What UK landlords should look for when comparing short-let and serviced accommodation management companies in London and nationwide.",
    sections: [
      {
        heading: "1. Dedicated Property Manager vs Call Centre",
        body: "Many large management platforms route landlords through ticketing queues. At Ichiban Stays, you have one dedicated manager who knows your property inside out and reports directly to you.",
      },
      {
        heading: "2. Dynamic Pricing & Multi-Platform Reach",
        body: "Relying on a static nightly rate leaves thousands of pounds on the table. Look for a manager that combines PriceLabs dynamic pricing with listings across Airbnb, Booking.com, and direct corporate channels.",
      },
      {
        heading: "3. Compliance & The 90-Day Rule",
        body: "In London, whole-property short lets are capped at 90 nights per calendar year without planning permission. Your manager must track nights automatically and blend short stays with 28+ night corporate serviced bookings.",
      },
    ],
  },
  {
    slug: "management-fees-explained",
    title: "Management Fees Explained",
    category: "Financials",
    readTime: "4 min read",
    publishedDate: "September 28, 2026",
    excerpt: "A transparent breakdown of how short-let management fees work, what is included, and why there are zero upfront costs to get started.",
    sections: [
      {
        heading: "No Upfront Setup Fees",
        body: "Getting started with Ichiban Stays costs nothing upfront. We only earn when your property generates bookings.",
      },
      {
        heading: "What Full Management Covers",
        body: "Our management structure covers multi-platform listing management, PriceLabs dynamic pricing, 24/7 guest communication, check-in support, maintenance coordination, and monthly financial statements.",
      },
    ],
  },
  {
    slug: "managing-it-yourself-vs-a-manager",
    title: "Managing It Yourself vs a Manager",
    category: "Operations",
    readTime: "6 min read",
    publishedDate: "September 21, 2026",
    excerpt: "Compare the time commitment, occupancy rates, and net income of self-managing an Airbnb versus partnering with a full-service team.",
    sections: [
      {
        heading: "The Hidden Time Cost of Self-Management",
        body: "Responding to midnight guest queries, coordinating emergency linen turnarounds, and adjusting rates daily across portals quickly turns a passive asset into a 20-hour-per-week job.",
      },
      {
        heading: "Why Professional Management Often Nets More Even After Fees",
        body: "With 98% average occupancy, algorithmic dynamic pricing, and corporate booking channels, professionally managed properties typically generate ~35% higher returns than standard lets.",
      },
    ],
  },
  {
    slug: "airbnb-vs-long-term-rental",
    title: "Airbnb vs Long-Term Rental",
    category: "Strategy",
    readTime: "5 min read",
    publishedDate: "September 15, 2026",
    excerpt: "Compare yield, flexibility, compliance, and wear-and-tear between short-term lets, serviced accommodation, and traditional AST tenancies.",
    sections: [
      {
        heading: "Yield & Flexibility Comparison",
        body: "Well-located flats near transport links, hospitals, and business districts frequently earn 30%–40% more through managed short and mid-term stays while retaining hotel-grade inspection after every checkout.",
      },
      {
        heading: "When a Standard Tenancy Makes Sense",
        body: "If your property isn't a natural fit for short lets due to lease restrictions or location, we will tell you honestly during your free assessment.",
      },
    ],
  },
  {
    slug: "the-90-day-rule-in-london",
    title: "The 90-Day Rule in London",
    category: "Compliance",
    readTime: "6 min read",
    publishedDate: "September 9, 2026",
    excerpt: "How London's 90-night short-let limit works across all 32 boroughs and how we keep your property earning year-round legally.",
    sections: [
      {
        heading: "What Is the 90-Night Limit?",
        body: "Under the Deregulation Act 2015, entire residential properties in Greater London can be let for short stays (under 90 consecutive nights) for up to 90 nights per calendar year without planning change of use.",
      },
      {
        heading: "How Hybrid Management Solves the 90-Day Cap",
        body: "Our in-house system tracks every short-stay night automatically. We pair high-rate peak short lets with 28–90+ night corporate and relocation bookings that do not count toward the 90-night limit.",
      },
    ],
  },
  {
    slug: "how-short-term-management-works",
    title: "How Short-Term Management Works",
    category: "Operations",
    readTime: "4 min read",
    publishedDate: "September 2, 2026",
    excerpt: "Inside our 5-step process from free property assessment to automated monthly landlord payouts.",
    sections: [
      {
        heading: "From Keys to Monthly Payouts",
        body: "We begin with a free assessment and tailored income projection, prepare and photograph your property, launch across top booking channels, manage every guest and clean, and send your monthly income with a clear statement.",
      },
    ],
  },
  {
    slug: "what-a-property-manager-does",
    title: "What a Property Manager Does",
    category: "Landlord Guide",
    readTime: "5 min read",
    publishedDate: "August 25, 2026",
    excerpt: "A complete look at day-to-day guest vetting, housekeeping, maintenance, compliance, and revenue management.",
    sections: [
      {
        heading: "End-to-End Operational Care",
        body: "From verifying guest IDs and coordinating hotel-quality linen turnovers to resolving maintenance issues and optimising nightly rates on PriceLabs, your dedicated manager handles 100% of the workload.",
      },
    ],
  },
  {
    slug: "guaranteed-rent-explained",
    title: "Guaranteed Rent Explained",
    category: "Financials",
    readTime: "4 min read",
    publishedDate: "August 18, 2026",
    excerpt: "How landlords can secure fixed monthly rental income with zero voids and zero management commission.",
    sections: [
      {
        heading: "Predictable Cash Flow Without Voids",
        body: "Under a Guaranteed Rent agreement, you receive an agreed monthly rent every month on time, while Ichiban Stays manages vetted corporate and professional stays.",
      },
    ],
  },
  {
    slug: "what-can-my-london-flat-earn",
    title: "What Can My London Flat Earn?",
    category: "Financials",
    readTime: "5 min read",
    publishedDate: "August 10, 2026",
    excerpt: "Realistic nightly rates, occupancy benchmarks, and net income projections across Central, West, North, East, and South London.",
    sections: [
      {
        heading: "Factors That Drive Short-Let Revenue",
        body: "Proximity to Tube stations, bedroom/bathroom count, interior presentation, and seasonal corporate demand shape your flat's earning potential. Request our free 30-second projection for an exact figure.",
      },
    ],
  },
];

export const LANDLORD_FAQS = [
  {
    q: "Are there any upfront fees to get started with Ichiban Stays?",
    a: "No. Getting started costs you nothing upfront. We begin with a free, no-obligation property assessment and tailored income projection.",
  },
  {
    q: "How do you handle London's 90-day short-let limit?",
    a: "In London, whole-property short lets are limited to 90 nights per calendar year unless you have planning permission. We track nights automatically in our in-house software and plan around the limit by blending peak short stays with longer serviced accommodation and corporate bookings (28+ nights).",
  },
  {
    q: "How do you keep my property's nightly rates and occupancy high?",
    a: "We use PriceLabs dynamic pricing so nightly rates adjust daily with demand, seasons, and local events rather than sitting at a fixed rate. Combined with multi-platform distribution and corporate partnerships, we maintain an average occupancy of 98%.",
  },
  {
    q: "Will I have a dedicated property manager?",
    a: "Yes. With over 20 years of experience in short-term rentals and hospitality, we assign one dedicated manager who knows your property and reports to you regularly — never an anonymous call centre.",
  },
  {
    q: "What if my property isn't suitable for short-term letting?",
    a: "We give you honest advice. If a longer serviced accommodation model or a standard tenancy would suit your property better due to location or lease terms, we will tell you upfront in your free assessment.",
  },
];

export const GUEST_FAQS = [
  {
    q: "What is Ichiban Stays?",
    a: "Ichiban Stays is a short-let and serviced apartment management company operating across London and the UK, with over 20 years of experience in the short-term rental and hospitality market.",
  },
  {
    q: "What is a serviced apartment and how does it differ from a hotel?",
    a: "A serviced apartment is a fully furnished residence available for short or extended stays. It offers significantly more space, a separate living area, and a private kitchen alongside hotel-style housekeeping and 24/7 guest support.",
  },
  {
    q: "How long can guests stay with Ichiban Stays?",
    a: "We accommodate both short stays of a few nights and extended corporate or relocation stays of several weeks or months.",
  },
  {
    q: "How do I book directly with Ichiban Stays?",
    a: "Guests and corporate travel teams can contact us directly at contact@ichibanstays.com or call +44 7572 190291 to check availability and arrange a booking.",
  },
];
