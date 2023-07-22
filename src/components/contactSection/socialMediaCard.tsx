import Image from "next/image";
import Link from "next/link";

interface ISocialMediaCard{
    icon: string;
    linkUrl: string
}
export default function SocialMediaCard({icon,linkUrl}:ISocialMediaCard){
    return (
        <Link href={linkUrl} className="w-[50px] h-[50px] bg-main flex justify-center items-center rounded-md" target="_blank">
            <Image src={icon} width={24} height={24} alt="Social Media Links"/>
        </Link>
    )
}