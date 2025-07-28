"use client";
import { useEffect, useState } from "react";

export default function APITestPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/v1/recommend", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            topic_tags: ["Cloud Computing", "Data", "Front End"],
            learning_path: ["Front-End Web", "Back-End"],
            proficiency_level: "Mahir",
          }),
        });

        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Failed to fetch:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Error fetching data</p>;

  return (
    <div className="text-black">
      <h1>Rekomendasi:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
