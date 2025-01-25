import Image from "next/image";
import "../app/globals.css";
import Link from "next/link";

function information() {
  return (
    <div className="wrapper flex flex-col">
        <Image 
            src="/gatze2.jpg" alt="tier"
            width={180}
            height={138}
        />
        <p>
            Tierschutz Braunschweig
            gegr. 1882 e. V.
        </p>
        <p className="flex flex-col">
            <b>Anschrift</b>
            <span>Biberweg 30, 38114 Braunschweig</span>
        </p>
        <p className="flex flex-col">
            <b>Kontakt</b>
            <span>Geschäftsstelle: <Link href="tel:0531500006">0531 - 50 00 06</Link></span>
            <span>Tierheim: <Link href="tel:0531500007">0531 - 50 00 07</Link></span>
            <span>Fax: 0531 - 57 48 15</span>
            <span>Email: <Link href="mailto:info@tierheimbraunschweig.de">info[at]tierheimbraunschweig.de</Link></span>
        </p>
        <p className="flex flex-col">
            <b>Spendenkonto</b>
            <span>Landessparkasse Braunschweig</span>
            <span>DE97 2505 0000 0000 5460 10</span>
            <span>NOLADE2HXXX</span>
        </p>
    </div>
  );
}

export default information;
