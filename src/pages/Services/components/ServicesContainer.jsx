import ServiceItem from "./ServiceItem";

const servicesData = [
  {
    title: "Web Application",
    description:
      "We create engaging web apps designed to captivate a global audience.",
    image: "images/services/web.webp",
  },
  {
    title: "Application Development",
    description:
      "Custom mobile and desktop apps to elevate your business’s digital presence.",
    image: "images/services/application.webp",
  },
  {
    title: "Website Development",
    description:
      "Well-designed websites that boost trust, user engagement, and lead generation.",
    image: "images/services/website.webp",
  },
  {
    title: "Games Development",
    description:
      "Combining creativity and technology to create engaging games across platforms.",
    image: "images/services/game.webp",
  },
  {
    title: "Financial Analysis Systems",
    description:
      "Simplify financial analysis with our reliable accounting management tools.",
    image: "images/services/financial.webp",
  },
  {
    title: "Integrated Database Systems",
    description:
      "Efficiently manage, store, and analyze data with our database solutions.",
    image: "images/services/database.webp",
  },
  {
    title: "Consulting and Study Centers",
    description:
      "Consulting and research for informed decision-making in information and communications.",
    image: "images/services/consulting.webp",
  },
  {
    title: "Digital Marketing Solutions",
    description:
      "Comprehensive digital marketing to maximize your brand’s reach and impact.",
    image: "images/services/markting.webp",
  },
  {
    title: "Career Development Coaching",
    description:
      "Coaching in key areas like security, testing, analytics, and UX design.",
    image: "images/services/career.webp",
  },
  {
    title: "SaaS Development",
    description:
      "Tailored SaaS solutions for efficient, cloud-based business operations.",
    image: "images/services/sass.webp",
  },
  {
    title: "User Experience Design",
    description:
      "Crafting intuitive, visually appealing interfaces for an exceptional user experience.",
    image: "images/services/user.webp",
  },
];

export default function ServicesContainer() {
  return (
    <div className="grid grid-cols-12 pt-2 gap-[10px] md:gap-[20px]">
      {servicesData.map((service) => (
        <div
          key={service.title}
          className="col-span-12  md:col-span-6 py-4 lg:col-span-3"
        >
          <ServiceItem
            title={service.title}
            description={service.description}
            image={service.image}
          />
        </div>
      ))}
    </div>
  );
}
