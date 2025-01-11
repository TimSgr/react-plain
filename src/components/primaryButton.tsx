import Link from 'next/link';
import "../app/globals.css";

function primaryButton(props: { text: string, link: string  }) {
return(
    <button className='overflow-hidden w-fit px-3.5 py-2 border-2 border-lightblue rounded-md m-1 relative group cursor-pointer font-medium text-lightblue text-white'>
        <Link href={props.link} className="">
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-lightblue top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-lightblue transition duration-300 group-hover:text-black ease">{props.text}</span>
        </Link>
    </button>
)}
export default primaryButton;