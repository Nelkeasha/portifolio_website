import { cmu, klab, netlink } from "../assets/images";
import {
    contact,
    css,
    dotnet,
    event,
    express,
    flutter,
    git,
    github,
    hivtb,
    html,
    java,
    javascript,
    joblink,
    mubyeyi,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    postgresql,
    python,
    react,
    springboot,
    tailwindcss
} from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Language",
    },
    {
        imageUrl: dotnet,
        name: "ASP.NET Core",
        type: "Backend",
    },
    {
        imageUrl: springboot,
        name: "Spring Boot",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Mobile",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    }
];

export const experiences = [
    {
        title: "Trainee",
        company_name: "CMU-Africa Bridge Program",
        icon: cmu,
        iconBg: "#f8d0d6",
        date: "Oct 2025 - Nov 2025",
        points: [
            "Built a Smart Fruit Classification capstone in a team, applying IoT and machine learning with Arduino C++, sensors, and Edge Impulse to classify fruit by color and ripeness.",
            "Strengthened technical communication, research, teamwork, and presentation skills through group problem-solving and seminars.",
        ],
    },
    {
        title: "Backend Developer Intern",
        company_name: "kLab",
        icon: klab,
        iconBg: "#f7e7a8",
        date: "Feb 2026 - May 2026",
        points: [
            "Collaborated with a cross-functional team to build client web applications, owning backend feature development and API implementation.",
            "Partnered with frontend developers to integrate backend services and keep client-server communication reliable.",
            "Joined code reviews, debugging, testing, and Agile ceremonies, using Git for version control.",
        ],
    },
    {
        title: "Professional Intern",
        company_name: "Netlink",
        icon: netlink,
        iconBg: "#d6e4f0",
        date: "August 2026 - Present",
        points: [
            "Develop and maintain software applications that support Netlink's business operations.",
            "Build internal tools that make everyday company workflows easier to run.",
            "Improve existing applications by fixing defects and keeping internal software reliable.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Phone',
        iconUrl: contact,
        link: '/nelly-igihozo.vcf',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Nelkeasha',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/nellyigihozo/',
    }
];

export const projects = [
    {
        iconUrl: hivtb,
        theme: 'btn-back-blue',
        name: 'HIV & TB Patient Monitoring System',
        description: 'A digital healthcare platform for HIV and TB care. Healthcare workers monitor patients, manage treatment schedules, track medication adherence, and find people who need follow-up, on web and mobile.',
        link: 'https://github.com/Nelkeasha/HIV-TB-Mobile',
    },
    {
        iconUrl: event,
        theme: 'btn-back-yellow',
        name: 'Smart Event Registration System',
        description: 'An event platform for discovery, registration, payment, and attendance. It includes secure sign-in, event management, QR code check-in, analytics, search, and location-based discovery.',
        link: 'https://github.com/Nelkeasha/Smart-Event-Registration',
    },
    {
        iconUrl: mubyeyi,
        theme: 'btn-back-pink',
        name: 'MubyeyiCare',
        description: 'A multilingual digital health assistant for mothers from pregnancy through age 5. It offers preventive guidance, nutrition coaching, and emotional support in a mobile-first experience.',
        link: 'https://github.com/Nelkeasha/mubyeyi-care-frontend',
    },
    {
        iconUrl: joblink,
        theme: 'btn-back-green',
        name: 'JobLink Hub',
        description: 'A hiring platform that matches students, graduates, and emerging professionals to jobs, internships, mentorships, and freelance work by skills and readiness instead of CV screening.',
        link: 'https://github.com/Nelkeasha/job-link-hub',
    },
];