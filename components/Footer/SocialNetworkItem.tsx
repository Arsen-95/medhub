import { Image, Link } from "@chakra-ui/react";


const SocialNetworkItem = ({href, children}) => {
    return (
        <Link 
            href={href}
            _notLast={{mr: '3'}}    
        >
            {children}
        </Link>
    );
};

export default SocialNetworkItem;