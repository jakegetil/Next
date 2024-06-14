import React from 'react'
import AlbumPage from '@/app/components/users/album/Album'
import Navbar from '@/app/components/navbar/navbar'
import { Suspense } from "react";

const Album = () => {
  return (
    <div>
      <Navbar />
      <Suspense>
        <AlbumPage />
      </Suspense>
    </div>
  )
}

export default Album