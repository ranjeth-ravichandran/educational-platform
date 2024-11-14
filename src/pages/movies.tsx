import clientPromise from "../lib/mongodb";
import { GetServerSideProps } from 'next';
import Hero from "@/components/Hero";


interface Movie {
    _id: string;
    title: string;
    metacritic: number;
    plot: string;
}


interface MoviesProps {
    movies: Movie[];
}


const Movies: React.FC<MoviesProps> = ({ movies }) => {
    return (
        <>
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1517897286832-ba927d20e824?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Top 20 Movies of All Time"
                buttonClass="hide" text={""} url={""} buttonText={""} />
            <ul>
                {movies.map((movie) => (
                    <li key={movie._id}>
                        <h2>{movie.title}</h2>
                        <h3>{movie.metacritic}</h3>
                        <p>{movie.plot}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};


export default Movies;


export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix");
        const movies = await db
            .collection("movies")
            .find({})
            .sort({ metacritic: -1 })
            .limit(20)
            .toArray();
        return {
            props: { movies: JSON.parse(JSON.stringify(movies)) },
        };
    } catch (e) {
        console.error(e);
        return { props: { movies: [] } };
    }
};