import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import { useCallback, type FC } from 'react';

import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from 'next/router';


const images = [
  '/default-blue.png',
  '/default-red.png',
  '/default-slate.png',
  '/default-green.png'
]

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}


interface UserCardProps {
  name: string;
}
const UserCard: React.FC<UserCardProps> = ({ name }) => {
  const imgSrc = images[Math.floor(Math.random() * 4)];

  return (
    <div className="group flex-row w-44 mx-auto">
        <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-blue-600 overflow-hidden">
          <img draggable={false} className="w-max h-max object-contain" src={imgSrc} alt="" />
        </div>
      <h2 className="mt-4 text-neutral-600 text-2xl text-center group-hover:text-blue-600 cursor-pointer">{name}</h2>
   </div>
  );
}

const Profiles: FC = ({}) => {
  const router = useRouter();
  const { data: currentUser } = useCurrentUser();

  const selectProfile = useCallback(() => {
    router.push('/');
  }, [router]);
  return (
<div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-neutral-900 text-center">Who&#39;s watching?</h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => selectProfile()}>
            <UserCard name={currentUser?.name} />
          </div>
        </div>
      </div>
    </div>
)
}

export default Profiles