import Hero from "@/components/Hero";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import { type NextPageContext } from "next"
import { getSession } from "next-auth/react"
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';

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
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  return (
<> 
<Navbar />
<Hero />
<div className="pb-40">
<div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
</div>
</div>
</>
)
}

export default Home