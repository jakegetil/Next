"use client";

import React, { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const userName = searchParams.get("userName");

  const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    // id
    // ? `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    // : "https://jsonplaceholder.typicode.com/posts";
    
  userName ? `${userName}'s` : "";

  const [usePost, setPost] = useState<post[]>([]);

  const fetchPost = useCallback(async () => {
    const res = await fetch(
        url
    );
    return res.json();
  }, [url]);

  useEffect(() => {
    const fetchUserAlbum = async () => {
      const data = fetchPost();
      const userPost: post[] = await data;
      setPost(userPost);
    };
    fetchUserAlbum();
  }, [fetchPost]);

  return (
    <div>
      <div className="flex justify-center mb-5 text-3xl">
        <h1>{userName} Post</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4">
        {usePost.map((post) => (
          <div
            key={post.id}
            className="py-4 px-8 border border-blue-200 flex flex-col gap-10"
          >
            <div className="text-xl">{post.title}</div>
            <div>{post.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
