//import Image from "next/image";
import Link from 'next/link'
import PrimaryButton from '../components/primaryButton';
import SecondaryButton from '../components/secondaryButton';


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
        <div className='flex w-full justify-center bg-darkpurple'>
          <PrimaryButton text="Mehr erfahren" link="https://google.com">
          </PrimaryButton>
        </div>
        <div className='flex w-full justify-center bg-lightblue'>
          <SecondaryButton text="Mehr erfahren" link="https://google.com">
          </SecondaryButton>
        </div>
      </div>
      <footer>

      </footer>
    </div>
  );
}
