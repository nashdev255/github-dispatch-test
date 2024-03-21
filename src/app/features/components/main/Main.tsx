'use client';

const Main = () => {
  const handleSubmit = async () => {
    const formElement = document.querySelector('form');
    const formData = new FormData(formElement!);

    const message = formData.get('message')?.toString();

    try {
      await fetch(
        'https://api.github.com/repos/nashdev255/github-dispatch-test/actions/workflows/echo.yml/dispatches',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_DISPATCH_TOKEN}`,
          },
          body: `{"ref":"master","inputs":{"message": "${message}"}}`
        }
      );
    } catch ( error ) {
      alert('Faild to post data: ' + error);
    } finally {

    }
  };

  return (
    <main className="flex h-screen justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 items-center"
      >
        <input
          type="text"
          name="message"
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
