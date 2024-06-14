import React from 'react'
import PhotosPage from '@/app/components/users/album/photos/Photos'
import Navbar from '@/app/components/navbar/navbar'

const Photos = () => {
  return (
    <div>
      <Navbar />
      <PhotosPage />
    </div>
  )
}

export default Photos