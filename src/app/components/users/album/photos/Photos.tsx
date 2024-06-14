"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface album {
  userId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl:string;
}

const PhotosPage = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const albumName = searchParams.get("albumName");

    const [useAlbum, setAlbum] = useState<album[]>([]);

    const fetchPhoto = useCallback(async () => {
        const res = await fetch(
        "https://jsonplaceholder.typicode.com/photos?albumId=" + id
        );
        return res.json()
    },[id])

    useEffect(() => {
        const fetchUserAlbum = async () => {
            const data = fetchPhoto()
            const userAlbum: album[] = await data;
            setAlbum(userAlbum);
        
        };
        fetchUserAlbum();
    }, [fetchPhoto]);

    return (
        <div>
        <div className="flex justify-center mb-5 text-3xl">
            <h1>{albumName} Album</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4">
            {useAlbum.map((album) => (
            <div
                key={album.id}
                className="py-4 px-8 border border-blue-200 flex flex-col justify-between text-center"
            >
                {album.title}
                <div className="flex justify-center mt-5">
                    <Image
                        src={album.url}
                        width={100}
                        height={100}
                        alt={album.url}
                    />
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default PhotosPage;
