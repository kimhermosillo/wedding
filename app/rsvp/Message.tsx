'use client'
import React, { ReactElement } from "react";

export interface MessageProps {
    status: string | null;
    successful: boolean | null;
}

export default function Message({status}: MessageProps): ReactElement  {
    const successful = status === 'RSVP successful!'
    const nothingYet = status === null
    const greenMessage = "omg this is going to be sooooo much fun!!! please let me know if you have any questions :)"
    const yellowMessage = "hurry we r excited for ur rsvp"
    const redMessage = "You're doing something terribly wrong to be seeing this message... text me plz"

    return (
        <>
            {nothingYet ? yellowMessage : successful ? greenMessage : redMessage}
        </>
    );
}