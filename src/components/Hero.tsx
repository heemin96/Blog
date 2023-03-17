import Image from "next/image";
import Link from "next/link";
import React from "react";
import profileImage from "../../public/images/profile.png";

function Hero() {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-full"
        src={profileImage}
        alt="Picture of the author"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm Heemin"}</h2>
      <h3 className="text-xl font-semibold"> Front-End Engineer</h3>
      <p>React, Next.js, Js, Ts ..</p>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  );
}

export default Hero;
