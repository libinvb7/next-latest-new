"use client";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu.";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function NavbarDemo() {
  const [navbarColor, setNavbarColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarColor("#fff");
      } else {
        setNavbarColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="fixed top-0 py-3 z-[99] flex items-center justify-center  top-0 w-full "
      style={{
        backgroundColor: navbarColor,
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="container">
        <div className="flex items-center">
          <div className="w-1/3">
            <Link href="/">
              <Image
                src="/assets/images/Datapoint_logo.png"
                className="bg-white rounded-lg p-2"
                alt="data point logo"
                width={150}
                height={50}
              />
            </Link>
          </div>
          <div className="w-1/3">
            <Navbar />
          </div>
          <div className="w-1/3"></div>
        </div>
      </div>
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn(
        "w-fit relative top-0 inset-x-0 w-full mx-auto z-50 hidden md:block",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Industries">
          <div className="  text-sm grid grid-cols-4 gap-10 p-4">
            <ProductItem
              title="Manufacturing"
              href="/manufacturing-balanced-scorecard-software"
              src="https:/assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Energy"
              href="/energy-balanced-scorecard-software"
              src="https:/assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Automotive"
              href="/automotive-balanced-scorecard-software"
              src="https:/assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Electronics"
              href="/electronics-balanced-scorecard-software"
              src="https:/assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="FMCG & retail"
              href="/fmcg-retail-balanced-scorecard"
              src="https:/assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="Banking"
              href="/bank-balanced-scorecard-board"
              src="https:/assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Solutions">
          <div className="  text-sm grid grid-cols-4 gap-10 p-4">
            <ProductItem
              title="SQDCP"
              href="/sqcdp-board-visual-management-software"
              src="https:/assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="SQCPL"
              href="/sqcpl-board_scorecard-system-strategy"
              src="https:/assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="SQDCPS"
              href="/sqdcps-visual-planning-board-sofware"
              src="https:/assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="ESQDCP "
              href="/esqdcp-board-visual-management-tool"
              src="https:/assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="SQDCL"
              href="/sqdcl-board-visual-management-tool"
              src="https:/assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="SQDCPSI"
              href="/sqdcpsi-visual-management-board-software"
              src="https:/assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="EQDCPS"
              href="/eqdcps-board-strategy-plan-software"
              src="https:/assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="SheQCPLDCPS"
              href="/sheqcpldcps-board-visual-strategy"
              src="https:/assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="SQDCM"
              href="/sqdcm-visual-management-board"
              src="https:/assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="FCIL"
              href="/fcil-balanced-scorecard"
              src="https:/assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="SQDC"
              href="sqdc-visual-management-huddle-board"
              src="https:/assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <Link  href="/data-point-software-blogs" className="text-white">Blog</Link>
        
      </Menu>
    </div>
  );
}
