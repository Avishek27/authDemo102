"use client"

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { BackButton } from "./back-button";
import { Header } from "./header";
import { Socials } from "./socials";


interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocials?: boolean;
}


export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocials,
}: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header message={headerLabel}/>
            </CardHeader>
            <CardContent>
            {children}
            </CardContent>
         {showSocials && (
            <CardFooter>
                <Socials/>
            </CardFooter>
         )}
         <CardFooter>
            <BackButton href={backButtonHref} label={backButtonLabel}/>
         </CardFooter>
        </Card>
    )
}