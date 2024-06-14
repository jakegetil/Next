"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "@/app/components/modal";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: any;
  phone: string;
  company: any;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users: User[] = await res.json();
      setUsers(users);
    };
    fetchUsers();
  }, []);

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <div className="flex justify-center text-3xl mb-5">USERS</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4">
        {users.map((user) => (
          <div
            className="flex flex-col justify-between rounded-lg mt-5 py-5 px-3 border "
            key={user.id}
          >
            <div className="flex justify-center">
              <h1>{user.name}</h1>
            </div>
            <div className="flex justify-center text-sm mb-10">
              {user.email}
            </div>
            <div className="flex gap-2">
              <Image
                src="./phone.svg"
                alt="Phone Icon"
                width={17}
                height={17}
                className="dark:invert"
              />
              {user.phone}
            </div>
            <div className="flex gap-2">
              <Image
                src="./location.svg"
                alt="Phone Icon"
                width={17}
                height={17}
                className="dark:invert"
              />
              {user.address.street}, {user.address.suite}, {user.address.city},{" "}
              {user.address.zipcode}
            </div>
            <div className="divider"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Link
                href={{
                  pathname: "/users/album",
                  query: {
                    id: user.id,
                    userName: user.name,
                  },
                }}
                className="btn rounded-md"
              >
                Album
              </Link>
              <Link
                href={{
                  pathname: "/users/post",
                  query: {
                    id: user.id,
                    userName: user.name,
                  },
                }}
                className="btn rounded-md"
              >
                Post
              </Link>
            </div>
            <div className="divider"></div>
            <div className="flex justify-center">
              <Modal onDelete={() => handleDelete(user.id)} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
