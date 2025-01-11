"use client";
import "../app/globals.css";
import SendButton from "./sendButton";

type ContactFormProps = {
    inputfields: string[]; // Array of strings
    onSubmit: (formData: FormData) => void; // Callback-Funktion für die Formular-Daten
};

function ContactForm({ inputfields, onSubmit }: ContactFormProps) {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Verhindert das Standardverhalten (Seitenweiterleitung)
        const formData = new FormData(event.currentTarget); // Erstelle FormData aus dem Formular
        onSubmit(formData); // Callback mit den Formulardaten
    };

    return (
        <form
            className="contactForm gap-4 flex flex-col w-1/2"
            id="contactForm"
            onSubmit={handleSubmit} // Ereignis-Handler für das Submit-Event
        >
            {inputfields.map((field, index) => (
                <div key={index} className="relative h-12 group">
                    <input
                        type="text"
                        id={field.toLowerCase()}
                        name={field.toLowerCase()} // Füge einen Namen hinzu, um die Daten in FormData zu identifizieren
                        placeholder=" "
                        className="peer relative h-full w-full px-2 pt-3 pb-1 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <label
                        htmlFor={field.toLowerCase()}
                        className="absolute left-2 top-1/4 transform text-gray-500 transition-all duration-200 peer-placeholder-shown:top-1/6 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:translate-y-1/6 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:translate-y-0"
                    >
                        {field}
                    </label>
                </div>
            ))}
            <SendButton text="Kontakt anfragen" />
        </form>
    );
}

export default ContactForm;
