// "use client";

// import { useEffect, useState } from "react";

// export default function APITestPage() {
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRecommendations = async () => {
//       try {
//         const res = await fetch("http://127.0.0.1:8000/api/v1/recommend", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             topic_tags: ["SQL untuk Data Analyst"],
//             learning_path: ["Data Analyst"],
//             proficiency_level: "Level: Menengah",
//           }),
//         });

//         if (!res.ok) {
//           throw new Error("Failed to fetch");
//         }

//         const data = await res.json();
//         setResult(data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchRecommendations();
//   }, []);

//   return (
//     <div className="p-10">
//       <h1 className="text-2xl font-bold">Test API Result</h1>
//       {error && <p className="text-red-500">Error: {error}</p>}
//       {result ? (
//         <pre className="mt-4 p-4 bg-gray-100 text-sm overflow-x-auto">
//           {JSON.stringify(result, null, 2)}
//         </pre>
//       ) : (
//         <p className="mt-4 text-gray-600">Loading...</p>
//       )}
//     </div>
//   );
// }
