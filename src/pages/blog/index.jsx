import Blog from "@/assets/svg/siderbar/Blog";
import React, { useState } from "react";

export default function Blogs() {
  const [activeBlog, setactiveBlog] = useState(false);
  const toggleBlog = () => {
    setactiveBlog(!activeBlog);
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="flex flex-row my-4 gap-3 text-white item-center">
        <Blog /> Blog
      </div>
      {activeBlog ? (
        <>
          <div
            className="text-white text-lg cursor-pointer"
            onClick={toggleBlog}
          >
            {"<"} Back
          </div>
          <div className="flex text-[#858AA0] text-lg  justify-center">
            <div className="w-2/3 ">
              <div className="bg-[#212530] relative h-60 rounded-xl cursor-pointer">
                <div className="absolute bottom-2 left-4 text-white text-2xl font-bold">
                  What is Lorem Ipsum?
                </div>
              </div>
              <div className="text-[#858AA0] mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen
              </div>
              <div className="mt-3 bold text-2xl text-white">
                Where does it come from?
              </div>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum"
              <br />
              <br />
              <span className="mt-3 bold  text-white">
                (The Extremes of Good and Evil){" "}
              </span>
              by Cicero, written in 45 BC. This book is a treatise on the theory
              of ethics, very popular during the Renaissance. The first line of
              Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32.
            </div>
          </div>
        </>
      ) : (
        <div className="grid lap:grid-cols-3 tab:grid-cols-1 gap-x-3 gap-y-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div className="w-full ">
              <div
                className="bg-[#212530] relative h-48 rounded-xl cursor-pointer"
                onClick={toggleBlog}
              >
                <div className="absolute bottom-2 left-2 text-white text-lg font-bold">
                  What is Lorem Ipsum?
                </div>
              </div>
              <div className="text-[#858AA0] mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
