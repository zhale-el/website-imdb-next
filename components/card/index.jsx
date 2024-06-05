import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
const Card = ({ result }) => {
  return (
    <div className="group border border-gray-300 sm:rounded-md dark:bg-gray-600 bg-amber-50 p-2 md:p-6 m-2 cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="group-hover:opacity-75 transition-opacity duration-300"
        />

        <div>
          <h2 className="text-2xl sm:text-sm text-center font-bold my-2 ">
            {result.original_title}
          </h2>
          <div className="flex items-center justify-between mt-6 mb-4 ">
            <span className="text-sm dark:text-amber-300 text-blue-950">
              {result.release_date}
            </span>
            <div className="flex items-center justify-center">
              <FaStar className="mr-1 text-orange-400" />
              <span className="text-sm dark:text-amber-300 text-blue-950">
                {result.vote_average}
              </span>
            </div>
          </div>

          <p className="line-clamp-2 text-sm">{result.overview}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
