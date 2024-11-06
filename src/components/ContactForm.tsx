import React from "react";

export default function ContactForm() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const name = form.name.valueOf;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;

        // Logic to handle form data
    };

    return (
        <div className="form-container">
            <h1>Send a Message.</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="text" name="subject" placeholder="Subject" />
                <textarea name="message" placeholder="Message" rows={4}></textarea>
                <button type="submit" className="submit">
                    Send Message
                </button>
            </form>
        </div>
    );
}
