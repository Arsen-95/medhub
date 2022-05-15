import { Image, Link } from "@chakra-ui/react";

type Props = {
  href: string;
};

const SocialNetworkItem: React.FC<Props> = ({ href, children }) => {
  return (
    <Link href={href} _notLast={{ mr: "3" }}>
      {children}
    </Link>
  );
};

export default SocialNetworkItem;
