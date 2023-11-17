// QuotePage.js
import React, { useState, useEffect } from "react";

const QuotePage = () => {
  const [quotesData, setQuotesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/quote.json");
        const data = await response.json();
        setQuotesData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-20">
      <div className="max-w-screen-8xl">
        {quotesData.map((quote, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-md shadow-md mb-4 max-w-5xl mx-auto flex flex-col items-center"
          >
            <h1 className="font-bold mb-4 text-2xl">{quote.quote}</h1>
            <p className="text-gray-600 font-semibold">{quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuotePage;
