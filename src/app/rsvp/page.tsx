'use client'
import { useState } from "react"

export default function RSVPInput() {
    const [name, setName] = useState('')

    return (
        <>
            We would love for you to be able to join us! Please RSVP to let us know if you're able to attend.
            <input onChange={(e) => setName(e.target.value)} placeholder="Your name is?" />
            <button onClick={() => console.log('send this to db')}>RSVP!</button>
        </>
    )
}