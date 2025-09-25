// // function Navbar() {
// //   return (
// //     <div className="w-full h-13">
// //       <div className="bg-[#000814] h-full w-full flex items-center">
// //         <h1 className="text-white underline decoration-[#FFD60A] md:text-3xl text-2xl ml-8 font-bold ">
// //           Portfolio
// //         </h1>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Navbar;
// import React, { useEffect, useState } from "react";

// function App() {
//   const [repos, setRepos] = useState([]);

//   // Fetch GitHub repos
//   useEffect(() => {
//     fetch("https://api.github.com/users/MOHITGODARA1/repos?sort=updated")
//       .then((res) => res.json())
//       .then((data) => setRepos(data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="bg-gray-900 text-white min-h-screen font-sans">
//       {/* Hero Section */}
//       <section className="w-full h-screen flex flex-col justify-center items-center text-center px-6">
//         <h1 className="text-5xl font-extrabold mb-4">
//           Hi, I'm <span className="text-blue-400">Mohit Godara</span>
//         </h1>
//         <p className="text-gray-300 text-lg max-w-xl mb-6">
//           A passionate <span className="text-green-400">Full Stack Developer</span> who loves building modern,
//           scalable, and user-friendly web applications.
//         </p>
//         <a
//           href="#projects"
//           className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl shadow-lg"
//         >
//           View My Work
//         </a>
//       </section>

//       {/* Latest Project (manual highlight) */}
//       <section className="px-6 py-20 bg-gray-800">
//         <h2 className="text-4xl font-bold text-center mb-10">Latest Project 🚀</h2>
//         <div className="max-w-3xl mx-auto bg-gray-700 p-6 rounded-2xl shadow-lg text-center">
//           <h3 className="text-2xl font-semibold mb-2">Student Connection Platform</h3>
//           <p className="text-gray-300 mb-4">
//             A full-stack platform built with React, Tailwind, Node.js, Express, and MongoDB to
//             connect students and share resources.
//           </p>
//           <a
//             href="https://github.com/MOHITGODARA1"
//             target="_blank"
//             rel="noreferrer"
//             className="text-blue-400 hover:underline"
//           >
//             View on GitHub →
//           </a>
//         </div>
//       </section>

//       {/* All GitHub Projects */}
//       <section className="px-6 py-20" id="projects">
//         <h2 className="text-4xl font-bold text-center mb-10">All GitHub Projects</h2>
//         {repos.length === 0 ? (
//           <p className="text-center text-gray-400">Loading projects...</p>
//         ) : (
//           <div className="grid md:grid-cols-3 gap-6">
//             {repos.map((repo) => (
//               <div
//                 key={repo.id}
//                 className="bg-gray-800 rounded-2xl p-6 hover:scale-105 transition"
//               >
//                 <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
//                 <p className="text-gray-400 text-sm mb-4">
//                   {repo.description ? repo.description : "No description provided."}
//                 </p>
//                 <a
//                   href={repo.html_url}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-blue-400 hover:underline"
//                 >
//                   View Repo →
//                 </a>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       {/* Footer */}
//       <footer className="w-full bg-gray-800 py-6 text-center text-gray-400">
//         <p>© {new Date().getFullYear()} Mohit Godara. All Rights Reserved.</p>
//         <div className="flex justify-center gap-6 mt-3">
//           <a
//             href="https://github.com/MOHITGODARA1"
//             target="_blank"
//             rel="noreferrer"
//             className="hover:text-white"
//           >
//             GitHub
//           </a>
//           <a
//             href="https://linkedin.com"
//             target="_blank"
//             rel="noreferrer"
//             className="hover:text-white"
//           >
//             LinkedIn
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;
