import ServiceItem from "./ServiceItem";

const servicesData = [
  {
    title: "Web Application",
    description:
      "We create engaging web apps designed to captivate a global audience.",
    image: "public/images/services/web.png",
  },
  {
    title: "Application Development",
    description:
      "Custom mobile and desktop apps to elevate your business’s digital presence.",
    image: "public/images/services/application.png",
  },
  {
    title: "Website Development",
    description:
      "Well-designed websites that boost trust, user engagement, and lead generation.",
    image: "public/images/services/website.png",
  },
  {
    title: "Games Development",
    description:
      "Combining creativity and technology to create engaging games across platforms.",
    image: "public/images/services/game.png",
  },
  {
    title: "Financial Analysis Systems",
    description:
      "Simplify financial analysis with our reliable accounting management tools.",
    image: "public/images/services/financial.png",
  },
  {
    title: "Integrated Database Systems",
    description:
      "Efficiently manage, store, and analyze data with our database solutions.",
    image: "public/images/services/database.png",
  },
  {
    title: "Consulting and Study Centers",
    description:
      "Consulting and research for informed decision-making in information and communications.",
    image: "public/images/services/consulting.png",
  },
  {
    title: "Digital Marketing Solutions",
    description:
      "Comprehensive digital marketing to maximize your brand’s reach and impact.",
    image: "public/images/services/markting.png",
  },
  {
    title: "Career Development Coaching",
    description:
      "Coaching in key areas like security, testing, analytics, and UX design.",
    image: "public/images/services/career.png",
  },
  {
    title: "SaaS Development",
    description:
      "Tailored SaaS solutions for efficient, cloud-based business operations.",
    image: "public/images/services/sass.png",
  },
  {
    title: "User Experience Design",
    description:
      "Crafting intuitive, visually appealing interfaces for an exceptional user experience.",
    image: "public/images/services/user.png",
  },
];

export default function ServicesContainer() {
  return (
    <div className="grid grid-cols-12  gap-[20px]">
      {servicesData.map((service) => (
        <div
          key={service.title}
          className="col-span-12 md:col-span-6 lg:col-span-3"
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