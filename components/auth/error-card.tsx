import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { CardWrapper } from "./card-wrapper"


export const ErrorCard = () => {
    return(
        <CardWrapper headerLabel="Oops something wrong happened!"
        backButtonHref="/auth/login"
        backButtonLabel="Back to login"
        >
            <ExclamationTriangleIcon className="flex items-center justify-center h-6 w-6"/>
        </CardWrapper>
    )
}