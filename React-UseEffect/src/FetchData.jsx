import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function FetchData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isCancelled = false;
    const controller = new AbortController();

    const loadUsers = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (!isCancelled) {
          setUsers(data);
        }
      } catch (err) {
        if (err?.name !== "AbortError" && !isCancelled) {
          console.error("Error fetching data:", err);
          setError("Unable to load members right now. Please try again.");
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    loadUsers();

    return () => {
      isCancelled = true;
      controller.abort();
    };
  }, []);

  if (loading) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#312e81_0%,_#0f172a_35%,_#020617_100%)] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px]" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
          <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(76,29,149,0.45)] backdrop-blur-xl">
            <div className="mb-8 flex items-center justify-center">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-indigo-300/50 bg-gradient-to-br from-indigo-400 to-violet-600 shadow-[0_0_30px_rgba(129,140,248,0.8)]">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/30 border-t-white" />
              </div>
            </div>

            <div className="space-y-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-indigo-200/80">
                Loading directory
              </p>
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Crafting your people list
              </h1>
              <p className="text-base text-slate-300">
                Fetching the latest profiles and details from the network.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/5 bg-slate-900/40 p-3 shadow-inner shadow-slate-950/30"
                >
                  <div className="h-12 w-12 animate-pulse rounded-full bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-2/5 animate-pulse rounded-full bg-slate-600" />
                    <div className="h-3 w-3/5 animate-pulse rounded-full bg-slate-700" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
        <div className="w-full max-w-md rounded-3xl border border-red-500/30 bg-red-500/5 p-8 text-center shadow-[0_20px_60px_rgba(127,29,29,0.2)] backdrop-blur">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-2xl">
            ⚠️
          </div>
          <h2 className="text-2xl font-bold text-white">Something went wrong</h2>
          <p className="mt-3 text-sm text-slate-300">{error}</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform duration-200 hover:-translate-y-0.5"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-5rem] top-[-5rem] h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-3rem] h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.8)] backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-300">
                Team directory
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                User Directory
              </h1>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-slate-200">
              <div className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2">
                <span className="font-semibold text-indigo-200">{users.length}</span> members
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2">
                <span className="font-semibold text-emerald-200">Live</span> network sync
              </div>
            </div>
          </div>
        </header>

        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {users.map((user) => (
            <li
              key={user.id}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.35)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/10 hover:shadow-[0_25px_70px_rgba(99,102,241,0.18)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-400 via-violet-500 to-pink-400" />

              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-lg font-bold text-white shadow-lg shadow-indigo-500/30">
                    {user.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-white">{user.name}</h2>
                    <p className="text-sm text-indigo-200/80">@{user.username}</p>
                  </div>
                </div>

                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                  online
                </span>
              </div>

              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-slate-900/30 px-3 py-2">
                  <svg className="h-4 w-4 text-indigo-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="truncate">{user.email}</span>
                </div>

                {user.phone && (
                  <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-slate-900/30 px-3 py-2">
                    <svg className="h-4 w-4 text-indigo-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a2 2 0 011.9 1.39l1.37 4.34a2 2 0 01-1.08 2.4L7.7 12.7a14.4 14.4 0 006.6 6.6l1.67-2.4a2 2 0 012.4-1.08l4.34 1.37A2 2 0 0121 18.72V22a2 2 0 01-2 2h-1A17 17 0 013 8V7a2 2 0 012-2z" />
                    </svg>
                    <span>{user.phone}</span>
                  </div>
                )}

                {user.website && (
                  <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-slate-900/30 px-3 py-2">
                    <svg className="h-4 w-4 text-indigo-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c2.5 2.7 4 6 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6-4-10s1.5-7.3 4-10zm-8 8h16M4 14h16" />
                    </svg>
                    <span className="truncate">{user.website}</span>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

                    