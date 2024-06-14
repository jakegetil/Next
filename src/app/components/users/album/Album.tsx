"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface album {
  userId: number;
  id: number;
  title: string;
}

const AlbumPage = () => {

    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const userName = searchParams.get("userName");

    const [useAlbum, setAlbum] = useState<album[]>([]);

    const fetchAlbum = useCallback(async ()=>{
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/albums?userId=" + id
        );
        return res.json()
    },[id])

    useEffect(() => {
        const fetchUserAlbum = async () => {
            const data = fetchAlbum()
            const userAlbum: album[] = await data
            setAlbum(userAlbum);
        };
        fetchUserAlbum();
    }, [fetchAlbum]);

    return (
        <div>
        <div className="flex justify-center mb-5 text-3xl">
            <h1>{userName + "'s"} Album</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4">
            {useAlbum.map((album) => (
            <Link
                key={album.id}
                href={{
                pathname: "/users/album/photos",
                query: {
                    id: album.id,
                    albumName: album.title
                },
                }}
                className="py-4 px-8 border border-blue-200"
            >
                {album.title}
            </Link>
            ))}
        </div>
        </div>
    );

};

export default AlbumPage;
