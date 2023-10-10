import Affiliate from "@/assets/svg/siderbar/Affiliate";
import VIPClub from "@/assets/svg/siderbar/VIPClub";
import Blog from "@/assets/svg/siderbar/Blog";
import Transaction from "@/assets/svg/siderbar/Transaction";
import Leaderboard from "@/assets/svg/siderbar/Leaderboard";
import Deposit from "@/assets/svg/siderbar/Deposit";
import Withdraw from "@/assets/svg/siderbar/Withdraw";
import Livechat from "@/assets/svg/siderbar/LiveChat";
import Settings from "@/assets/svg/siderbar/Setting";
import AddCash from "@/assets/svg/siderbar/AddCash";
import Promocode from "@/assets/svg/siderbar/Promocode";
import ManageBenificiary from "@/assets/svg/siderbar/ManageBenificiary";
import AddBenificiary from "@/assets/svg/siderbar/AddBenificiary";
import Profile from "@/assets/svg/siderbar/Profile";

export default [
  {
    title: "Profile",
    icon: (props) => <Profile {...props} />,
    children: [
      {
        title: "Wallet",
        href: "",
        icon: (props) => <Deposit {...props} />,
      },
      {
        title: "Add Cash",
        href: "",
        icon: (props) => <AddCash {...props} />,
      },
      {
        title: "Apply promocode",
        href: "",
        icon: (props) => <Promocode {...props} />,
      },
      {
        title: "Manage Beneficiary",
        href: "",
        icon: (props) => <ManageBenificiary {...props} />,
      },
      {
        title: "Add Beneficiary",
        href: "",
        icon: (props) => <AddBenificiary {...props} />,
      },
    ],
  },
  {
    title: "Affiliate",
    href: "/affiliate",
    icon: (props) => <Affiliate {...props} />,
  },
  {
    title: "VIP Club",
    href: "/vipclub",
    icon: (props) => <VIPClub {...props} />,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: (props) => <Blog {...props} />,
  },
  {
    title: "Transaction",
    href: "/transaction",
    icon: (props) => <Transaction {...props} />,
    children: [
      { id: 1, title: "All Transaction" },
      { id: 2, title: "Add Money" },
      { id: 3, title: "Withdraw" },
      { id: 4, title: "Join" },
      { id: 5, title: "Win" },
      { id: 6, title: "Refund" },
      { id: 7, title: "Success" },
      { id: 8, title: "Failed" },
      { id: 9, title: "Pending" },
    ],
  },
  {
    title: "Leaderboard",
    href: "/leaderboard",
    icon: (props) => <Leaderboard {...props} />,
  },
  {
    title: "Deposit",
    modal: "SHOWDEPOSIT",
    icon: (props) => <Deposit {...props} />,
  },
  {
    title: "Withdraw",
    modal: "SHOWWITHDRAW",
    icon: (props) => <Withdraw {...props} />,
  },
  {
    title: "Live Chat",
    modal: "SHOWLIVECHAT",
    icon: (props) => <Livechat {...props} />,
  },
  {
    title: "Setting",
    href: "/settings",
    icon: (props) => <Settings {...props} />,
    children: [
      { id: 1, title: "General" },
      { id: 2, title: "Security" },
      { id: 3, title: "Api" },
      { id: 4, title: "Session History" },
      { id: 5, title: "Terms and Conditions" },
      { id: 6, title: "Privacy Policy" },
    ],
  },
];
