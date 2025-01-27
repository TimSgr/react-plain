"use client";
import "../app/globals.css";
import SendButton from "./sendButton";
import { useState } from "react";

type ContactFormProps = {
    inputfields: string[];
    onSubmit: (formData: FormData) => void;
};

type ErrorState = {
    [key: string]: string;
};

function ContactForm({ inputfields, onSubmit }: ContactFormProps) {
    const [errors, setErrors] = useState<ErrorState>({});

    const validateField = (name: string, value: string): string => {
        switch (name) {
            case "e-mail":
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
            case "telefon":
                return /^[0-9\s+()-]*$/.test(value) ? "" : "Bitte geben Sie eine gültige Telefonnummer ein.";
            default:
                return value.trim() === "" ? "Dieses Feld darf nicht leer sein." : "";
        }
    };

    const handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const newErrors: ErrorState = {};

        inputfields.forEach((field) => {
            const name = field.toLowerCase();
            const value = formData.get(name)?.toString() || "";
            const error = validateField(name, value);
            if (error) {
                newErrors[name] = error;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            onSubmit(formData);
        }
    };

    return (
        <form
            className="contactForm gap-6 flex flex-col w-1/2"
            id="contactForm"
            onSubmit={handleSubmit}
        >
            {inputfields.map((field, index) => {
                const name = field.toLowerCase();
                const isTextarea = name === "nachricht";

                return (
                    <div key={index} className="relative h-12 group cursor-text">
                        {isTextarea ? (
                            <textarea
                                rows={4}
                                id={name}
                                name={name}
                                placeholder=" "
                                className={`peer relative h-full w-full px-2 pt-3 pb-1 border ${
                                    errors[name]
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-400 focus:ring-blue-500"
                                }`}
                                onInput={(e) => handleInput(e as React.ChangeEvent<HTMLTextAreaElement>)}
                                onBlur={(e) => handleInput(e as React.ChangeEvent<HTMLTextAreaElement>)}
                            />
                        ) : (
                            <input
                                type={
                                    name === "telefon"
                                        ? "tel"
                                        : name === "e-mail"
                                        ? "email"
                                        : "text"
                                }
                                id={name}
                                name={name}
                                placeholder=" "
                                className={`peer relative h-full w-full px-2 pt-3 pb-1 border ${
                                    errors[name]
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-gray-400 focus:ring-blue-500"
                                }`}
                                onInput={(e) => handleInput(e as React.ChangeEvent<HTMLInputElement>)}
                                onBlur={(e) => handleInput(e as React.ChangeEvent<HTMLInputElement>)}
                            />
                        )}
                        <label
                            htmlFor={name}
                            className="absolute left-2 top-1/4 transform text-gray-500 transition-all duration-200 peer-placeholder-shown:top-1/6 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:translate-y-1/6 peer-focus:top-0 peer-focus:text-blue-500 peer-focus:translate-y-0 cursor-text"
                        >
                            {field}
                        </label>
                        {errors[name] && (
                            <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
                        )}
                    </div>
                );
            })}
            <SendButton text="Kontakt anfragen" />
        </form>
    );
}

export default ContactForm;