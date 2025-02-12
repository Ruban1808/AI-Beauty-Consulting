export const getBeautyRecommendation = async (query) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/beauty-consult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch beauty recommendation");
      }
  
      const data = await response.json();
      return data.recommendation;
    } catch (error) {
      console.error("Error:", error);
      return "Error fetching recommendation.";
    }
  };
  