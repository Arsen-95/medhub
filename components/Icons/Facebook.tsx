import { createIcon } from "@chakra-ui/icons";

export const Facebook = createIcon({
    displayName: 'Facebook',
    viewBox: '0 0 24 24',
    // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
    path: (
        <>
            <path
                d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" 
                fill="white"
            />
            <path
                d="M13.0508 19.0557V12.5271H14.853L15.0918 10.2773H13.0508L13.0538 9.15125C13.0538 8.56447 13.1096 8.25006 13.9524 8.25006H15.079V6H13.2766C11.1116 6 10.3495 7.0914 10.3495 8.92678V10.2776H9V12.5274H10.3495V19.0557H13.0508Z"
                fill="#313338"
            />
        </>
    ),
});