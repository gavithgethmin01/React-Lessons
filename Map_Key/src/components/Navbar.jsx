const Navbar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <div className="bg-rose-200 selection:text-rose-600 selection:bg-rose-100 flex justify-center list-none text-xl fixed top-0 right-0 min-w-screen rounded-2xl p-1 font-bold">
      {navItems.map((item, index) => {
        return (
          <li key={index} className="p-[10px]">
            <a href={item.link} className="text-rose-800 hover:text-rose-500">
              {item.name}
            </a>
          </li>
        );
      })}
    </div>
  );
};

export default Navbar;
