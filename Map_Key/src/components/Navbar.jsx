const Navbar = () => {
  const navItems = [
    "Item 01",
    "Item 02",
    "Item 03",
    "Item 04",
    "Item 05",
    "Item 06",
    "Item 07",
  ];
  return (
    <div className="bg-rose-200 selection:text-rose-600 selection:bg-rose-100 flex justify-center list-none text-xl fixed top-0 right-0 min-w-screen rounded-2xl p-1 font-bold text-rose-800">
      {navItems.map((item, index) => {
        return (
          <li key={index} className="p-[10px]">
            {item}
          </li>
        );
      })}
    </div>
  );
};

export default Navbar;
