export const NavEntry = ({ name, link }: { name: string; link: string }) => {
  return (
    <a
      href={link}
      className="text-gray-300 hover:text-red-500 text-l px-4 py-2"
    >
      {name}
    </a>
  );
};
