import Link from "next/link";
import { IconType } from "react-icons";

interface SideBarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}

const SideBarItem: React.FC<SideBarItemProps> = ({
    icon,
    label,
    active,
    href
}) => {
    return (
        <Link>
            Sidebar Item
        </Link>
    );
};

export default SideBarItem;