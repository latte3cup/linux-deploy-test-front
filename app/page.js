"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [lang, setLang] = useState("en");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/greeting?lang=${lang}`
        );
        const text = await res.text();
        setGreeting(text);
      } catch (err) {
        setGreeting("요청 실패");
      }
    };

    fetchGreeting();
  }, [lang]);

  return (
    <main style={{ padding: 20 }}>
      <h1>다국어 인삿말</h1>
      <select value={lang} onChange={(e) => setLang(e.target.value)}>
        <option value="en">영어</option>
        <option value="ko">한국어</option>
        <option value="ja">일본어</option>
      </select>
      <p>{greeting}</p>
    </main>
  );
}
