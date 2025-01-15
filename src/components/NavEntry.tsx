export const NavEntry = ({ name }: { name: string }) => {
  return (
    <h2 className="text-white hover:text-red-600 text-xl p-2 mt-2 ml-4 mb-2">
      {" "}
      {name}
    </h2>
  );
};
