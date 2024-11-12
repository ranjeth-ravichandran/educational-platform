import React from "react";

export default function ContactForm() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Access the form inputs correctly
        const form = event.target as HTMLFormElement;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

        // Example usage: Log the input values
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Subject:", subject);
        console.log("Message:", message);

        // Add your form submission logic here (e.g., send to API)
    };

    return (
        <div className="form-container">
            <h1>Send a Message.</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="subject" placeholder="Subject" required />
                <textarea name="message" placeholder="Message" rows={4} required></textarea>
                <button type="submit" className="submit">
                    Send Message
                </button>
            </form>
        </div>
    );
}
