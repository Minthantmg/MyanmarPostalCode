"use client";
import type {Metadata} from "next";
import "./globals.css";
import Nav from "../app/components/_nav";
import Footer from "../app/components/_footer";
import {useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Menu from "./components/_menu";

const queryClient = new QueryClient();

const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const [display, setDisplay] = useState(false);

    const toggleDisplay = () => {
        setDisplay(!display);
    };

    const closeDisplay = () => {
        setDisplay(false);
    };

    // className="sm:px-32 px-4"
    return (
        <html lang="en">
        <body>
        <QueryClientProvider client={queryClient}>
            {display ? (
                <>
                    <Menu closeDisplay={closeDisplay}/>
                </>
            ) : (
                <>
                    <Nav toggleDisplay={toggleDisplay}/>
                    {children}
                    <Footer/>
                </>
            )}
        </QueryClientProvider>
        </body>
        </html>
    );
}
