"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Postcard Highlights" },
    { href: "/postcard-image", label: "Postcard Image" },
    { href: "/postcard-stamp", label: "Postcard Stamp" },
    { href: "/my-location", label: "My Location" },
    { href: "/local-detail", label: "Local Detail" },
    { href: "/my-video-audio", label: "My Video/Audio" },
    { href: "/commemorative-seal", label: "Commemorative Seal" },
    { href: "/greetings", label: "Greetings" },
    { href: "/recipients", label: "Recipients" },
    { href: "/preview", label: "Preview" },
    { href: "/pay-and-send", label: "Pay and Send" },
  ];

  return (
    <aside className="w-64 bg-gray-100 p-6 shadow-md">
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`block py-2 px-4 rounded ${
                pathname === link.href
                  ? "bg-blue-600 text-white"
                  : "text-gray-700"
              } hover:bg-blue-500 hover:text-white`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <button className="w-full mt-8 bg-blue-600 text-white py-2 rounded">
        Save and Exit
      </button>
    </aside>
  );
}
