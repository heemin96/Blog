import Hero from "@/components/Hero";
import React from "react";

function page() {
  const TITLE_CLASS = "text-2xl font-bold text-gray-800";
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center ">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <br />
        <p>새로운 것을 배우고 익히는데 두려움이 없습니다</p>
        <p>팀에 필요한 일을 찾고 해결하는 것에서 재미를 느낍니다</p>
        <p>회사의 성장이 곳 제 성장이라 생각합니다</p>
        <br />
        <h2 className={TITLE_CLASS}>Career</h2>
        <br />
        <p>(주) Ourtube (2022.10 ~ 2023.01)</p>
      </section>
    </>
  );
}

export default page;
