import React from "react";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powerded Prompts</span>
        <p className="desc text-center">
          Promtopia is an open-source AI propmting tool for modern world to
          discover, create and share creative prompts
        </p>
        {/* Feed */}
      </h1>
    </section>
  );
};

export default Home;
