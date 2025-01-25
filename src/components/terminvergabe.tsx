import "../app/globals.css";

function terminvergabe() {
  return (
    <div className="wrapper flex flex-col gap-2">
        <span>
            Montag bis Freitag von 8.00 Uhr bis 18.00 Uhr
        </span>
        <span>
            Samstag und Sonntag von 10.00 Uhr bis 13.00 Uhr
        </span>
        <span>
            Feiertags geschlossen!
        </span>
        <span>
            Termine bitte telefonisch oder per E-Mail vereinbaren.
        </span>

    </div>
  );
}

export default terminvergabe;
