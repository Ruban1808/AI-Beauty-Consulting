import React, { useState } from "react";
import "./BeautyConsult.css"; // Import CSS for styling

const BeautyConsult = () => {
    const [input, setInput] = useState("");
    const [recommendation, setRecommendation] = useState("");
    const [loading, setLoading] = useState(false);

    const handleConsult = async () => {
        if (!input.trim()) return; // Prevent empty queries

        setLoading(true);
        setRecommendation(""); // Clear old recommendation

        try {
            const response = await fetch("http://127.0.0.1:5000/api/beauty-consult", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query: input }),
            });

            const data = await response.json();
            if (data.recommendation) {
                setRecommendation(data.recommendation);
            } else {
                setRecommendation("No recommendation available.");
            }
        } catch (error) {
            console.error("Error:", error);
            setRecommendation("Error fetching recommendation.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="beauty-consult-container">
            <h2>AI Beauty Consultation</h2>
            <input
                type="text"
                className="beauty-input"
                placeholder="Enter your beauty concern..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="consult-button" onClick={handleConsult} disabled={loading}>
                {loading ? "Fetching..." : "Get Advice"}
            </button>

            {recommendation && (
                <div className="recommendation-card">
                    <h3>Recommendation:</h3>
                    <p>{recommendation}</p>
                </div>
            )}
        </div>
    );
};

export default BeautyConsult;
