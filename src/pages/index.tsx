import { type NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"
import  useCurrentUser  from "../hooks/useCurrentUser"
export async function getServerSideProps(context: NextPageContext) {
const session = await getSession(context);

if(!session) {
  return {
    redirect: {
      destination: "/auth",
      permanent: false,
    },
  };
}
return {
  props: {}
}
}

const Home = () => {
  const {data : user} = useCurrentUser();
  return (
<> 
<button className="bg-red-500" onClick={() => signOut()}>
  Sign out
</button>
<p className="text-red-500">logged in as {user?.name}</p>

</>
)
}

export default Home