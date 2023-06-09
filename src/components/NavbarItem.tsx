import { type FC } from 'react';

interface NavbarItemProps {
    label: string;
  active?: boolean;
}

const NavbarItem: FC<NavbarItemProps> = ({label,active}) => {
  return (
    <div className={active ? 'text-neutral-900 cursor-default font-bold' : 'text-neutral-800 hover:text-neutral-900 cursor-pointer transition font-medium'}>
    {label}
  </div>
)
}

export default NavbarItem