import React, { FC } from 'react';

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-neutral-50 w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-200 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-neutral-900 hover:underline">
          Home
        </div>
        <div className="px-3 text-center text-neutral-900 hover:underline">
          Series
        </div>
        <div className="px-3 text-center text-neutral-900 hover:underline">
          Films
        </div>
        <div className="px-3 text-center text-neutral-900 hover:underline">
          New & Popular
        </div>
        <div className="px-3 text-center text-neutral-900 hover:underline">
          My List
        </div>
        <div className="px-3 text-center text-neutral-900 hover:underline">
          Browse by Languages
        </div>
      </div>
    </div>
  )
}

export default MobileMenu;