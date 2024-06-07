import Results from "../components/results";

const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}&language=en-Us&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Faild to fetch data");
  }

  const results = data.results;

  return (
    <>
      <Results results={results} />
    </>
  );
};

export default Home;
