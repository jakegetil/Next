import React from 'react'
import PostPage from '@/app/components/users/post/Posts'
import Navbar from '@/app/components/navbar/navbar'
import { Suspense } from "react";

const Post = () => {
  return (
    <div>
      <Navbar />
      <Suspense>
        <PostPage />
      </Suspense>
    </div>
  )
}

export default Post