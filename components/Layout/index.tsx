import React from "react";
import Head from "next/head";

import Header from "../Header";
import MainNav from "../MainNav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="main-layout">
      <Head>
        <title>Southern District of ECC BSA</title>
        <meta
          name="description"
          content="Southern District of East Carolina Councile Boy Scouts of America"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        meta
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainNav />
      <main className="lg:w-4/5 m-auto lg:shadow">{children}</main>
    </div>
  );
}
