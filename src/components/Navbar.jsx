import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-cyan-100 lg:text-lg p-4">
      <NavbarItem title="Trending Movies /Series" param="fetchTrending" />
      <NavbarItem title="Top Rated Movies /Series" param="fetchTopRated" />
    </div>
  );
}
