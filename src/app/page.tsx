"use client";
//import Image from "next/image";
import Link from 'next/link'
import PrimaryButton from '../components/primaryButton';
import SecondaryButton from '../components/secondaryButton';
import SendButton from '../components/sendButton';
import ContactForm from '../components/contactForm';
import SimpleCarousel from '../components/simpleCarousel';


function search(formData: FormData) {
  const entries = Array.from(formData.entries()); // Formulardaten in ein Array konvertieren
  console.log("Form data submitted:", entries);
  alert(
      `Formular gesendet: ${entries
          .map(([key, value]) => `${key}: ${value}`)
          .join(", ")}`
  );
}
const fields = ["Vorname", "Nachname", "E-Mail", "Nachricht"];

const images = ["next.svg", "sixt-logo.svg", "window.svg", "sixt-logo.svg", "file.svg", "globe.svg"];

export default function Home() {
  return (
    <div className="w-full flex flex-col sm:flex-column justify-center items-center self-center justify-self-center font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-row justify-between w-full px-8 py-2 align-center items-center">
        <div>
          Logo
        </div>
        <div>
          <ul className="list-none flex gap-4">
            <a className="" href="#">
              <li>
                Test1
              </li>
            </a>
            <Link href="/projects">
            <li>
                Test2
              </li>
            </Link>
          </ul>
        </div>
        <div>
        </div>
      </header>

      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="flex justify-center">
          01
        </div>
        <div className="flex justify-center">
          02
        </div>
      </div>

      <div className='flex flex-col w-full justify-center'>
        <div className='flex w-full flex-col justify-center bg-darkpurple content-center items-center py-8 gap-10'>
          <div className="text_block text-newtext2 text-center	w-3/4 text-xl	">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, s
            ed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
          <PrimaryButton text="Mehr erfahren" link="https://google.com">
          </PrimaryButton>
        </div>
        <div className='flex w-full justify-center bg-lightblue'>
          <SecondaryButton text="Mehr erfahren" link="https://google.com">
          </SecondaryButton>
        </div>
        <div className='flex w-full justify-center bg-lightblue'>
          <SendButton text="Mehr erfahren">
          </SendButton>
        </div>
        <div className='flex py-8 w-full justify-center bg-lightblue'>
          <ContactForm inputfields={fields} onSubmit={search}>
          </ContactForm>
        </div>
        
        <SimpleCarousel images={images}/>
      </div>
      <footer>

      </footer>
    </div>
  );
}
