'use client'
import React from "react";
import { useState } from "react"
import Form from "./Form";
import Message from "./Message";

export default function RSVPInput() {
  const [status, setStatus] = useState<string | null>(null);


    return (
        <>
            <p>We would love for you to be able to join us! Please RSVP to let us know if you're able to attend.</p>
            <Form status={status}  setStatus={setStatus} />
            <Message status={status} successful={null} />
        </>
    );
}