import { aboutMe, softSkills, techSkills } from "@/store/cardContents";
import Card from "./cards";

export default function AboutMeSection() {
  return (
    <section id="about" className="w-full bg-main p-4 flex flex-col gap-4 shadow-md shadow-accent">
      <div className="flex flex-col gap-4">
        <h3 className="text-background text-3xl font-bold">About Me</h3>
        <div className="w-full flex gap-4 overflow-x-scroll snap-x">
          {aboutMe.map((card,index) => (
            <Card
            key={index}
              title={card.title}
              description={card.description}
              note={card.note ? card.note : undefined}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-background text-3xl font-bold">Tech Skills</h3>
        <div className="w-full flex gap-4 overflow-x-scroll snap-x">
          {techSkills.map((card,index) => (
            <Card key={index} title={card.title} description={card.description} icon={`${process.env.NODE_ENV === "production" ? ".": ""}${card.icon}`}/>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-background text-3xl font-bold">Soft Skills</h3>
        <div className="w-full flex gap-4 overflow-x-scroll snap-x">
          {softSkills.map((card,index)=>(
            <Card key={index} title={card.title} description={card.description} icon={`${process.env.NODE_ENV === "production" ? ".": ""}${card.icon}`}/>
          ))}
        </div>
      </div>
    </section>
  );
}
