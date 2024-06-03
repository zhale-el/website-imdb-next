import Link from "next/link";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <Link href={address}>
      <Icon />
      <p>{title}</p>
    </Link>
  );
};

export default MenuItem;
