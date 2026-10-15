import NavigationItems from "./NavigationItems.jsx";

const Navbar = () => {
  return (
    <div className="w-screen min-w-screen flex justify-between">
      <div className="text-yellow-300 font-bold p-[10px]">
        <span>LOGO</span>
      </div>
      <ul className="flex text-pink-200 font-bold">
        <NavigationItems name="Home"></NavigationItems>
        <NavigationItems name="Contact"></NavigationItems>
        <NavigationItems name="Gallery"></NavigationItems>
      </ul>
      <div className="p-[10px]">
        <span className="text-orange-300 font-bold">Sing In</span>
      </div>
    </div>
  );
};

export default Navbar;
