import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { Dialog, DialogTrigger, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  ArrowRight,
  Sparkles,
  Bot,
  Target,
  PenLine,
  Palette,
  Check,
  X,
  Clock,
  Wallet,
  ShieldCheck,
  Users,
  Compass,
  Eye,
  Flag,
  Heart,
  Star,
  MessageCircle,
  Mail,
  Phone,
  Quote,
  Globe,
  Share2,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

import founderImg from "@/assets/founder-tejas-clear.jpeg";
import heroBg from "@/assets/hero-bg.jpg";
import businessJsonLd from "@/data/pml-schema-final.json";

const siteUrl = "https://www.getperspective.in";
const pageUrl = `${siteUrl}/`;
const web3FormsAccessKey = "fde2369f-69ff-4cab-b539-c957a8e4d189";
const pageTitle = "Perspective Media Labs | Marketing Partner for MSMEs";
const pageDescription = "Strategy-led marketing for Indian MSMEs and startups, with senior attention across brand, content, digital, performance, and automation.";
const socialImageUrl = `${siteUrl}/case-metryx-impact.png`;
const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/perspectivemedialabs", Icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61573664945058", Icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/perspective-media-labs/", Icon: Linkedin },
  { label: "Google Reviews", href: "https://share.google/P3xEBWpkRuwV5Zjdi", Icon: GoogleReviewsIcon },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { name: "author", content: "Perspective Media Labs" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { property: "og:site_name", content: "Perspective Media Labs" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: socialImageUrl },
      { property: "og:image:alt", content: "Perspective Media Labs client work showcase" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
      { name: "twitter:image", content: socialImageUrl },
      { name: "twitter:image:alt", content: "Perspective Media Labs client work showcase" },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(businessJsonLd),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(portfolioJsonLd),
      },
    ],
  }),
  component: LandingPage,
});

function GoogleReviewsIcon({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center font-sans text-[1.05em] font-bold leading-none ${className}`}
      style={{
        background: "conic-gradient(from -35deg, #4285f4 0 28%, #34a853 28% 45%, #fbbc05 45% 66%, #ea4335 66% 82%, #4285f4 82% 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      G
    </span>
  );
}

/* ---------- Data ---------- */

const stats = [
  { value: "5+", label: "Years in the trenches" },
  { value: "Strategy-led", label: "Every engagement" },
  { value: "MSME", label: "Built for Indian founders" },
  { value: "1:1", label: "Senior attention, always" },
];

const clientLogoIndexes = [...Array.from({ length: 21 }, (_, index) => index + 1), 23];
const clientLogos = clientLogoIndexes.map((index) => ({
  src: `/client-logos/logo-${String(index).padStart(2, "0")}.png`,
  alt: index === 7 ? "Fuelcats India Pvt Ltd" : `Perspective Media Labs client logo ${index}`,
  darkBackground: index === 7,
}));

const services = [
  { icon: Compass, title: "Strategy and Positioning", desc: "Sharpen who you are, who you're for, and why you win - before we spend a rupee." },
  { icon: Palette, title: "Brand and Design", desc: "Identity, decks, brochures, stationery, and packaging - designed by specialists, owned by us." },
  { icon: PenLine, title: "Content and Copy", desc: "Weekly content engines that sound like you, not like every other brand on the feed." },
  { icon: Share2, title: "Social Media and Performance", desc: "Organic to paid - content calendars, community management, and Meta, Google, LinkedIn campaigns under one roof." },
  { icon: Globe, title: "Website and Digital Presence", desc: "Landing pages, business websites, GMB, and SEO - one brief, one owner, one finished product." },
  { icon: Bot, title: "AI Automations and Reporting", desc: "Lead capture, WhatsApp automation, CRM hygiene, and monthly reports - One dashboard, one story." },
];

const serviceDetails: Record<string, { intro: string; points: string[]; cta: string }> = {
  "Strategy and Positioning": {
    intro: "Know where to play and what to say.",
    points: ["Market, audience, positioning and messaging.", "Practical strategies built around business goals and budgets.", "Clear priorities. Less marketing guesswork."],
    cta: "Talk Strategy",
  },
  "Brand and Design": {
    intro: "Make your business look as credible as it operates.",
    points: ["Brand identity, presentations, brochures and business collateral.", "Consistent design built around your positioning.", "Creative execution, without agency layers."],
    cta: "Build Your Brand",
  },
  "Content and Copy": {
    intro: "Say something worth remembering.",
    points: ["Content strategy, website copy and social media content.", "B2B storytelling that makes complex businesses easier to understand.", "A clear voice across every channel."],
    cta: "Plan Content",
  },
  "Social Media and Performance": {
    intro: "Be present where your customers actually look.",
    points: ["Organic social media and paid campaigns.", "LinkedIn, Meta and Google - chosen for the objective, not the trend.", "Track what moves from attention to enquiry."],
    cta: "Grow Your Reach",
  },
  "Website and Digital Presence": {
    intro: "Your digital presence should work as hard as your business.",
    points: ["Business websites, landing pages and Google Business Profile.", "SEO built for search and AI discovery.", "One consistent presence across Google, website and social."],
    cta: "Go Digital",
  },
  "AI Automations and Reporting": {
    intro: "Less manual work. Better visibility.",
    points: ["Lead capture, WhatsApp and CRM workflows.", "Automate repetitive marketing tasks without losing control.", "Simple reporting that shows what's working and what's not."],
    cta: "Automate Better",
  },
};

const cases = [
  { img: "/case-ekvira-export-fit.png", tag: "Import Export Trade", industry: "Import Export Trade", title: "Ekvira Export House Pvt. Ltd.", scope: "Full brand, digital, and print communication built from zero for a new Indian merchant export trading firm.", metric: "Full brand, digital, and print communication built from zero", note: "for a new Indian merchant export trading firm.", servicesTags: "Brand Strategy, Website Direction, Content Strategy, Creative Direction, WhatsApp Automation, Performance Marketing", seoMetaDescription: "How Perspective Media Labs built brand and marketing infrastructure for a new Pune import export firm - generating a $12,000 first order.", stats: [{ v: "$15,000", l: "First B2B order value from a single Meta lead" }, { v: "₹224", l: "Average cost per lead — international B2B campaigns" }, { v: "$60,000+", l: "Estimated pipeline value built from qualified leads" }] },
  { img: "/case-metryx-impact.png", tag: "Civil Infrastructure", industry: "Civil Infrastructure", title: "Impact Infraheights Pvt Ltd", scope: "Digital revival for a Pune civil engineering firm — brand, website, brochure, social media, and GMB.", metric: "60% cheaper qualified leads", note: "LinkedIn ABM + intent-based nurture", servicesTags: "Social Media, Content Strategy, GMB Optimization, LinkedIn Strategy, Website Development", seoMetaDescription: "How Perspective Media Labs rebuilt digital presence for a Pune civil infrastructure firm: 59K+ LinkedIn impressions, 85+ GMB reviews, 5 platforms managed.", stats: [{ v: "59,731", l: "LinkedIn impressions generated in 12 months — organic, zero ad spend" }, { v: "+228.6%", l: "GMB growth year on year — real business intent, not vanity numbers" }, { v: "45K+", l: "Combined Meta organic reach — Facebook + Instagram in 10 months" }] },
  { img: "/skill-spark-card.png", tag: "HR CONSULTANCY SERVICES", industry: "HR CONSULTANCY SERVICES", title: "Skill Spark Consulting", scope: "Brand launch for a PCMC placement firm - identity, trademark, website, and collateral built from zero.", metric: "Complete brand launch", note: "for a new PCMC based placement firm; identity, trademark, digital presence, and collateral built from zero.", servicesTags: "Brand Strategy, Creative Direction, Social Media, GMB Optimization, LinkedIn Strategy, SEO, Website Development", seoMetaDescription: "How PML launched a Pune placement firm's full brand: trademark, GMB, social, and a website now cited organically by ChatGPT - zero ad spend.", stats: [{ v: "418 Users", l: "Organic website traffic - zero paid advertising" }, { v: "Traffic Source: ChatGPT", l: "AI platforms driving 153 sessions unprompted" }, { v: "160 Sessions", l: "Google organic reach within months of going live" }] },
  { img: "/rushivan-agro-card.png", tag: "AGRI-TOURISM", industry: "Consumer Fintech", title: "Rushivan Aagro", scope: "End-to-end digital build and marketing overhaul for a Pune-area farm stay and agri-tourism brand.", metric: "End-to-end digital build", note: "and marketing overhaul for a Pune-area farm stay and agri-tourism brand.", servicesTags: "Website Direction, Expo Branding, Creative Direction, Social Media, Performance Marketing, Digital Organization", seoMetaDescription: "Perspective Media Labs built a Razorpay-powered booking website, expo branding, and revived social media for Pune agri-tourism brand Rushivan Agro.", stats: [{ v: "5×", l: "App installs QoQ" }, { v: "60 days", l: "Optimization sprint" }, { v: "Full funnel", l: "Paid + ASO + lifecycle" }] },
  { img: "/healing-waves-card.png", tag: "HEALTHCARE", industry: "Regenerative Healthcare", title: "Healing Waves Clinic", scope: "Full-stack marketing concierge for a 4-branch Pune orthopaedic clinic - from zero systems to measurable growth.", metric: "A Big Wave In Healing Technology", note: "Clinic website + patient communication", servicesTags: "Digital Organisation, WhatsApp Automation, LinkedIn Strategy, Content Strategy, Website Direction", seoMetaDescription: "How Perspective Media Labs built marketing infrastructure for a 4-branch Pune orthopaedic clinic: systems, agency oversight, and 1,072% LinkedIn growth in 28 days.", stats: [{ v: "1,072%", l: "LinkedIn impression growth in 28 days" }, { v: "0 -> 85%", l: "Revenue tracking accuracy built from scratch" }, { v: "7 months", l: "End-to-end concierge across 4 clinics and 2 agencies" }] },
  { img: "/homepage screenshot.png", tag: "FINANCIAL SERVICES", industry: "FINANCIAL SERVICES", title: "Jagruti Cooperative Credit Society Ltd.", scope: "Modernising the digital presence of a trusted cooperative credit society with decades of community legacy.", metric: "Modernising a trusted legacy", note: "through one consistent digital presence.", servicesTags: "Brand Strategy, Website Development, Social Media, Digital Organization, GMB Optimization, SEO", seoMetaDescription: "How Perspective Media Labs modernised Jagruti Credit Society's 1998 legacy with a premium website, social presence and Google optimisation.", stats: [{ v: "1998", l: "Society established with community-first values" }, { v: "1 New website", l: "Legacy brought into a modern digital format" }, { v: "3 Digital channels", l: "Website, social and Google presence" }] },
];

const toAbsoluteUrl = (path: string) => (path.startsWith("http") ? path : `${siteUrl}${path}`);

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Perspective Media Labs case studies",
  itemListElement: cases.map((caseStudy, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: caseStudy.title,
      about: caseStudy.industry,
      description: caseStudy.seoMetaDescription ?? caseStudy.scope,
      keywords: caseStudy.servicesTags,
      image: toAbsoluteUrl(caseStudy.img),
      publisher: {
        "@type": "Organization",
        name: "Perspective Media Labs",
        url: siteUrl,
      },
    },
  })),
};

const ekviraScreenshots = [
  { src: "/ekvira-logo.png", alt: "Ekvira Export House logo" },
  { src: "/ekvira-products-page.png", alt: "Ekvira Export House products page" },
  { src: "/ekvira-export-process.png", alt: "Ekvira Export House export process page" },
  { src: "/ekvira-about-page.png", alt: "Ekvira Export House about page" },
];

const impactScreenshots = [
  { src: "/impact-infraheights-logo.png", alt: "Impact Infraheights Pvt Ltd logo" },
  { src: "/impact-proof-excellence.png", alt: "Impact Infraheights proven excellence" },
  { src: "/impact-md-profile.png", alt: "Impact Infraheights managing director profile" },
  { src: "/impact-projects.png", alt: "Impact Infraheights project categories" },
];

const skillSparkScreenshots = [
  { src: "/skill-spark-logo-full.png", alt: "Skill Spark Consulting logo" },
  { src: "/skill-spark-popup-02.png", alt: "Skill Spark Consulting about section screenshot" },
  { src: "/skill-spark-popup-03.png", alt: "Skill Spark Consulting employer section screenshot" },
  { src: "/skill-spark-popup-04.png", alt: "Skill Spark Consulting employee section screenshot" },
];

const rushivanScreenshots = [
  { src: "/rushivan-agro-logo-clear.png", alt: "Rushivan Aagro logo" },
  { src: "/rushivan-agro-popup-02.png", alt: "Rushivan Aagro corporate gifting screenshot" },
  { src: "/rushivan-agro-popup-03.png", alt: "Rushivan Aagro farm stay screenshot" },
  { src: "/rushivan-agro-popup-04.png", alt: "Rushivan Aagro product shop screenshot" },
];

const healingWavesScreenshots = [
  { src: "/healing-waves-logo.png", alt: "Healing Waves Clinic logo" },
  { src: "/healing-waves-popup-02.png", alt: "Healing Waves e-STARR protocol steps screenshot" },
  { src: "/healing-waves-popup-03.png", alt: "Healing Waves focused shockwave therapy screenshot" },
  { src: "/healing-waves-popup-04.png", alt: "Healing Waves Clinic about section screenshot" },
];

const jagrutiScreenshots = [
  { src: "/jagruti-logo-clean.png", alt: "Jagruti Cooperative Credit Society logo" },
  { src: "/homepage screenshot.png", alt: "Jagruti Cooperative Credit Society website homepage" },
  { src: "/product screenshot.png", alt: "Jagruti Cooperative Credit Society products page" },
  { src: "/core values.png", alt: "Jagruti Cooperative Credit Society core values page" },
];

const compare = [
  {
    key: "cost",
    label: "Cost model",
    inhouse: "High fixed salaries + tools",
    agency: "Retainers + hidden addons",
    us: "Flexible, outcome-linked",
  },
  {
    key: "expertise",
    label: "Expertise",
    inhouse: "Limited to who you hired",
    agency: "Junior teams, senior pitches",
    us: "Senior operators, strategy-led",
  },
  {
    key: "speed",
    label: "Speed to launch",
    inhouse: "Weeks of hiring & ramp",
    agency: "Onboarding + approval chains",
    us: "Live in days, not months",
  },
  {
    key: "attention",
    label: "Ownership",
    inhouse: "Everyone owns it, no one owns it",
    agency: "Passed between account managers",
    us: "One concierge, one accountable owner",
  },
  {
    key: "strategy",
    label: "Strategy fit",
    inhouse: "In-the-weeds thinking",
    agency: "Templated playbooks",
    us: "Built around your business, not ours",
  },
];

const testimonials = [
  { name: "Shubham Manmode", role: "Director, Nivesah Weddings", initials: "SM", quote: "Perfect work. On-time delivery and very creative development. Highly satisfied with the overall work." },
  { name: "Rushikesh Yadav", role: "Director, Impact Infraheights Pvt Ltd", initials: "RY", quote: "They understood our SaaS funnel in one call. Two months in, our CAC is half of what it was - with better leads." },
  { name: "Jaydeep Gole", role: "Director, Jagruti Co-op Credit Society", initials: "JG", quote: "We had a wonderful experience working with PML on our Jagruti Co-op Credit Society website. Tejas is young, talented, professional, and understands requirements very well. His dedication and creative approach helped us build a website that reflects our organization effectively." },
  { name: "Hemant Bhamare", role: "Director, Ekvira Export House Pvt Ltd", initials: "HB", quote: "The AI automations they set up quietly run our lead ops. It's the most leverage we've ever gotten from a marketing partner." },
];

const values = [
  { icon: Eye, title: "Vision", text: "Make world-class marketing accessible to every Indian MSME - not just the funded few." },
  { icon: Flag, title: "Mission", text: "Be the concierge that founders trust to think, execute, and report - where the right tools quietly do what tools should, so your concierge can focus on what actually matters." },
  { icon: Heart, title: "Values", text: "Honesty over hype. Craft over volume. Outcomes over optics. Long games over quick wins." },
];

const approach = [
  { word: "Perspective", desc: "We start where every good strategy starts - understanding your business, your customer, and your market from the inside out." },
  { word: "Media", desc: "Then we build the channels, creative, and campaigns that actually move the needle - not vanity metrics." },
  { word: "Labs", desc: "We use smart tools and automation to measure, iterate, and improve everything quietly in the background. Nothing runs blind. Everything runs better." },
];

const legalDocuments = [
  {
    title: "Privacy Policy",
    updated: "Last updated: 2026",
    intro: "Perspective Media Labs values your privacy. This policy explains how we collect, use, and protect the information shared with us through this website, forms, calls, WhatsApp, email, and related business communication.",
    sections: [
      {
        heading: "Information we collect",
        text: "We may collect your name, company name, phone number, email address, website, business requirements, and any message or project details you choose to share with us.",
      },
      {
        heading: "How we use your information",
        text: "We use this information to respond to enquiries, schedule audits or consultations, prepare proposals, deliver marketing services, improve our communication, and maintain client records.",
      },
      {
        heading: "Data sharing",
        text: "We do not sell your personal information. We may share necessary details with trusted service providers only when required to operate our business, deliver services, or comply with applicable law.",
      },
      {
        heading: "Cookies and analytics",
        text: "Our website may use basic analytics, pixels, or similar tools to understand website performance, campaign effectiveness, and visitor behaviour.",
      },
      {
        heading: "Contact",
        text: "For privacy-related requests, contact us at connect@perspectivemedialabs.com.",
      },
    ],
  },
  {
    title: "Terms & Conditions",
    updated: "Last updated: 2026",
    intro: "By accessing this website or submitting an enquiry, you agree to the following terms for using Perspective Media Labs' website and communication channels.",
    sections: [
      {
        heading: "Website use",
        text: "The content on this website is provided for general information about our services, case studies, and approach. It should not be treated as a guaranteed business, marketing, financial, or legal outcome.",
      },
      {
        heading: "Service engagement",
        text: "Any project, retainer, campaign, or consulting engagement will be governed by the specific proposal, quotation, invoice, scope of work, or agreement shared with the client.",
      },
      {
        heading: "Intellectual property",
        text: "Website content, visuals, brand assets, text, and case study material belong to Perspective Media Labs or their respective owners and may not be copied or reused without permission.",
      },
      {
        heading: "Third-party platforms",
        text: "We may recommend or use third-party tools, advertising platforms, hosting providers, automation systems, and analytics services. Their own terms and policies will also apply.",
      },
      {
        heading: "Contact",
        text: "For questions about these terms, contact us at connect@perspectivemedialabs.com.",
      },
    ],
  },
];

const faqs = [
  {
    question: "What is a marketing concierge?",
    answer: "Your marketing department without building one. Think of it as having an outsourced CMO who already knows your business — one senior partner handling strategy, social media, creative projects, and digital organisation. One annual fee. One point of contact. You run your business. We run your marketing.",
  },
  {
    question: "How is this different from hiring an agency?",
    answer: "Agencies rotate junior teams, hide margins in bundled retainers, and deliver templated work. With us, the person doing the thinking is the person you talk to. Creative work is billed at actuals. You see every invoice. Zero markups. Zero surprises.",
  },
  {
    question: "What does the partnership include?",
    answer: "Strategic planning, brand positioning, 10-12 social media posts monthly, Google My Business management, WhatsApp and AI automation setup, digital file organization, and complete creative project management. Strategy is covered in your fee. Creative execution is billed separately at actual cost.",
  },
  {
    question: "Do you mark up creative costs?",
    answer: "No. When you need a website, brochure, video, or packaging, we get you 2-3 quotes from vetted specialists. You pick. Our direction and project management is already included. No hidden fees.",
  },
  {
    question: "Which industries do you work with?",
    answer: "MSMEs and startups across healthcare, real estate, manufacturing, agri-business, technology, professional services, hospitality, and import-export. If your business is doing Rs. 2-50 crore and your marketing feels scattered or expensive for what you get, this partnership is built for you.",
  },
  {
    question: "Do you work with businesses outside Pune?",
    answer: "Yes. We serve clients across Maharashtra, India, and internationally including UAE, UK, Europe, and Australia. The concierge model works seamlessly over remote collaboration with the same quality and responsiveness.",
  },
  {
    question: "Is this only for large businesses?",
    answer: "No. This is specifically designed for growing MSMEs and startups that need serious marketing leadership but cannot justify a Rs. 50,000–70,000 monthly agency retainer or a full-time marketing hire at Rs. 4–6 lakh per year. The outsourced CMO model gives you both; senior strategic ownership and hands-on execution — at a fraction of either cost.",
  },
  {
    question: "What AI and automation do you set up?",
    answer: "Practical tools that save your team 2-3 hours daily. WhatsApp AI chatbot for 24/7 customer response. Automated lead capture with instant team alerts. Google review collection on autopilot. Custom AI prompts for your team to draft professional messages in seconds. No complex software. No expensive subscriptions. All set up by us.",
  },
  {
    question: "How quickly can we start seeing results?",
    answer: "Tangible deliverables within 10 days. Social media live within 2 weeks. AI automations and digital organization set up in month one. By month 3, your communication runs consistently without the founder spending time on it.",
  },
  {
    question: "How do I get in touch?",
    answer: "Simple. Email us at connect@perspectivemedialabs.com or call/WhatsApp on 8668411092. Start with a free 30-minute conversation. No pitch deck. No obligation. Just an honest look at your current communication and the 2-3 things we would fix first.",
  },
];

/* ---------- Page ---------- */

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <StatsBar />
      <Clientele />
      <Services />
      <Values />
      <Comparison />
      <Savings />
      <Approach />
      <Portfolio />
      <Testimonials />
      <Founder />
      <FaqSection />
      <ContactSection />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

/* ---------- Nav ---------- */

function Nav() {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#approach", label: "Approach" },
    { href: "#founder", label: "Founder" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="container-page flex h-20 items-center justify-between gap-2 py-2 md:h-24">
        <a href="#top" className="flex items-center gap-3 min-w-0">
          <img src="/logo main.png" alt="Perspective Media Labs" className="h-14 w-auto max-w-[58vw] shrink-0 object-contain md:h-16 md:max-w-none" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-navy-soft hover:text-primary-deep transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary shrink-0 px-3 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm">
          Book a call <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="top" className="relative hero-bg overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "right center", maskImage: "linear-gradient(to left, black, transparent 70%)" }}
      />
      <div className="container-page relative grid items-center gap-8 pb-16 pt-5 md:grid-cols-12 md:gap-10 md:pb-32 md:pt-12">
        <div className="md:col-span-7 animate-fade-up text-center md:text-left">
          <span className="eyebrow"><Sparkles className="w-3.5 h-3.5 shrink-0" /> India's first marketing concierge for growing businesses</span>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.05] text-navy sm:text-5xl md:mt-6 md:text-7xl md:leading-[1.02]">
            Marketing that runs
            <span className="block italic text-primary-deep">like it's yours.</span>
          </h1>
          <p className="mt-6 max-w-xl text-left text-base leading-relaxed text-navy-soft sm:text-lg">
            Your outsourced CMO and marketing partner for Indian MSMEs — strategy, execution, and accountability under one senior relationship.
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
            <a href="#contact" className="btn-primary">Start with a free audit <ArrowRight className="w-4 h-4" /></a>
            <a href="#work" className="btn-ghost">See our work</a>
          </div>
          <div className="mt-10 flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {["A", "R", "S", "V"].map((c) => (
                <div key={c} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-deep text-primary-foreground grid place-items-center text-xs font-semibold ring-2 ring-background">{c}</div>
              ))}
            </div>
            <span>Trusted by founders across D2C, SaaS, F&B and manufacturing.</span>
          </div>
        </div>
        <div className="md:col-span-5 relative animate-fade-up">
          <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-[var(--shadow-elegant)]">
            <div className="p-6 bg-gradient-to-br from-primary-deep to-navy text-primary-foreground">
              <div className="text-2xl font-semibold leading-tight sm:text-3xl">
                Is your marketing actually working or just existing?
              </div>
            </div>
            <div className="p-6 space-y-5">
              <p className="border-l-4 border-primary pl-4 text-xl font-semibold leading-snug text-primary-deep sm:text-2xl">
                68% of Indian MSMEs have never defined their positioning.
              </p>
              <div className="border-t border-border pt-5 text-navy">
                <p className="text-base leading-relaxed sm:text-lg">Most businesses don't have a marketing problem.</p>
                <p className="mt-1 text-base font-semibold leading-relaxed sm:text-lg">They have a clarity problem.</p>
              </div>
              <p className="border-t border-border pt-5 text-xl font-semibold text-primary-deep">Let's fix yours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats bar ---------- */

function StatsBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-page grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
        {stats.map((s) => (
          <div key={s.label} className="py-8 px-6 text-center">
            <div className="font-serif text-3xl md:text-4xl font-semibold text-primary-deep">{s.value}</div>
            <div className="mt-1 text-sm text-navy-soft">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Clientele ---------- */

function Clientele() {
  return (
    <section className="py-16">
      <div className="container-page text-center">
        <p className="text-xs tracking-widest uppercase text-muted-foreground">Trusted by leading brands</p>
      </div>
      <div className="client-logo-marquee mt-8 overflow-hidden">
        <div className="flex w-max items-center gap-4 whitespace-nowrap animate-marquee sm:gap-6 md:gap-8">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div key={`${logo.src}-${i}`} className="flex h-24 w-40 shrink-0 items-center justify-center px-2 sm:h-28 sm:w-52 md:h-36 md:w-72">
              <img src={logo.src} alt={logo.alt} className={`max-h-20 max-w-full object-contain transition-transform hover:scale-105 sm:max-h-24 md:max-h-32 ${logo.darkBackground ? "rounded-lg bg-navy p-2 md:rounded-xl md:p-3" : "mix-blend-multiply"}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */

function Services() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-navy">One concierge. Six capabilities. Zero handoffs.</h2>
          <p className="mt-4 text-navy-soft text-lg">Everything a modern marketing team does - folded into one senior relationship, briefed and delivered by us.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="card-elevated p-8 flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-deep grid place-items-center text-primary-foreground">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 flex-1 text-navy-soft leading-relaxed">{s.desc}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" className="mt-6 self-center md:self-start inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary-deep transition-colors hover:bg-primary-deep hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer" aria-label={`Know more about ${s.title}`}>
                    Know more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </DialogTrigger>
                <DialogContent className="w-[calc(100%-1.5rem)] max-w-md max-h-[88dvh] overflow-y-auto rounded-2xl border-primary/20 bg-card p-5 sm:p-8">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 select-none overflow-hidden opacity-[0.12]"
                  >
                    <img
                      src="/logo main.png"
                      alt=""
                      draggable={false}
                      className="absolute -left-5 -top-1 h-52 w-auto max-w-none"
                    />
                  </div>
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-deep grid place-items-center text-primary-foreground">
                    <s.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <DialogHeader className="relative text-left">
                    <DialogTitle className="font-serif text-2xl leading-tight text-navy">{s.title}</DialogTitle>
                    <DialogDescription className="pt-2 text-navy-soft leading-relaxed">{serviceDetails[s.title].intro}</DialogDescription>
                  </DialogHeader>
                  <ul className="relative space-y-3 border-t border-border pt-4">
                    {serviceDetails[s.title].points.map((detail) => (
                      <li key={detail} className="flex gap-3 text-sm leading-relaxed text-navy-soft">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary-deep" aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <DialogClose asChild>
                    <a href="#contact" className="btn-primary relative mt-1 w-fit text-sm">
                      {serviceDetails[s.title].cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </DialogClose>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Creative work across design, print, web, and video is executed through our curated network of vetted specialists-briefed, managed, and reported by us. You pay actuals. Always.
        </p>
      </div>
    </section>
  );
}

/* ---------- Comparison ---------- */

function Comparison() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">The concierge model</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-navy">Not a hire. Not an agency. Something better.</h2>
          <p className="mt-4 text-navy-soft text-lg">A smarter way to run marketing - less overhead, more ownership, real outcomes.</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1.1fr_1.1fr_1.4fr] gap-6">
          <ComparisonCard variant="muted" title="In-house team" items={compare.map((r) => r.inhouse)} labels={compare.map((r) => r.label)} bad />
          <ComparisonCard variant="muted" title="Traditional agency" items={compare.map((r) => r.agency)} labels={compare.map((r) => r.label)} bad />
          <ComparisonCard variant="primary" title="The PML Model" items={compare.map((r) => r.us)} labels={compare.map((r) => r.label)} />
        </div>
      </div>
    </section>
  );
}

function ComparisonCard({ variant, title, items, labels, bad }: { variant: "muted" | "primary"; title: string; items: string[]; labels: string[]; bad?: boolean }) {
  const primary = variant === "primary";
  return (
    <div
      className={`rounded-3xl p-8 border ${primary ? "text-primary-foreground border-transparent shadow-[var(--shadow-elegant)]" : "bg-card border-border shadow-[var(--shadow-card)]"}`}
      style={primary ? { background: "var(--gradient-primary)" } : undefined}
    >
      <div className="flex items-center justify-between">
        <h3 className={`font-serif text-2xl font-semibold ${primary ? "text-primary-foreground" : "text-navy"}`}>{title}</h3>
        {primary && <span className="text-xs font-semibold uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full">Us</span>}
      </div>
      <ul className="mt-6 space-y-4">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3">
            <span className={`mt-0.5 w-6 h-6 rounded-full grid place-items-center shrink-0 ${primary ? "bg-white/20" : bad ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary-deep"}`}>
              {bad ? <X className="w-3.5 h-3.5" /> : <Check className={`w-3.5 h-3.5 ${primary ? "text-white" : ""}`} />}
            </span>
            <div className="min-w-0">
              <div className={`text-[11px] font-semibold uppercase tracking-widest ${primary ? "text-white/70" : "text-muted-foreground"}`}>{labels[i]}</div>
              <div className={`text-sm ${primary ? "text-primary-foreground" : "text-navy"}`}>{it}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Savings ---------- */

function Savings() {
  const items = [
    { icon: Clock, big: "20+ hrs", label: "Saved every week", note: "No hiring, no vendor herding, no status calls." },
    { icon: Wallet, big: "60%", label: "Lower fixed cost", note: "Pay for outcomes, not for people warming chairs." },
    { icon: ShieldCheck, big: "1 owner", label: "End-to-end accountability", note: "One WhatsApp thread, one number that answers." },
  ];
  return (
    <section className="py-24 bg-navy text-primary-foreground relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(600px 300px at 20% 0%, oklch(0.66 0.11 210 / 0.5), transparent 60%)" }} />
      <div className="container-page relative">
        <div className="max-w-2xl">
          <span className="eyebrow">Time & cost</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-semibold">Founder time is the real budget.</h2>
          <p className="mt-4 text-white/70 text-lg">We measure success not just in ROAS - but in the hours we hand back to you.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.label} className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur">
              <i.icon className="w-8 h-8 text-primary" />
              <div className="mt-6 font-serif text-5xl font-semibold">{i.big}</div>
              <div className="mt-1 font-semibold">{i.label}</div>
              <p className="mt-3 text-sm text-white/70">{i.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Approach ---------- */

function Approach() {
  return (
    <section id="approach" className="py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Our approach</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-navy">The name is the method.</h2>
          <p className="mt-4 text-navy-soft text-lg">Perspective. Media. Labs. Three words. One way of working.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {approach.map((a, i) => (
            <div key={a.word} className="relative p-8 rounded-3xl border border-border bg-surface">
              <div className="font-serif text-6xl font-semibold text-primary/20 absolute top-4 right-6">0{i + 1}</div>
              <h3 className="font-serif text-3xl font-semibold text-primary-deep">{a.word}<span className="text-navy">.</span></h3>
              <p className="mt-4 text-navy-soft leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Portfolio ---------- */

function Portfolio() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx !== null ? cases[openIdx] : null;
  const activeScreenshots = active?.title === "Ekvira Export House Pvt. Ltd." ? ekviraScreenshots : active?.title === "Impact Infraheights Pvt Ltd" ? impactScreenshots : active?.title === "Skill Spark Consulting" ? skillSparkScreenshots : active?.title === "Rushivan Aagro" ? rushivanScreenshots : active?.title === "Healing Waves Clinic" ? healingWavesScreenshots : active?.title === "Jagruti Cooperative Credit Society Ltd." ? jagrutiScreenshots : null;

  useEffect(() => {
    if (active) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenIdx(null); };
      window.addEventListener("keydown", onKey);
      return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
    }
  }, [active]);

  const handleCta = () => {
    setOpenIdx(null);
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <section id="work" className="py-24 bg-surface">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Results that speak</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-navy">Work we're proud of.</h2>
            <p className="mt-4 text-navy-soft text-lg">A snapshot of what happens when strategy, creative, and smart execution actually work together.</p>
          </div>
          <a href="#contact" className="btn-ghost text-sm">Get a similar plan <ArrowRight className="w-4 h-4" /></a>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <button
              key={c.title}
              type="button"
              onClick={() => setOpenIdx(i)}
              style={i < 3 ? { display: "block", margin: 0, padding: 0, verticalAlign: "top", backgroundImage: `url(${c.img})`, backgroundPosition: "top center", backgroundRepeat: "no-repeat", backgroundSize: "100% auto" } : undefined}
              className="group card-elevated block w-full min-w-0 self-start overflow-hidden p-0 align-top text-left"
            >
              {i < 3 ? (
                <div aria-hidden="true" className="w-full" style={{ aspectRatio: "1896 / 882" }} />
              ) : (
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className={`block w-full object-cover aspect-[1896/882] transition-transform duration-500 group-hover:scale-105 ${c.title === "Jagruti Cooperative Credit Society Ltd." ? "object-left" : "object-center"}`}
                />
              )}
              <div className="px-6 py-4 min-h-[168px] md:h-[176px] md:overflow-hidden">
                <div className="text-xs font-semibold uppercase tracking-widest text-primary-deep">{c.tag}</div>
                <h3 className={`mt-2 font-serif font-semibold text-navy ${c.title === "Jagruti Cooperative Credit Society Ltd." ? "text-lg leading-snug" : "text-xl"}`}>{c.title}</h3>
                <p className={`${c.title === "Jagruti Cooperative Credit Society Ltd." ? "mt-2 text-sm leading-normal" : "mt-3 text-base leading-relaxed"} text-navy-soft`}>{i === 0 ? `${c.metric} ${c.note}` : c.scope}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} case study`}
          className="fixed inset-0 z-[60] grid place-items-center p-2 sm:p-4 md:p-8 bg-navy/70 backdrop-blur-sm animate-fade-up"
          onClick={() => setOpenIdx(null)}
        >
          <div
            className="relative bg-white text-navy rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[var(--shadow-elegant)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenIdx(null)}
              aria-label="Close"
              className="absolute top-4 right-4 h-10 w-10 rounded-full grid place-items-center bg-surface hover:bg-primary/10 text-navy hover:text-primary-deep transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-5 sm:p-8 md:p-10 border-b border-border">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary-deep bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">{active.industry}</span>
              </div>
              <h3 className="mt-4 font-serif text-3xl md:text-4xl font-semibold text-navy">{active.title}</h3>
              <p className="mt-3 text-navy-soft leading-relaxed max-w-2xl">{active.scope}</p>
            </div>

            <div className="p-5 sm:p-8 md:p-10 border-b border-border">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Platform screenshots</div>
              <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2 snap-x snap-mandatory">
                {activeScreenshots ? activeScreenshots.map((screenshot, index) => (
                  <div
                    key={screenshot.src || `blank-${index}`}
      className={`shrink-0 w-72 md:w-80 overflow-hidden rounded-2xl border border-border snap-start ${active?.title === "Ekvira Export House Pvt. Ltd." && index === 0 ? "bg-[#ffb719]" : active?.title === "Healing Waves Clinic" && index === 0 ? "bg-[#363b3f]" : (active?.title === "Impact Infraheights Pvt Ltd" || active?.title === "Skill Spark Consulting" || active?.title === "Rushivan Aagro" || active?.title === "Jagruti Cooperative Credit Society Ltd.") && index === 0 ? "bg-white" : "bg-surface"}`}
                    style={{ aspectRatio: "16 / 9" }}
                  >
                    {screenshot.src && (
                      <img
                        src={screenshot.src}
                        alt={screenshot.alt}
                        loading="lazy"
                        className="block h-full w-full object-contain"
                      />
                    )}
                  </div>
                )) : [1, 2, 3, 4].map((n) => (
                  <div key={n} className="shrink-0 w-72 h-44 rounded-2xl bg-gradient-to-br from-surface to-accent/40 border border-border grid place-items-center text-sm text-muted-foreground">
                    Platform screenshot {n}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 sm:p-8 md:p-10 border-b border-border">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {active.stats.map((s) => (
                  <div key={s.l} className="rounded-2xl border border-border bg-surface p-5">
                    <div className={`font-serif font-semibold leading-tight text-primary-deep ${s.v.length > 18 ? "text-2xl" : "text-3xl"}`}>{s.v}</div>
                    <div className="mt-2 text-sm leading-snug text-navy-soft">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 sm:p-8 md:p-10 border-b border-border space-y-8">
              {active.title === "Impact Infraheights Pvt Ltd" && (
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">The challenge</div>
                  <p className="mt-2 text-navy-soft leading-relaxed text-justify">
                    Impact Infraheights Pvt Ltd had the credentials of a serious civil engineering and contracting firm but a digital presence that did not reflect it. Social media accounts existed but were inconsistent and visually outdated. The Google Business Profile was barely set up. The website needed ownership. There were no printed or digital brand assets worthy of client or expo-facing use. The business needed a single strategic communication partner to take over everything - from domain management to content - so leadership could stay focused on delivering projects.
                  </p>
                </div>
              )}
              <div className={active.title === "Impact Infraheights Pvt Ltd" ? "hidden" : ""}>
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">The challenge</div>
                <p className="mt-2 text-navy-soft leading-relaxed text-justify">
                  {active.title === "Jagruti Cooperative Credit Society Ltd."
                    ? "Established in 1998, Jagruti Cooperative Credit Society carries a long-standing legacy built on trust, transparency and member focus. The opportunity was to translate that legacy into a contemporary digital presence without losing the institution's established character. The brand needed a more premium, professional and accessible presentation across its website, social media and Google presence - bringing a traditional cooperative credit society into today's digital environment."
                    : active.title === "Skill Spark Consulting"
                      ? "Skill Spark Consulting was entering one of Pune's most cluttered markets - career consulting and talent placement - with no brand identity, no digital infrastructure, and no business collateral. The founder brought deep government and industrial networks across the PCMC corridor but had nothing to present to a corporate HR head or job seeker. The business needed credible placement firm branding, a professional digital presence in the Pune recruitment market, and the full suite of tools to operate from day one."
                    : active.title === "Rushivan Aagro"
                      ? "Rushivan Aagro, a farm stay and agri-tourism property near Pune, had strong on-ground appeal but almost no digital footprint to match it. There was no way for guests to browse rooms or pay online, no consistent visiting card or brochure for trade shows and expos, and social media accounts sat dormant. For a growing agri-tourism brand competing for Pune-Mumbai weekend travelers, that gap meant word-of-mouth demand wasn't converting into an organized, always-on booking channel."
                    : active.title === "Healing Waves Clinic"
                      ? "Healing Waves Clinic; a multi-branch regenerative orthopaedics practice in Pune had strong clinical credibility but no marketing infrastructure to match it. There were no tracking systems, no written processes, no agency accountability and no visibility into lead-to-revenue performance across branches. Two vendor agencies were active with no defined scope. Clinic digital presence for healthcare in Pune was underdeveloped relative to the quality of care being delivered. Strategic intervention was needed before any further marketing spend could generate reliable returns."
                    : "Ekvira Export House launched with zero brand infrastructure - no website, no positioning, no collateral. As a merchant trader, not a manufacturer, the firm needed communication that accurately represented its model while building credibility with experienced international buyers across the Middle East, UK, Australia, and beyond. Everything had to be built correctly from scratch, simultaneously, on a startup budget."}
                </p>
              </div>
              {active.title === "Impact Infraheights Pvt Ltd" && (
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">What we did</div>
                  <div className="mt-4 space-y-6">
                    <p className="text-navy-soft leading-relaxed text-justify">
                      Perspective Media Labs took full charge as a marketing concierge partner - handling brand communication end to end across every touchpoint. We revived and rebranded their presence across LinkedIn, Facebook, Instagram, and Google Business Profile - updating information, writing bios, building posting cadence, and managing the MD's personal LinkedIn handle alongside the firm page. We designed a professional digital and printed brochure, executed a project site photo shoot, and produced a three-fold brochure for their participation in MEA Expo, Pune. We managed the website, handled domain and email hosting, and updated all listing platforms including JustDial and AmbitionBox. Google reviews grew to 85+ with a consistent positive sentiment. The team at Impact Infraheights focused on building. We handled everything else.
                    </p>
                  </div>
                </div>
              )}
              <div className={active.title === "Impact Infraheights Pvt Ltd" ? "hidden" : ""}>
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">What we did</div>
                <div className="mt-4 space-y-6">
                  {active.title === "Jagruti Cooperative Credit Society Ltd." ? (
                    <p className="text-navy-soft leading-relaxed text-justify">
                      Perspective Media Labs gave Jagruti's established legacy a modern digital expression. We built a new website with a premium, professional look and feel, while setting up and optimising its social media handles, firm pages and Google Business Profile. The work brought its 1998 legacy, community focus and modern banking practices together under one consistent digital presence. As its marketing concierge, we handled the digital foundation end to end.
                    </p>
                  ) : active.title === "Skill Spark Consulting" ? (
                    <>
                      <p className="text-navy-soft leading-relaxed text-justify">
                        Perspective Media Labs built the entire brand from zero. We evaluated and approved the brand name, directed the logo through multiple design rounds to a trademarked final mark under Class 35, and locked a Navy and Gold premium colour palette positioned to compete with established consulting firms. We created all brand collateral - letterhead, visiting cards, envelope, and candidate intake forms for both general and IT talent profiles. Digital infrastructure covered GMB setup, LinkedIn company page, Facebook and Instagram pages with SEO-optimised bios, founder LinkedIn profile, Company profile PPT, and office branding.
                      </p>
                      <p className="text-navy-soft leading-relaxed text-justify">
                        The result: a brand that Google indexes organically, social platforms that drive referral traffic, and a website that ChatGPT cites unprompted to anyone asking about recruitment in Pune - all without a single rupee in paid advertising. The founder focused on building his placement network while we handled every brand and communication touchpoint end to end.
                      </p>
                    </>
                  ) : active.title === "Rushivan Aagro" ? (
                    <p className="text-navy-soft leading-relaxed text-justify">
                      Perspective Media Labs built Rushivan Aagro's booking website from the ground up, with Razorpay payment integration, custom backend development, a cart system, and direct room booking. We designed their MEA expo collateral, a new visiting card and brochure, and revived their dormant social media with consistent posting - now running as their ongoing marketing concierge.
                    </p>
                  ) : active.title === "Healing Waves Clinic" ? (
                    <p className="text-navy-soft leading-relaxed text-justify">
                      Perspective Media Labs stepped in as a full marketing concierge to build the entire operational and marketing foundation from the ground up. We created a booked leads tracking system across all four clinics, standardised TeleCRM workflows, wrote SOPs and JDs for every patient-facing role, and set up WhatsApp Business automation across all branches. We managed and audited both paid and organic agencies, conducted landing page and SEO audits, directed the LinkedIn content strategy for the founder's personal brand, and supported hiring across multiple clinic roles. RMO referral program was audited and a software tracking gap was independently resolved.
                    </p>
                  ) : (
                    <p className="text-navy-soft leading-relaxed text-justify">
                      We built Ekvira's brand foundation end to end - tagline, website copy, brochure, WhatsApp CTAs for buyers and suppliers, and Meta campaign strategy across Ganesh idol export and textile B2B verticals. We structured product positioning across six categories and set up zero-cost lead capture automation. The founders stayed focused on trade while we handled everything else.
                    </p>
                  )}
                </div>
              </div>
              {active.servicesTags && (
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Services</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {active.servicesTags.split(", ").map((service) => (
                      <span key={service} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-deep">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-5 sm:p-8 md:p-10 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">Want a plan like this for your business?</p>
              <button type="button" onClick={handleCta} className="btn-primary">
                Get a similar plan <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------- Vision / Mission / Values ---------- */

function Values() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Why we exist</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-navy">Built on three commitments.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="p-8 rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary-deep grid place-items-center">
                <v.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold text-navy">{v.title}</h3>
              <p className="mt-3 text-navy-soft leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */

function Testimonials() {
  return (
    <section className="py-24 bg-surface">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">In their words</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-navy">Founders who stopped Googling "marketing agency."</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-elevated flex h-full flex-col p-8">
              <Quote className="w-8 h-8 text-primary" />
              <blockquote className="mt-4 text-lg leading-relaxed text-navy">"{t.quote}"</blockquote>
              <figcaption className="mt-auto flex items-center gap-4 pt-6">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-deep font-semibold text-primary-foreground">{t.initials}</div>
                <div className="min-w-0">
                  <div className="font-semibold text-navy">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
                <div className="ml-auto flex shrink-0 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Founder ---------- */

function Founder() {
  return (
    <section id="founder" className="py-24">
      <div className="container-page grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-elegant)]">
            <img src={founderImg} alt="Tejas Rokhade, Founder" loading="lazy" className="block aspect-[1070/1448] w-full h-full object-cover object-center" />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-navy/90 to-transparent text-primary-foreground">
              <div className="text-xs uppercase tracking-widest opacity-80">Founder</div>
              <div className="font-serif text-2xl font-semibold">Tejas Rokhade</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-7 text-justify">
          <span className="eyebrow"><Users className="w-3.5 h-3.5" /> Meet the founder</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-semibold text-navy">Built by an operator who's been on your side of the table.</h2>
          <p className="mt-6 text-lg text-navy-soft leading-relaxed text-justify">
            After half a decade running growth for D2C brands, SaaS startups, and traditional MSMEs across India, Tejas kept hearing the same story: agencies were too generic, hiring was too slow, and modern tooling was too intimidating to figure out alone.
          </p>
          <p className="mt-4 text-lg text-navy-soft leading-relaxed text-justify">
            Perspective Media Labs is his answer - a concierge for founders who want the outcomes of a full marketing team without the overhead of one.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary text-sm">Talk to Tejas <ArrowRight className="w-4 h-4" /></a>
            <a href="https://wa.me/918668411092" target="_blank" rel="noreferrer" className="btn-ghost text-sm">WhatsApp <MessageCircle className="w-4 h-4" /></a>
            <a href="https://www.linkedin.com/in/tejasrokhade/" target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm" aria-label="View Tejas Rokhade on LinkedIn">
              LinkedIn <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQs ---------- */

function FaqSection() {
  const [activeFaq, setActiveFaq] = useState(0);
  const faq = faqs[activeFaq];

  return (
    <section id="faqs" className="bg-surface py-24">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <span className="eyebrow">Frequently asked questions</span>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-navy md:text-5xl">Straight answers before we start.</h2>
          <p className="mt-4 text-base leading-relaxed text-navy-soft sm:text-lg">
            Everything founders usually ask about the concierge model, costs, scope, and getting started.
          </p>
        </div>
        <div className="flex min-h-80 flex-col justify-between border-y border-border py-6 sm:py-8 lg:col-span-8">
          <div key={faq.question} className="animate-fade-up">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary-deep">
              Question {activeFaq + 1} of {faqs.length}
            </div>
            <h3 className="mt-4 max-w-3xl font-serif text-2xl font-semibold leading-tight text-navy sm:text-3xl">
              {faq.question}
            </h3>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-navy-soft sm:text-lg">
              {faq.answer}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-5">
            <button
              type="button"
              onClick={() => setActiveFaq((index) => (index - 1 + faqs.length) % faqs.length)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Show previous FAQ"
            >
              <ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" /> Previous
            </button>
            <div className="hidden gap-1.5 sm:flex" aria-hidden="true">
              {faqs.map((item, index) => (
                <span key={item.question} className={`h-1.5 rounded-full transition-all ${index === activeFaq ? "w-6 bg-primary-deep" : "w-1.5 bg-border"}`} />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setActiveFaq((index) => (index + 1) % faqs.length)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary/10 px-4 text-sm font-semibold text-primary-deep transition-colors hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Show next FAQ"
            >
              Next <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    let frame: number;
    const resetForm = () => {
      formRef.current?.reset();
      setSubmitStatus("idle");
      frame = requestAnimationFrame(() => formRef.current?.reset());
    };
    resetForm();
    window.addEventListener("pageshow", resetForm);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pageshow", resetForm);
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", web3FormsAccessKey);
    formData.append("subject", "New website enquiry - Perspective Media Labs");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Form submission failed");
      }

      form.reset();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-navy text-primary-foreground relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(700px 400px at 100% 0%, oklch(0.66 0.11 210 / 0.5), transparent 60%)" }} />
      <div className="container-page relative grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5 flex min-w-0 flex-col items-start">
          <span className="eyebrow"><Target className="w-3.5 h-3.5" /> Start the conversation</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl font-semibold">Let's map your first 90 days.</h2>
          <p className="mt-4 text-white/70 text-lg">Free 30-minute audit. No pitch deck. Just a real look at what's working, what isn't, and what one concierge could unlock.</p>
          <ul className="mt-8 space-y-4 text-white/85">
            <li className="flex min-w-0 items-center gap-3"><Mail className="h-5 w-5 shrink-0 text-primary" /> <span className="min-w-0 break-all">connect@perspectivemedialabs.com</span></li>
            <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary" /> +91 8668411092</li>
          </ul>
          <div className="mt-7 w-full">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Follow and review us</p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open Perspective Media Labs on ${label}`}
                  title={label}
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-primary transition hover:-translate-y-0.5 hover:border-primary hover:bg-white hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                >
                  <Icon className="h-4 w-4 transition group-hover:scale-110" />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="relative mt-6 h-44 w-full max-w-sm overflow-hidden rounded-2xl border border-white/15 bg-white/5 sm:h-48">
            <iframe
              title="Perspective Media Labs location on Google Maps"
              src="https://maps.google.com/maps?q=18.6441317,73.8501899&z=16&output=embed"
              className="absolute inset-0 block h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
        <form
          ref={formRef}
          autoComplete="off"
          onSubmit={handleSubmit}
          className="md:col-span-7 self-start bg-white/[0.04] backdrop-blur border border-white/10 rounded-3xl p-5 pb-5 sm:p-8 sm:pb-6 space-y-5"
        >
          <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Your name" name="name" placeholder="Enter your full name" />
            <Field
              label="Work email"
              name="email"
              type="email"
              placeholder="Enter your work email"
              autoComplete="email"
              required
              title="Enter a valid email address, for example name@company.com"
            />
            <Field label="Company" name="company" placeholder="Enter your company name" />
            <Field
              label="Phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              autoComplete="tel"
              inputMode="tel"
              pattern="(?:\\+?91[ -]?)?[6-9][0-9]{9}"
              required
              title="Enter a valid 10-digit Indian mobile number"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-white/70">What do you need help with?</label>
            <textarea
              name="message"
              autoComplete="off"
              rows={4}
              placeholder="Tell us how we can help your business"
              className="mt-2 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <label className="flex items-start gap-3 px-4 text-xs leading-relaxed text-white/80 cursor-pointer">
            <input
              type="checkbox"
              name="termsAccepted"
              required
              className="mt-1 h-4 w-4 shrink-0 accent-primary cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            />
            <span>By submitting this form, I agree to the Terms and Conditions and consent to being contacted by Perspective Media Labs regarding my enquiry.</span>
          </label>
          <button type="submit" disabled={submitStatus === "sending"} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
            {submitStatus === "sending"
              ? "Sending..."
              : submitStatus === "success"
                ? "Thanks - we'll be in touch"
                : (<>Request my free audit <ArrowRight className="w-4 h-4" /></>)}
          </button>
          <p className={`text-sm ${submitStatus === "error" ? "text-red-300" : "text-white/80"}`} role="status" aria-live="polite">
            {submitStatus === "success"
              ? "Your enquiry has been sent successfully."
              : submitStatus === "error"
                ? "We couldn't send your enquiry. Please try again or email us directly."
                : ""}
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete = "off",
  inputMode,
  pattern,
  required = false,
  title,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "tel" | "email" | "numeric";
  pattern?: string;
  required?: boolean;
  title?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-widest text-white/70">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        pattern={pattern}
        required={required}
        title={title}
        placeholder={placeholder}
        className="mt-2 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer id="footer" className="py-3 bg-background">
      <div className="hidden">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo main.png" alt="Perspective Media Labs" className="h-11 w-auto max-w-52 object-contain" />
            <div>
              <div className="font-semibold text-navy">Perspective Media Labs</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-navy-soft max-w-sm">Marketing that feels like it's yours - strategy-led, run by a senior operator, built for Indian MSMEs.</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Explore</div>
          <ul className="mt-3 space-y-2 text-sm text-navy">
            <li><a className="hover:text-primary-deep" href="#services">Services</a></li>
            <li><a className="hover:text-primary-deep" href="#work">Work</a></li>
            <li><a className="hover:text-primary-deep" href="#approach">Approach</a></li>
            <li><a className="hover:text-primary-deep" href="#founder">Founder</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Get in touch</div>
          <ul className="mt-3 space-y-2 text-sm text-navy">
            <li>connect@perspectivemedialabs.com</li>
            <li>+91 8668411092</li>
          </ul>
        </div>
      </div>
      <div className="container-page mt-0 pt-3 border-t border-border flex flex-col items-center justify-center gap-2 text-center text-xs text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-3">
        <span>
          © 2026 All Rights Reserved By Perspective Media Labs
        </span>
        <span className="hidden text-border sm:inline">|</span>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          {legalDocuments.map((legalDocument) => (
            <LegalDialog key={legalDocument.title} legalDocument={legalDocument} />
          ))}
        </div>
      </div>
    </footer>
  );
}

function LegalDialog({ legalDocument }: { legalDocument: (typeof legalDocuments)[number] }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="font-semibold text-primary-deep underline underline-offset-2 transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {legalDocument.title}
        </button>
      </DialogTrigger>
      <DialogContent className="w-[calc(100%-1.5rem)] max-w-2xl max-h-[88dvh] overflow-y-auto rounded-2xl border-primary/20 bg-card p-5 sm:p-8">
        <DialogHeader className="text-left">
          <DialogTitle className="font-serif text-2xl leading-tight text-navy">{legalDocument.title}</DialogTitle>
          <DialogDescription className="pt-2 text-sm leading-relaxed text-navy-soft">
            {legalDocument.updated}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-5 text-left text-sm leading-relaxed text-navy-soft">
          <p>{legalDocument.intro}</p>
          {legalDocument.sections.map((section) => (
            <section key={section.heading}>
              <h3 className="font-sans text-sm font-semibold text-navy">{section.heading}</h3>
              <p className="mt-1">{section.text}</p>
            </section>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* ---------- WhatsApp widget ---------- */

function WhatsAppWidget() {
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const sections = [document.getElementById("contact"), document.getElementById("footer")]
      .filter((section): section is HTMLElement => section !== null);
    const visibleSections = new Set<Element>();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleSections.add(entry.target);
        else visibleSections.delete(entry.target);
      });
      setFooterVisible(visibleSections.size > 0);
    });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="https://wa.me/918668411092"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      aria-hidden={!footerVisible}
      tabIndex={footerVisible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full grid place-items-center text-white shadow-[var(--shadow-elegant)] transition-[opacity,transform,visibility] duration-300 motion-reduce:transition-none ${footerVisible ? "visible translate-y-0 opacity-100 hover:scale-110" : "invisible translate-y-4 opacity-0 pointer-events-none"}`}
      style={{ background: "linear-gradient(135deg, #22c35e, #128c4a)" }}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7 h-7 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.002 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 0.16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.479-8.413" />
      </svg>
    </a>
  );
}
