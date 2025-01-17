export const products: {
  title: string;
  link: string;
  thumbnail: string;
  description: string;
  bgColor: string;
  difficulty: string;
  languages: string[];
}[] = [
  {
    title: "FLÉUR",
    link: "https://fleurnine.vercel.app/",
    thumbnail: "/FLEUR.png",
    description:
      "Built with Next.js and TypeScript, the Fleur website provides a seamless and responsive user experience. The front-end is styled using Tailwind CSS, ensuring a modern and clean design. The site’s dynamic content is powered by Contentful, a headless CMS that allows us to easily manage and display the latest products, collections, and updates. The project emphasizes scalability and modularity.",
    bgColor: "bg-yellow-900",
    difficulty: "Intermediate",
    languages: ["TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Fresh Blog",
    link: "https://front-end-exra.vercel.app/",
    thumbnail: "/freshblog.png",
    description:
      "Fresh Blog is a clean and modern blogging platform styled using Tailwind CSS. The site’s dynamic content is managed and powered by Contentful, ensuring a smooth and efficient content update process. Built with Next.js, it showcases server-side rendering capabilities and optimal performance.",
    bgColor: "bg-orange-500",
    difficulty: "Beginner",
    languages: ["JavaScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "HYPETIX",
    link: "https://hypetixx.vercel.app/",
    thumbnail: "/hypetix_preview.png",
    description:
      "HYPETIX is a cutting-edge ticketing platform developed with Next.js and TypeScript, utilizing both Server-Side Rendering (SSR) and Static Site Generation (SSG) approaches. The backend infrastructure features a PostgreSQL database integrated with Prisma ORM, ensuring robust and secure data handling. The platform is designed for scalability and user engagement.",
    bgColor: "bg-blue-800",
    difficulty: "Advanced",
    languages: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
  },
  {
    title: "Dominoes",
    link: "https://wafi-domino.vercel.app",
    thumbnail: "/domino_preview.png",
    description:
      "Dominoes is an interactive web application offering a seamless domino-playing experience directly in your browser. Leveraging technologies like React, Vue, and CSS, this project ensures a responsive and intuitive interface adaptable to various devices, providing entertainment and usability.",
    bgColor: "bg-green-500",
    difficulty: "Beginner",
    languages: ["React", "Vue", "CSS"],
  },
];
