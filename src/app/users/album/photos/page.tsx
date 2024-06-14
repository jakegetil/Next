import React from 'react'
import PhotosPage from '@/app/components/users/album/photos/Photos'
import Navbar from '@/app/components/navbar/navbar'
import { Suspense } from "react";

const Photos = () => {
  return (
    <div>
      <Navbar />
      <Suspense>
        <PhotosPage />
      </Suspense>
    </div>
  )
}

export default Photos