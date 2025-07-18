"use client";

import { useState } from "react";
import Description from "./Description";
import Evaluation from "./Evaluations";
import ReturnCondition from "./ReturnCondition";



const tabs = [
  { id: "description", label: "Ürün Açıklaması", content: <Description/> },
  { id: "evaluation", label: "Değerlendirmeler", content: <Evaluation /> },
  { id: "return", label: "İptal ve İade Koşulları", content: <ReturnCondition /> },
];

export default function Tab() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className=" mx-35 mt-8 border border-gray-200 rounded-lg">
      <div className="flex border-b border-gray-200 justify-around my-6 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.id ? "text-black text-xs text-center  font-bold border-b-2 border-orange-600" : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-700">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
