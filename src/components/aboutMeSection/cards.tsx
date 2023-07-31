import Image from "next/image";
interface ICard {
  title: string;
  description: string;
  icon?: string;
  note?: string;
}
export default function Card({ title, description, icon, note }: ICard) {
  return (
    <div className="min-w-[150px] max-w-[250px] h-[200px] bg-accent p-4 flex flex-col gap-2 rounded-md shadow-md shadow-accent snap-center">
      <h4 className="text-background font-bold flex items-center gap-2">
        {icon ? (
          <span>
            <Image src={icon} width={24} height={24} alt="Card icon." />
          </span>
        ) : (
          ""
        )}
        {title}
      </h4>
      {description.split("\n").map(paragraph => <p className="text-background font-normal text-[.5rem]">{paragraph}</p>)}
      {note ? <p className="text-[.5rem] text-background/50">{note}</p> : null}
    </div>
  );
}
