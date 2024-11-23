import ProfileGrid from "@/components/Grid/Profile";
import { ThreeDQuestionMark } from "./3D-Card";
import Image from "next/image";
import styles from "../style/3D.module.css";

export default function Home() {
  return (
    <div className="py-7 px-4">
      {/* Top row: ProfileGrid, About, Portfolio */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[300px]">
        <div className="w-full">
          <ProfileGrid />
        </div>

        <div className="flex items-center justify-center text-start">
          <ThreeDQuestionMark
            text="ABOUT"
            defaultBackground="linear-gradient(135deg, #ff512f, #dd2476)"
            hoverBackground="linear-gradient(135deg, #ff7043, #dd2476)"
          >
            <Image
              src={"/keyboard.png"}
              alt="ABOUT"
              width={300}
              height={300}
              className="max-w-full h-auto"
            />
            <h2 className={`${styles.cardText} text-base lg:text-lg`}>ABOUT</h2>
            <div className="border border-b-2 border-white w-[90%] absolute bottom-[30px]"></div>
            <div className="absolute -bottom-2  text-white font-mono text-[10px] lg:text-[12px] left-[30px] lg:left-[30px] md:left-[50px]">
              Passionate, dedicated, and always curious— let me share my story.
            </div>
          </ThreeDQuestionMark>
        </div>

        <div className="flex items-center justify-center text-start">
          <ThreeDQuestionMark
            text="PORTOFOLIO"
            defaultBackground="linear-gradient(135deg, #1e3a8a, #9333ea)"
            hoverBackground="linear-gradient(135deg, #2980b9, #8e44ad)"
          >
            <Image
              src={"/space-ship.png"}
              alt="PORTOFOLIO"
              width={250}
              height={250}
              className="max-w-full h-auto"
            />
            <h2
              className={`${styles.cardText} text-base lg:text-lg md:left-[50px]`}
            >
              PORTOFOLIO
            </h2>
            <div className="border border-b-2 border-white w-[90%] absolute bottom-[30px]"></div>
            <div className="absolute -bottom-2  text-white font-mono text-[10px] lg:text-[12px] left-[30px] lg:left-[30px] md:left-[50px]">
              Take a closer look at what I’ve created and accomplished.
            </div>
          </ThreeDQuestionMark>
        </div>
      </div>

      {/* Bottom row: Education, Skills, Contact */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 min-h-[300px]">
        <div className="flex items-center justify-center text-start">
          <ThreeDQuestionMark
            text="EDUCATION"
            defaultBackground="linear-gradient(135deg, #0C63E7, #03045e)"
            hoverBackground="linear-gradient(135deg, #4e73df, #56ccf2)"
          >
            <Image
              src={"/graduated.png"}
              alt="Education"
              width={250}
              height={250}
              className="max-w-full h-auto"
            />
            <h2 className={`${styles.cardText} text-base lg:text-lg`}>
              EDUCATION
            </h2>
            <div className="border border-b-2 border-white w-[90%] absolute bottom-[30px]"></div>
            <div className="absolute -bottom-2  text-white font-mono text-[10px] lg:text-[12px] left-[30px] lg:left-[30px] md:left-[50px]">
              A journey of learning and growth that shaped my expertise.
            </div>
          </ThreeDQuestionMark>
        </div>

        <div className="flex items-center justify-center text-start">
          <ThreeDQuestionMark
            text="SKILLS"
            defaultBackground="linear-gradient(135deg, #f7a800, #ff4e50)"
            hoverBackground="linear-gradient(135deg, #ff6347, #ff9966)"
          >
            <Image
              src={"/typescript.png"}
              alt="Laptop"
              width={250}
              height={250}
              className="max-w-full h-auto"
            />
            <h2 className={`${styles.cardText} text-base lg:text-lg`}>
              SKILLS
            </h2>
            <div className="border border-b-2 border-white w-[90%] absolute bottom-[30px]"></div>
            <div className="absolute -bottom-2  text-white font-mono text-[10px] lg:text-[12px] left-[30px] lg:left-[30px] md:left-[50px]">
              Here’s what I bring to the table, skills that turn ideas into
              reality.
            </div>
          </ThreeDQuestionMark>
        </div>

        <div className="flex items-center justify-center text-start">
          <ThreeDQuestionMark
            text="CONTACT"
            defaultBackground="linear-gradient(135deg, #40916c, #1b4332)"
            hoverBackground="linear-gradient(135deg, #40916c, #52b788)"
          >
            <Image
              src={"/mail.png"}
              alt="Laptop"
              width={250}
              height={250}
              className="max-w-full h-auto"
            />
            <h2 className={`${styles.cardText} text-base lg:text-lg`}>
              CONTACT
            </h2>
            <div className="border border-b-2 border-white w-[90%] absolute bottom-[30px]"></div>
            <div className="absolute -bottom-2  text-white font-mono text-[10px] lg:text-[12px] left-[30px] lg:left-[30px] md:left-[50px]">
              Let’s stay connected! Feel free to reach out and start a
              conversation.
            </div>
          </ThreeDQuestionMark>
        </div>
      </div>
    </div>
  );
}
