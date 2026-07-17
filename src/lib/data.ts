// Single source of truth — all copy is derived strictly from Sugandha Singh's CV
// (v2 "Performance" resume folded into v1). No numbers, companies, or
// achievements are invented.

export const site = {
  name: "Sugandha Singh",
  role: "Growth Marketing Specialist",
  location: "Delhi NCR",
  url: "https://sugandhaportfolio.vercel.app",
  photo: "/profile.jpg",
  // Hero positioning line.
  tagline:
    "Building growth engines for B2B SaaS. Turning marketing into predictable pipeline through paid acquisition, SEO, content, and lifecycle marketing.",
  email: "s.singh.090396@gmail.com",
  phone: "9873419728",
  linkedin: "https://www.linkedin.com/in/sugandha-singh-bb01a5220/",
  resume: "/resume.pdf",
};

// About — max 3 short sentences, from the CV summary.
export const about = [
  "Full-funnel growth marketer with nearly four years driving acquisition and demand for B2B SaaS and B2C at Fynd (by Reliance).",
  "I own the whole funnel — performance media, HubSpot lifecycle, SEO, content, and sales enablement.",
  "Strategist and operator both: I plan the campaign, ship it, and read the numbers.",
];

// Impact — animated counters. Every value is a real number from the CV.
type Stat = {
  value: number;
  label: string;
  sub: string;
  prefix?: string;
  suffix?: string;
  compact?: boolean;
};
export const impact: Stat[] = [
  { value: 4, suffix: "X", label: "Peak ROAS", sub: "on paid media campaigns" },
  { prefix: "₹", value: 2, label: "Lowest CPI", sub: "B2C real-money gaming app", compact: false },
  { prefix: "₹", value: 2, suffix: "L", label: "Monthly ad budget", sub: "managed across products", compact: false },
  { value: 1500, suffix: "+", label: "LinkedIn followers", sub: "grown from 0, organically" },
  { value: 60000, suffix: "+", label: "YouTube views", sub: "channel built from scratch" },
  { value: 25, suffix: "%", label: "Newsletter open rate", sub: "recurring HubSpot sends" },
];

export const experience = {
  company: "Fynd",
  parent: "by Reliance",
  period: "2022 — June 2026",
  role: "Growth Marketing Specialist",
  // Product she grew is GlamAR (per CV).
  note: "Owning growth across paid, lifecycle, organic, and enablement.",
  tabs: [
    {
      id: "performance",
      label: "Performance Marketing",
      bullets: [
        "Owned end-to-end paid campaigns on Google, Meta & LinkedIn — targeting, creative, budgets, and reporting.",
        "Managed up to ₹2L/month in ad spend across B2B SaaS and B2C, optimizing CTR, CPC, CPL, CPI, ROAS & conversion.",
        "Drove up to 4X ROAS through data-led audience targeting and creative A/B testing.",
        "Hit CPI as low as ₹2 on a B2C real-money gaming app via tight segmentation and optimization.",
      ],
    },
    {
      id: "demand",
      label: "Demand Generation",
      bullets: [
        "Planned and ran multi-channel demand-gen across paid, email, influencer, events, SEO, and organic social.",
        "Represented the company at India Mobile Congress and AI-Summit 2026 — demoing products and generating leads.",
        "Ran influencer campaigns end to end, from creator discovery and outreach to content review and on-time delivery.",
        "Owned audience segmentation and campaign optimization across every channel.",
      ],
    },
    {
      id: "lifecycle",
      label: "Lifecycle Marketing",
      bullets: [
        "Built nurture journeys, audience segments, and automated workflows in HubSpot.",
        "Ran recurring newsletters at a ~25% average open rate, driving nurture, MQLs, and engagement.",
        "Managed lead enrichment, behavioral tracking, lifecycle stages, and marketing-to-sales handoff.",
      ],
    },
    {
      id: "content",
      label: "Content & SEO",
      bullets: [
        "Grew GlamAR's LinkedIn from 0 to 1,500+ followers organically — 12,000+ monthly impressions.",
        "Built the YouTube channel from scratch to 1,300+ subscribers and 60,000+ views.",
        "Ran on-page SEO — meta, alt tags, internal linking, keyword and landing-page optimization — plus link-building.",
        "Used Ahrefs & SEMrush for keyword research and competitor analysis to grow organic traffic.",
      ],
    },
    {
      id: "enablement",
      label: "Sales Enablement",
      bullets: [
        "Built a centralized Sales Enablement Hub in Notion for case studies, decks, and collateral.",
        "Owned pitch decks, one-pagers, landing pages, and customer-facing assets end to end.",
        "Partnered with Product, Sales & Leadership on launches, enterprise sales, and GTM initiatives.",
      ],
    },
  ],
};

// Featured achievements — cards. Each maps to a real CV line.
export const achievements = [
  {
    metric: "4X ROAS",
    title: "Scaled paid media profitably",
    detail: "Up to 4X return on ad spend across Google, Meta & LinkedIn through data-led targeting and creative testing.",
  },
  {
    metric: "₹2 CPI",
    title: "Drove ultra-efficient acquisition",
    detail: "Cut cost-per-install to as low as ₹2 for a B2C real-money gaming app via tight segmentation.",
  },
  {
    metric: "0 → 1,300+",
    title: "Built a YouTube channel from scratch",
    detail: "Grew to 1,300+ subscribers and 60,000+ organic views with a self-built educational library.",
  },
  {
    metric: "0 → 1,500+",
    title: "Grew LinkedIn organically",
    detail: "Community-led growth to 1,500+ followers and 12,000+ monthly impressions.",
  },
  {
    metric: "On stage",
    title: "Represented the company at industry events",
    detail: "India Mobile Congress & AI-Summit 2026 — product demos and lead generation.",
  },
  {
    metric: "Notion Hub",
    title: "Owned the sales enablement stack",
    detail: "Centralized decks and collateral — plus SEO pages that became top inbound lead sources.",
  },
];

// Selected Work — proof of work, from the work-samples PDF. Links stay clickable.
export const selectedWork = [
  {
    id: "success-stories",
    category: "Customer Success Stories & Sales Enablement",
    overview:
      "Owned customer success stories end to end — sourcing customers, running interviews, writing enterprise-ready narratives, and publishing.",
    contributions: [
      "Sourced customers and ran interviews to surface measurable outcomes.",
      "Wrote enterprise-ready narratives and managed stakeholder + client approvals.",
      "Partnered with sales & marketing to put the assets to work.",
    ],
    impact: [
      "Stories became some of the most-visited pages on the site.",
      "Lifted engagement and form submissions with credible social proof.",
      "Armed sales for enterprise conversations — supported wins like Titan & Asaya.",
    ],
    links: [
      { label: "Lowcostglasses", href: "https://www.glamar.io/customer-stories/lowcostglasses" },
      { label: "Foxtale", href: "https://www.glamar.io/customer-stories/foxtale" },
      { label: "White Cut Diamonds", href: "https://www.glamar.io/customer-stories/whitecutdiamonds" },
    ],
  },
  {
    id: "organic-social",
    category: "Organic Social & Thought Leadership",
    overview:
      "Built and ran a multi-format organic strategy across LinkedIn & YouTube to drive awareness, educate prospects, and generate inbound.",
    contributions: [
      "Produced product demos, educational content, and customer stories.",
      "Ran product-launch campaigns and industry-trend posts.",
      "Built founder thought leadership.",
    ],
    impact: [
      "Consistent organic engagement and stronger visibility with retail & beauty brands.",
      "One LinkedIn post sparked inbound from Pilgrim — later a customer.",
    ],
    links: [
      { label: "LinkedIn — CGI visual storytelling", href: "https://www.linkedin.com/posts/cgi-visualstorytelling-motiondesign-ugcPost-7349362140173991936-KHig/" },
      { label: "LinkedIn — Retail innovation (phygital)", href: "https://www.linkedin.com/posts/dharmendra-mehta_glamar-retailinnovation-phygital-ugcPost-7356902655685799936-lK9o/" },
      { label: "LinkedIn — GlamAR product post", href: "https://www.linkedin.com/posts/your-mirror-shows-you-your-face-glamar-shows-ugcPost-7429450543015587841-ykEY/" },
      { label: "LinkedIn — AR advertising / WebAR", href: "https://www.linkedin.com/posts/augmentedreality-aradvertising-webar-ugcPost-7351516155993305090-4reu/" },
      { label: "YouTube — GlamAR channel", href: "https://www.youtube.com/@Glamario/playlists" },
      { label: "YouTube — Short", href: "https://youtube.com/shorts/gQ7m-JF7-cI" },
    ],
  },
  {
    id: "website-seo",
    category: "Website Strategy, Messaging & SEO",
    overview:
      "Owned GlamAR's website content — turning complex AI into clear, outcome-driven messaging built for search visibility and lead gen.",
    contributions: [
      "Owned messaging across solution, industry, and product pages.",
      "Crafted persona- and industry-specific value props; wrote conversion-focused B2B copy.",
      "Ran on-page SEO — keyword research, meta, headers, internal linking, alt text.",
      "Partnered with design & dev from ideation to launch.",
    ],
    impact: [
      "Search-optimized pages built to convert enterprise buyers.",
      "Clear value props that translate complex AI into business outcomes.",
    ],
    links: [
      { label: "Industry — Skincare", href: "https://www.glamar.io/industry/skincare" },
      { label: "Industry — Furniture", href: "https://www.glamar.io/industry/furniture" },
      { label: "Solution — AI Facial Skin Analysis", href: "https://www.glamar.io/solutions/ai-facial-skin-analysis" },
    ],
  },
];

// Tools — grouped, not dumped. Every tool is from the CV.
export const toolGroups = [
  { category: "CRM & Lifecycle", tools: ["HubSpot", "MoEngage", "CleverTap"] },
  { category: "Paid & Analytics", tools: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "Google Analytics (GA4)", "Microsoft Clarity"] },
  { category: "SEO & Content", tools: ["Ahrefs", "SEMrush", "Webflow", "Notion"] },
  { category: "Email & Automation", tools: ["Lemlist", "Mailmodo", "ZeroBounce"] },
  { category: "Data", tools: ["Microsoft Excel"] },
];

// Skills — pills. From CV core skills.
export const skills = [
  "Growth Marketing",
  "Performance Marketing",
  "Demand Generation",
  "Lifecycle Marketing",
  "Paid Advertising",
  "Email Marketing",
  "Sales Enablement",
  "Content & SEO",
  "Marketing Analytics",
  "Cross-Functional Collaboration",
];

export const nav = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
