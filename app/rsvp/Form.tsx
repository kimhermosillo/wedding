import React, { ReactElement, useState } from 'react';

export interface FormProps {
    status: string | null;
    setStatus: any;
}
export default function Form({status, setStatus}: FormProps): ReactElement{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rsvp: false,
        dietaryRestrictions: '',
        message: '',
    });
    const [dietaryRestrictions, setDietaryRestrictions] = useState<boolean>(false);

    const [successful, setSuccessful] = useState<boolean>();


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
                setSuccessful(true);
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
    {status === null && (
<>

        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
        />

        <input
            type="email"
            name="email"
            placeholder="Email (optional)"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Dietary restrictions?
        </button>
        {dietaryRestrictions && (<input
            type="text"
            name="dietaryRestrictions"
            placeholder="Dietary Restrictions (optional)"
            value={formData.dietaryRestrictions}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />)}
        <textarea
            name="message"
            placeholder="Message (optional)"
            value={formData.message}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <button
            onClick={handleRSVP}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            RSVP Now
        </button>
        </>
    )}
    </>)
}