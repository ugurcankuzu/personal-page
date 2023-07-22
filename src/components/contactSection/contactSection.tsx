import contactInfo from "@/store/contactInfo";
import SocialMediaCard from "./socialMediaCard";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="w-full p-8 flex flex-col gap-8 shadow-md shadow-accent">
      <h3 className="text-3xl font-bold">Stay in Touch!</h3>
      <p className="text-lg">You can access my profile below.</p>
      <p className="text-lg">
        Also you can mail me any time to ask whatever you want.
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h4 className="text-2xl">Social Media</h4>
          <div className="flex items-center gap-4">
            {contactInfo.map((info,index) => (
              <SocialMediaCard key={index} icon={info.icon} linkUrl={info.linkUrl} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-2xl">E-mail</h4>
          <Link href={"mailto:ugurcankzuit@gmail.com"} className="text-main">
            ugurcankzuit@gmail.com
          </Link>
        </div>
      </div>
    </section>
  );
}
