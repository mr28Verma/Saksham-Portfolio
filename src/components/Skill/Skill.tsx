import React from "react";
import "./Skill.css";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiSocketdotio,
  SiVercel,
  SiPostman,
  SiRedux,
  SiPrisma,
  SiEjs,
  SiNextdotjs,
  SiMysql,
  SiCloudinary,
} from "react-icons/si";

import {
  TbApi,
  TbCloud,
  TbTerminal,
  TbMail,
  TbLock,
  TbBinaryTree,
  TbCube,
  TbDatabase,
  TbDeviceDesktop,
  TbNetwork,
} from "react-icons/tb";

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color?: string;
}

interface SkillCategory {
  title: string;
  items: TechItem[];
}

export default function Skills() {

  const categories: SkillCategory[] = [
    {
      title: "Frontend Development",
      items: [
        {
          name: "React",
          icon: <FaReact />,
          color: "#61DAFB",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
          color: "#3178C6",
        },
        {
          name: "JavaScript",
          icon: <FaJsSquare />,
          color: "#F7DF1E",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "#06B6D4",
        },
        {
          name: "Redux",
          icon: <SiRedux />,
          color: "#764ABC",
        },
        {
          name: "HTML5",
          icon: <FaHtml5 />,
          color: "#E34F26",
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt />,
          color: "#1572B6",
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
          color: "#ffffff",
        },
        {
          name: "EJS",
          icon: <SiEjs />,
          color: "#B4CA65",
        },
      ],
    },

    {
      title: "Backend Engineering",
      items: [
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          color: "#339933",
        },
        {
          name: "Express.js",
          icon: <SiExpress />,
          color: "#ffffff",
        },
        {
          name: "REST APIs",
          icon: <TbApi />,
          color: "#7FDFD4",
        },
        {
          name: "Socket.IO",
          icon: <SiSocketdotio />,
          color: "#ffffff",
        },
        {
          name: "Prisma",
          icon: <SiPrisma />,
          color: "#5A67D8",
        },
      ],
    },

    {
      title: "Databases & Storage",
      items: [
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          color: "#47A248",
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql />,
          color: "#4169E1",
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
          color: "#4479A1",
        },
      ],
    },

    {
      title: "Tools & Environment",
      items: [
        {
          name: "Git",
          icon: <FaGitAlt />,
          color: "#F05032",
        },
        {
          name: "Docker",
          icon: <FaDocker />,
          color: "#2496ED",
        },
        {
          name: "Postman",
          icon: <SiPostman />,
          color: "#FF6C37",
        },
        {
          name: "Vercel",
          icon: <SiVercel />,
          color: "#ffffff",
        },
        {
          name: "Cloud Services",
          icon: <TbCloud />,
          color: "#7FDFD4",
        },
        {
          name: "CLI / Terminal",
          icon: <TbTerminal />,
          color: "#4AF626",
        },
        {
          name: "Cloudinary",
          icon: <SiCloudinary />,
          color: "#3448C5",
        },
        {
          name: "Nodemailer",
          icon: <TbMail />,
          color: "#22B573",
        },
        {
          name: "bcrypt",
          icon: <TbLock />,
          color: "#8892BF",
        },
      ],
    },

    {
      title: "CS Fundamentals",
      items: [
        {
          name: "DSA",
          icon: <TbBinaryTree />,
          color: "#7FDFD4",
        },
        {
          name: "OOP",
          icon: <TbCube />,
          color: "#FFB86C",
        },
        {
          name: "DBMS",
          icon: <TbDatabase />,
          color: "#4479A1",
        },
        {
          name: "OS",
          icon: <TbDeviceDesktop />,
          color: "#61DAFB",
        },
        {
          name: "CN",
          icon: <TbNetwork />,
          color: "#764ABC",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">

      <div className="skills-header">

        <span className="skills-subtitle">
          MY TECH STACK
        </span>

        <h2 className="skills-title">
          Skills & Technologies
        </h2>

        <p className="skills-description">
          Built using industry-standard tools to ensure
          performance, scalability, and developer experience.
        </p>

      </div>

      <div className="category-container">

        {categories.map((cat) => (
          <React.Fragment key={cat.title}>

            <h3 className="category-title">
              {cat.title}
            </h3>

            <div className="skills-row-outer">

              <div className="skills-row">

                {[...cat.items, ...cat.items].map(
                  (tech, i) => (
                    <div
                      key={`${cat.title}-${tech.name}-${i}`}
                      className="skill-item"
                    >
                      <span
                        className="tech-icon"
                        style={{
                          color: tech.color,
                        }}
                      >
                        {tech.icon}
                      </span>

                      <span className="tech-name">
                        {tech.name}
                      </span>
                    </div>
                  )
                )}

              </div>

            </div>

          </React.Fragment>
        ))}

      </div>

    </section>
  );
}