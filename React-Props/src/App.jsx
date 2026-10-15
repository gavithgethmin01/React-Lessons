import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-purple-900 flex flex-col items-center">
      <Navbar></Navbar>
      <div className="flex justify-center p-[10px] align-item-center">
        <span className="text-pink-600 text-3xl font-mono font-extrabold">
          Hello, World!
        </span>
      </div>
      <p className="font-mono text-green-100 font-bold">
        Sed pellentesque faucibus eros elementum gravida dolor vivamus, lacus,
        posuere dapibus dolor. Platea, justo, lectus purus ac lectus faucibus
        lacus morbi pellentesque a donec. Morbi facilisis non cursus sed,
        pretium. Lorem, condimentum pharetra sed tempor, imperdiet tempus quis
        {/* dui aliquam dolor tempor. Hac platea consectetur, metus morbi posuere */}
        {/* sem ullamcorper, enim ac vivamus nisl. Nullam, nisl, nullam dapibus */}
        {/* nulla mus nullam vel efficitur ante praesent nunc. Nibh consectetur */}
        {/* pulvinar metus, faucibus nibh, quisque nulla consectetur ex vestibulum */}
        {/* tristique. Elementum est praesent, varius suspendisse lacus ante, */}
        {/* porttitor velit dui phasellus pellentesque. Tellus efficitur, rutrum */}
        {/* nulla in donec convallis dolor amet, tempor velit sed. Lacus nunc in sed */}
        {/* velit aliquet aenean pulvinar ut, porttitor, tempor nullam. Vivamus in, */}
        {/* justo praesent congue justo. */}
      </p>
    </div>
  );
};

export default App;
