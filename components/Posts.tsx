import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { postsApi } from "@/data";

export default function Posts() {
  return (
    <div className="py-20" id="posts">
      <h1 className="heading">
        My Linkdin <span className="text-purple">posts</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
          <InfiniteMovingCards
            items={postsApi}
            direction="right"
            speed="slow"
            pauseOnHover={true}
          />
      </div>
    </div>
  );
}
