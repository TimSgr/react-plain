import Link from "next/link";
import "../app/globals.css";

function aktuellles() {
  return (
    <div className="wrapper flex flex-col gap-2">
        <b>Aktuelles:</b>
        <div className="item flex flex-col gap-0">
            <span>Plätze Zukunftstag 2025 bereits besetzt</span>
            <Link href="#">mehr lesen</Link>
        </div>
        <div className="item flex flex-col gap-0">
            <span>Plätze Zukunftstag 2025 bereits besetzt</span>
            <Link href="#">mehr lesen</Link>
        </div>
        <div className="item flex flex-col gap-0">
            <span>Plätze Zukunftstag 2025 bereits besetzt</span>
            <Link href="#">mehr lesen</Link>
        </div>
        <div className="item flex flex-col gap-0">
            <span>Plätze Zukunftstag 2025 bereits besetzt</span>
            <Link href="#">mehr lesen</Link>
        </div>
        <div className="item flex flex-col gap-0">
            <span>Plätze Zukunftstag 2025 bereits besetzt</span>
            <Link href="#">mehr lesen</Link>
        </div>
    </div>
  );
}

export default aktuellles;
