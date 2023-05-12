import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { type NextPageContext } from "next"
import { getSession } from "next-auth/react"
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
  return (
<> 
<Navbar />
<Hero />

</>
)
}

export default Home