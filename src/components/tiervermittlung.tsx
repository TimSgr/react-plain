import Link from "next/link";
import Image from "next/image";
import "../app/globals.css";

function tiervermittlung() {
  return (
    <div className="wrapper flex flex-col">
        <Link href="#">
            <Image 
                src="/gatze.jpg" alt="tier"
                width={180}
                height={38}
            />
            <span>
                <b>Runa</b>
                <span>weiblich, kastriert</span>
            </span>
        </Link>
    </div>
  );
}

export default tiervermittlung;
