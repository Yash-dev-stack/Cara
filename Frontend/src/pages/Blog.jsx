import React from "react";
import { assets } from "../assets/assets.js";
import BlogCard from "../components/BlogCard.jsx";
import Newsletter from "../components/Newsletter.jsx";

const Blog = () => {
  return (
    <div>
      <div className="bg-blogBanner w-full h-[20vh] sm:h-[40vh] text-center flex items-center flex-col justify-center   ">
        <h2 className="text-4xl text-white font-semibold mb-1">#Read More</h2>
        <p className="text-sm text-gray-200 font-normal">
          Read all the case studies about our products!
        </p>
      </div>

      {/*Blog section*/}
      <div className="flex flex-col items-start sm:items-center justify-start sm:justify-center p-5 sm:p-12  mt-20">
        <BlogCard
          img={assets.blog}
          text={
            "officia nulla commodo veniam reprehenderit nisi anim Lorem enim Lorem deserunt adipisicing anim Lorem ipsum quis dolor in consequat tempor ea veniam adipisicing incididunt exercitation duis irure reprehenderit voluptate ad est dolore voluptate"
          }
          date={"02/12"}
        />

        <BlogCard
          img={assets.blog2}
          text={
            "officia nulla commodo veniam reprehenderit nisi anim Lorem enim Lorem deserunt adipisicing anim Lorem ipsum quis dolor in consequat tempor ea veniam adipisicing incididunt exercitation duis irure reprehenderit voluptate ad est dolore voluptate"
          }
          date={"03/12"}
        />

        <BlogCard
          img={assets.blog3}
          text={
            "officia nulla commodo veniam reprehenderit nisi anim Lorem enim Lorem deserunt adipisicing anim Lorem ipsum quis dolor in consequat tempor ea veniam adipisicing incididunt exercitation duis irure reprehenderit voluptate ad est dolore voluptate"
          }
          date={"04/12"}
        />

        <BlogCard
          img={assets.blog4}
          text={
            "officia nulla commodo veniam reprehenderit nisi anim Lorem enim Lorem deserunt adipisicing anim Lorem ipsum quis dolor in consequat tempor ea veniam adipisicing incididunt exercitation duis irure reprehenderit voluptate ad est dolore voluptate"
          }
          date={"05/12"}
        />

        <BlogCard
          img={assets.b6}
          text={
            "officia nulla commodo veniam reprehenderit nisi anim Lorem enim Lorem deserunt adipisicing anim Lorem ipsum quis dolor in consequat tempor ea veniam adipisicing incididunt exercitation duis irure reprehenderit voluptate ad est dolore voluptate"
          }
          date={"06/12"}
        />
      </div>

      <Newsletter />
    </div>
  );
};

export default Blog;
