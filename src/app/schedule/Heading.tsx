import React, { ReactElement } from "react";

export interface MessageProps {
   title: string;
}

export default function Heading({title}: MessageProps): ReactElement  {


    return (
        <div className="font-[family-name:var(--font-beth-ellen)]">
           {title}
        </div>
    );
}