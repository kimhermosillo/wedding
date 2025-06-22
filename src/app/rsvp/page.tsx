'use client'
import { useState } from "react"

export default function RSVPInput() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rsvp: false,
        dietaryRestrictions: '',
        message: '',
    });

    const [status, setStatus] = useState<string | null>(null);
    const [dietaryRestrictions, setDietaryRestrictions] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleRSVP = async () => {
        setStatus(null);
        try {
            const res = await fetch('http://localhost:7000/sendRsvp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('RSVP successful!');
            } else {
                setStatus('RSVP failed.');
            }
        } catch (error) {
            console.error(error);
            setStatus('An error occurred.');
        }
    };

    return (
        <>
            <p>We would love for you to be able to join us! Please RSVP to let us know if you're able to attend.</p>

            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="border px-2 py-1 mb-2 block w-full"
            />

            <input
                type="email"
                name="email"
                placeholder="Email (optional)"
                value={formData.email}
                onChange={handleChange}
                className="border px-2 py-1 mb-2 block w-full"
            />

            <label className="inline-flex items-center mb-2">
                <input
                    type="checkbox"
                    name="rsvp"
                    checked={formData.rsvp}
                    onChange={handleChange}
                    className="mr-2"
                />
                Attending
            </label>
            <button
                onClick={() => setDietaryRestrictions(!dietaryRestrictions)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 mb-2">
                Dietary restrictions?
            </button>
            {dietaryRestrictions && (<input
                type="text"
                name="dietaryRestrictions"
                placeholder="Dietary Restrictions (optional)"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                className="border px-2 py-1 mb-2 block w-full"
            />)}

            <textarea
                name="message"
                placeholder="Message (optional)"
                value={formData.message}
                onChange={handleChange}
                className="border px-2 py-1 mb-2 block w-full"
            />

            <button
                onClick={handleRSVP}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
            >
                RSVP Now
            </button>

            {status && <p className="mt-4">{status}</p>}
        </>
    );
}