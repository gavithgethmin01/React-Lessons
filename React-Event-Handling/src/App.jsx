const App = () => {
  const increase = () => {
    alert("Increase button clicked!");
  };
  const decrease = () => {
    alert("Decrease button clicked!");
  };
  return (
    <div className="text-8xl text-orange-600 text-shadow-zinc-600 text-shadow-2xs flex justify-center w-screen bg-pink-200 min-h-screen font-extrabold items-center font-poppins flex-col">
      <span> Hello, Friends!</span>
      <div>
        <button
          onClick={increase}
          className="bg-orange-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full m-[20px]"
        >
          +
        </button>
        <button
          onClick={decrease}
          className="bg-orange-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full m-[20px]"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default App;
