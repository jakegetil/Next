import Link from "next/link";
import Navbar from "./components/navbar/navbar";
import PostPage from "./components/users/post/Posts";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="">
        <Suspense>
          <PostPage />
        </Suspense>
      </div>
    </main>
  );
}
