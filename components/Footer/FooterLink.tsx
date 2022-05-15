import { Link, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";


const FooterLink: FC<any> = ({ children, linkTo, linkColor = null, fontSize = null }) => {
    return (
        <>
        <NextLink 
            href={linkTo}
            passHref        
        >
            <ListItem 
                _notLast={{mb: '4'}}
            >
                <Link 
                    fontSize={fontSize ? fontSize : '14'}
                    lineHeight={4}

                    color={linkColor ? linkColor : '#8E8E93' }>
                    {children}
                </Link>
            </ListItem>
        </NextLink>
        </>
    );
};

export default FooterLink;