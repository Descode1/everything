"use client";
import { useState } from 'react';
import { faqs } from '@/utils/mockData';

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return(
  <div className="min-h-screen  py-8 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white ">
        <h1 className="text-3xl font-bold mb-6 text-left">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left py-4 focus:outline-none flex justify-between items-center"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
