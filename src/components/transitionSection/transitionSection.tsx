import Image from "next/image";

export default function TransitionSection() {
  return (
    <section className="w-full flex flex-col gap-4 p-8">
      <h3 className="flex justify-start items-center gap-1 text-3xl font-bold">
        Hi there!
        <span>
          <Image
            src={"/wave.gif"}
            width={30}
            height={30}
            alt="animated salute icon."
          />
        </span>
      </h3>
      <p className="text-lg font-normal">Welcome to my personal website.</p>
      <p className="text-lg font-normal">
        You can find any information here about me, my tech and soft skills and
        contact info.
      </p>
    </section>
  );
}
