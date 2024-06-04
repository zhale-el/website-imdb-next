import Link from "next/link";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <Link
      href={address}
      className="font-bold transition-all duration-500 hover:text-amber-500"
    >
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
};

export default MenuItem;
