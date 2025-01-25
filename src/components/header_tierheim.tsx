"use client";
import { useState } from "react";
import Link from "next/link";
import "../app/globals.css";

function HeaderTierheim() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full flex flex-col lg:gap-6 relative">
      <div className="top_menu flex w-full py-6 text-tierheimText fixed bg-white">
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link href="/kontakt/" className="hover:text-black">
              Kontakt
            </Link>
          </li>
          <li>
            <Link href="/suche/" className="hover:text-black">
              Suche
            </Link>
          </li>
          <li>
            <Link href="/instagram/" className="hover:text-black">
              Instagram
            </Link>
          </li>
          <li>
            <form
              action="https://www.paypal.com/donate"
              method="post"
              target="_blank"
            >
              <input
                type="hidden"
                name="hosted_button_id"
                value="R25JK8Y9FG6SW"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/de_DE/DE/i/btn/btn_donate_LG.gif"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Spenden mit dem PayPal-Button"
              />
            </form>
          </li>
        </ul>
      </div>

      <div className="main_menu lg:flex lg:justify-center lg:border-b-4 lg:border-tierheimText">
        <button
          className={`lg:hidden bg-tierheimText text-white p-2 rounded-md ${isMenuOpen ? "bg-paulaidee text-black fixed z-50 right-10 top-5 w-10" : "bg-paulaidee text-black fixed z-50 right-10 top-5 w-10"}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? "X" : "☰"}
        </button>

        <div
          className={`fixed top-20 bg-paulaidee left-0 w-full h-full bg-opacity-70 z-40 transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <ul className="flex flex-col px-10 gap-6 py-10 lg:gap-4 lg:p-6 bg-paulaidee lg:bg-white h-full">
            <li>
              <Link href="/verein/" className="text-paulaundjasminidee lg:text-tierheimText">
                Verein
              </Link>
            </li>
            <li className="group flex">
              <Link href="#" className="text-paulaundjasminidee lg:text-tierheimText">
                Tierheim
              </Link>
              <span className="">{'>'}</span>
              <ul className="hidden group-hover:flex">
                <li>
                    <Link href="#">
                        Tiervermittlung
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        Tierpension
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        Neues
                    </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/tierschutzthemen/" className="text-paulaundjasminidee lg:text-tierheimText">
                Tierschutzthemen
              </Link>
            </li>
            <li>
              <Link href="/sachkundennachweis/" className="text-paulaundjasminidee lg:text-tierheimText">
                Sachkundennachweis
              </Link>
            </li>
            <li>
              <Link href="/dienste/" className="text-paulaundjasminidee lg:text-tierheimText">
                Dienste
              </Link>
            </li>
            <li>
              <Link href="/tierfriedhof/" className="text-paulaundjasminidee lg:text-tierheimText">
                Tierfriedhof
              </Link>
            </li>
            <li>
              <Link href="/help/" className="lg:text-tierheimText">
                Wir brauchen Sie!
              </Link>
            </li>
            <li>
              <Link href="/veranstaltungen/" className="lg:text-tierheimText">
                Veranstaltungen
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-wrap gap-4 p-2">
          <li>
            <Link href="/verein/" className="hover:underline text-tierheimText">
              Verein
            </Link>
          </li>
          <li>
            <Link
              href="/tierheim/"
              className="hover:underline text-tierheimText"
            >
              Tierheim
            </Link>
          </li>
          <li>
            <Link
              href="/tierschutzthemen/"
              className="hover:underline text-tierheimText"
            >
              Tierschutzthemen
            </Link>
          </li>
          <li>
            <Link
              href="/sachkundennachweis/"
              className="hover:underline text-tierheimText"
            >
              Sachkundennachweis
            </Link>
          </li>
          <li>
            <Link href="/dienste/" className="hover:underline text-tierheimText">
              Dienste
            </Link>
          </li>
          <li>
            <Link
              href="/tierfriedhof/"
              className="hover:underline text-tierheimText"
            >
              Tierfriedhof
            </Link>
          </li>
          <li>
            <Link href="/help/" className="hover:underline text-tierheimText">
              Wir brauchen Sie!
            </Link>
          </li>
          <li>
            <Link
              href="/veranstaltungen/"
              className="hover:underline text-tierheimText"
            >
              Veranstaltungen
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default HeaderTierheim;
