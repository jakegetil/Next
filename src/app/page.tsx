import Link from "next/link";
import Navbar from "./components/navbar/navbar";
import PostPage from "./components/users/post/Posts";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="">
        <PostPage />
      </div>
    </main>
  );
}
