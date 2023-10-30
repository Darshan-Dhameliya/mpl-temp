import React from "react";

const data = [
  {
    title: "CASINO.COM",
    desc: [
      'Casino.com is owned and operated by Medium Rare, N.V. (hereinafter "Stake", "We" or "Us"),a company with head office at Korporaalweg 10, Willemstad, Curaçao. Stake is licensed and regulated by the Government of Curaçao under the gaming license 8048/JAZ issued to Antillephone. Some credit card payment processing are handled by its wholly owned subsidiary, Medium Rare Limited.',
    ],
  },
  {
    title: "IMPORTANT NOTICE",
    desc: [
      "BY REGISTERING ON WWW.CASINO.COM (THE “WEBSITE”), YOU ENTER INTO A CONTRACT WITH MEDIUM RARE N.V., AND AGREE TO BE BOUND BY (I) THESE TERMS AND CONDITIONS; (II) OUR PRIVACY POLICY; (III) OUR COOKIES POLICY AND (IV) THE RULES APPLICABLE TO OUR BETTING OR GAMING PRODUCTS AS FURTHER REFERENCED IN THESE TERMS AND CONDITIONS (“TERMS AND CONDITIONS” OR “AGREEMENT”), AND THE BETTING AND/OR GAMING SPECIFIC RULES, AND ARE DEEMED TO HAVE ACCEPTED AND UNDERSTOOD ALL THE TERMS.",
      "PLEASE READ THIS AGREEMENT CAREFULLY TO MAKE SURE YOU FULLY UNDERSTAND ITS CONTENT. IF YOU HAVE ANY DOUBTS AS TO YOUR RIGHTS AND OBLIGATIONS RESULTING FROM THE ACCEPTANCE OF THIS AGREEMENT, PLEASE CONSULT A LEGAL ADVISOR.",
    ],
  },
];

export default function TermsAndCondition() {
  return (
    <>
      <div className="text-white text-2xl font-bold mb-2">
        Terms and Condition
      </div>
      <div className="flex flex-col gap-4 mt-5 h-96 overflow-y-auto pe-6">
        {data.map((item, idx) => (
          <div key={idx}>
            <div className="text-white text-2xl bold">
              {`${idx + 1}. ${item.title}`}
            </div>
            <div className="flex flex-col gap-5">
              {item.desc.map((item, subIdx) => (
                <div key={subIdx}>{`${idx + 1}.${++subIdx}. ${item}`}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
