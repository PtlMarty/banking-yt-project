import Image from "next/image";
import React from "react";
import MobilNavBar from "../../components/MobileNavBar";
import SideBar from "../../components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: "John",
    lastName: "Doe",
  };
  return (
    <main className=" flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobilNavBar user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
