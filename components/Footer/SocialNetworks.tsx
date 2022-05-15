import { Flex, Icon, Image, Link } from "@chakra-ui/react";
import { Facebook } from "../Icons/Facebook";
import { Google } from "../Icons/Google";
import { Instagram } from "../Icons/Instagram";
import { Telegram } from "../Icons/Telegtam";
import SocialNetworkItem from "./SocialNetworkItem";


const SocialNetworks = () => {
    return (
        <Flex 
            justifyContent={'center'}
            mb={6}
        >
            <SocialNetworkItem
                href={'www.instagram.com/MedHub'}
            >
                <Icon as={Instagram} fillRule="evenodd" w={6} h={6}/>
            </SocialNetworkItem>
            <SocialNetworkItem
                href={'www.instagram.com/MedHub'}
            >
                <Icon as={Google} w={6} h={6}/>
            </SocialNetworkItem>
            <SocialNetworkItem
                href={'www.facebook.com/MedHub'}
            >
                <Icon as={Facebook} w={6} h={6}/>
            </SocialNetworkItem>
            <SocialNetworkItem
                href={'www.instagram.com/MedHub'}
            >
                <Icon as={Telegram} w={6} h={6}/>
            </SocialNetworkItem>
        </Flex>
    );
};

export default SocialNetworks;