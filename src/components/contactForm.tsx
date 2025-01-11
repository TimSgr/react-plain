import Link from 'next/link';
import "../app/globals.css";

function contactForm(props: { text: string, link: string  }) {
return(
    <form className="contactForm" id="contactForm">
        <div className="name_input h-12 group" tabIndex={0}>
            <label className="absolute text-black z-10 group-active:text-green">Vorname</label>
            <input type="text" id="firstName" className="relative h-full"/>
        </div>
    </form>
)}
export default contactForm;