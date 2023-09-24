import React from "react";
import Leaderboard from "@/assets/svg/siderbar/Leaderboard";
import Table from "@/components/@core/Table";

const data = [
  {
    games: "Slots of Fortune",
    user: "John",
    time: "8:45 AM",
    bet_amount: "0.01234567",
    multiplier: "1.2x",
    payout: "0.01481481",
  },
  {
    games: "Blackjack Pro",
    user: "Alice",
    time: "3:22 PM",
    bet_amount: "0.03451234",
    multiplier: "3.5x",
    payout: "0.12098765",
  },
  {
    games: "Roulette Deluxe",
    user: "Bob",
    time: "10:15 AM",
    bet_amount: "0.04567890",
    multiplier: "4.5x",
    payout: "0.20555555",
  },
  {
    games: "Poker Showdown",
    user: "Eve",
    time: "1:47 PM",
    bet_amount: "0.08765432",
    multiplier: "7.0x",
    payout: "0.61357924",
  },
  {
    games: "Mega Jackpot",
    user: "Charlie",
    time: "7:59 AM",
    bet_amount: "0.02412000",
    multiplier: "0.0x",
    payout: "-0.02412000",
  },
  {
    games: "Lucky Spin",
    user: "Grace",
    time: "2:14 PM",
    bet_amount: "0.06789012",
    multiplier: "6.7x",
    payout: "0.45561211",
  },
  {
    games: "Baccarat Royale",
    user: "Oliver",
    time: "6:10 AM",
    bet_amount: "0.03215432",
    multiplier: "3.2x",
    payout: "0.10301738",
  },
  {
    games: "Texas Hold'em",
    user: "Sophia",
    time: "9:30 PM",
    bet_amount: "0.05678901",
    multiplier: "5.7x",
    payout: "0.32445503",
  },
  {
    games: "Craps Mania",
    user: "Emma",
    time: "11:58 AM",
    bet_amount: "0.07432098",
    multiplier: "7.4x",
    payout: "0.54982657",
  },
  {
    games: "Bingo Blast",
    user: "Liam",
    time: "4:33 PM",
    bet_amount: "0.04321098",
    multiplier: "4.3x",
    payout: "0.18594867",
  },
  {
    games: "Video Poker",
    user: "Ava",
    time: "2:45 AM",
    bet_amount: "0.02197843",
    multiplier: "2.2x",
    payout: "0.04835154",
  },
  {
    games: "Wheel of Fortune",
    user: "Mia",
    time: "5:28 PM",
    bet_amount: "0.09876543",
    multiplier: "9.8x",
    payout: "0.96888945",
  },
  {
    games: "Keno Classic",
    user: "Noah",
    time: "12:50 PM",
    bet_amount: "0.01928374",
    multiplier: "1.9x",
    payout: "0.03663907",
  },
  {
    games: "Caribbean Poker",
    user: "Charlotte",
    time: "8:05 AM",
    bet_amount: "0.06234567",
    multiplier: "6.2x",
    payout: "0.38627197",
  },
  {
    games: "Slot Frenzy",
    user: "James",
    time: "7:14 PM",
    bet_amount: "0.08765432",
    multiplier: "8.7x",
    payout: "0.76212724",
  },
  {
    games: "Three Card Poker",
    user: "Lily",
    time: "3:55 AM",
    bet_amount: "0.02345678",
    multiplier: "2.3x",
    payout: "0.05382609",
  },
  {
    games: "Red Dog",
    user: "Lucas",
    time: "10:37 AM",
    bet_amount: "0.07893456",
    multiplier: "7.9x",
    payout: "0.62315374",
  },
  {
    games: "Casino War",
    user: "Aiden",
    time: "1:30 PM",
    bet_amount: "0.07654321",
    multiplier: "7.7x",
    payout: "0.59032669",
  },
  {
    games: "Pai Gow Poker",
    user: "Ella",
    time: "6:49 PM",
    bet_amount: "0.06543210",
    multiplier: "6.5x",
    payout: "0.42590815",
  },
];

export default function LeadeBorad() {
  return (
    <div className="mt-4">
      <div className="ms-5">
        <div className="text-light flex items-center gap-2 text-white">
          <Leaderboard />
          <div className="text-2xl bold">Leaderboard</div>
        </div>
        <div className="flex flex-row mt-4 gap-1">
          {["All Time", "Big Win", "Casino Games", "My Win"].map(
            (item, idx) => (
              <div
                className=" text-white w-fit rounded-t-2xl px-8 py-2 justify-center items-center"
                style={{
                  background:
                    idx === 0
                      ? "linear-gradient(180deg, #313745 0%, #2C3240 100%)"
                      : "#212530",
                }}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
      <Table />
    </div>
  );
}
