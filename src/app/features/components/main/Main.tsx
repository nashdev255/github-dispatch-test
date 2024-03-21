'use client';

const Main = () => {
  const handleSubmit = () => {

  };

  return (
    <main className="flex h-screen justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 items-center"
      >
        <input
          type="text"
          name="str"
          placeholder="Type something"
          className="px-4 py-2 border-2 rounded-lg shadow-lg"
          required
        />
        <button className="bg-sky-500 h-16 w-48 rounded-full shadow-lg duration-75 hover:scale-95 hover:shadow-none hover:bg-sky-600">
          <p className="font-bold text-lg text-white">GitHub Dispatch</p>
        </button>
      </form>
    </main>
  );
};

export default Main;
