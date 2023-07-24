import Image from "next/image";
export default function Introduction() {
  return (
    <section id="home" className="bg-main w-full h-screen flex flex-col justify-center items-center gap-4 shadow-md shadow-accent">
      <div className={"w-[200px] h-[200px] bg-accent rounded-full relative overflow-hidden "}>
        <Image
          src={process.env.NODE_ENV === "production" ? ".":"" +"/Hello.png"}
          width={200}
          height={200}
          className="absolute -bottom-[5px] left-1/2 -translate-x-1/2"
          alt="Uğurcan KUZU's Memoji"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-background text-3xl font-bold">UĞURCAN KUZU</h1>
        <h2 className="text-background text-lg font-thin">Web Developer</h2>
      </div>
    </section>
  );
}
