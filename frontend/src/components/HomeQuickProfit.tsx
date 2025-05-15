import { useState } from "react";
import stat from '../assets/312.jpg';

const HomeQuickProfit = () => {
  const [plan, setPlan] = useState<"basic" | "standard" | "premium" | "pro">("basic");
  const [amount, setAmount] = useState("");
  const [profit, setProfit] = useState("");

  const calculateProfit = () => {
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum <= 0) {
      setProfit("Invalid amount");
      return;
    }

    const rates = {
      basic: 0.05,
      standard: 0.1,
      premium: 0.15,
      pro: 0.2,
    };

    const planRate = rates[plan];
    const totalRate = planRate + 0.5;
    const profitAmount = amountNum * totalRate;
    setProfit(profitAmount.toFixed(2));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 ">
      <div>
        <img src={stat} alt="Profit Illustration" className="rounded-lg " />
      </div>
      <div>
        <h1 className="uppercase text-sm font-semibold text-gray-400">
          Profit Calculator
        </h1>
        <h1 className="text-4xl font-bold mb-4">Quick Profit Calculate</h1>

        <div className="space-y-8 mt-10">
          <div className="flex flex-col relative">
            <label htmlFor="plan" className="mb-2 font-medium text-gray-500">
              Select Plan
            </label>
            <select
              id="plan"
              className="p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
              value={plan}
              onChange={(e) => setPlan(e.target.value as "basic" | "standard" | "premium" | "pro")}
            >
              <option value="basic">Basic Plan</option>
              <option value="standard">Standard Plan</option>
              <option value="premium">Premium Plan</option>
              <option value="pro">Pro Plan</option>
            </select>
          </div>

          <div className="flex flex-col relative">
            <label htmlFor="amountInput" className="mb-2 font-medium text-gray-500">
              Enter Amount
            </label>
            <input
              id="amountInput"
              type="number"
              placeholder="0.00"
              className="p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="flex flex-col relative">
            <label htmlFor="profit" className="mb-2 font-medium text-gray-500">
              Profit Amount
            </label>
            <input
              id="profit"
              type="text"
              placeholder="0.00"
              className="p-3 border border-gray-700 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
              value={profit}
              readOnly
            />
          </div>

          <button
            onClick={calculateProfit}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            Calculate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeQuickProfit;
