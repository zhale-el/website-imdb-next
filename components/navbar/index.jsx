import NavbarItem from "../navbaritem";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-12 dark:bg-gray-600  dark:text-gray-300 bg-amber-100 p-4 lg:text-lg">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
