//import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center items-center self-center justify-self-center font-[family-name:var(--font-geist-sans)]">
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
            <a className="hover:underline" href="#">
              <li>
                Test2
              </li>
            </a>
          </ul>
        </div>
        <div>
          <button className="bg-blue text-white p-2 rounded-md hover:bg-darkblue">
            Testing
          </button>
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
      <footer>

      </footer>
    </div>
  );
}
