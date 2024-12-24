import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/pr1.png",
    title: "SEO Results",
    link: "",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/pr2.png",
    title: "Our Web-Development & Designing",
    link: "https://beanbuzz.netlify.app/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/pr3.png",
    title: "SMM Results",
    link: "https://www.instagram.com/anuragxsinghhh/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/pr4.png",
    title: "Our Car Marketplace Modern Look & Design",
    link: "https://carz-club.vercel.app/",
  },


];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
        
              
       
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
