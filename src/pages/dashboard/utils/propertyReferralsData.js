import ProgressBar from "../../../component/progressBar/progressBar";
const Referrals = [
  {
    id: 1,
    referral: "Social Media",
    referralResult: "64%",
    progressBar: <ProgressBar bgcolor="#6c5dd3"
    progress="64"/>,
  },
  {
    id: 2,
    referral: "Marketpaces",
    referralResult: "40%",
    progressBar: <ProgressBar bgcolor="#7fba7a"
    progress="40"/>,
  },
  {
    id: 3,
    referral: "Websites",
    referralResult: "50%",
    progressBar: <ProgressBar bgcolor="#ffce73"
    progress="50"/>,
  },
  {
    id: 4,
    referral: "Digital Ads",
    referralResult: "80%",
    progressBar: <ProgressBar bgcolor="#ffa2c0"
    progress="80"/>,
  },
  {
    id: 5,
    referral: "Others",
    referralResult: "15%",
    progressBar: <ProgressBar bgcolor="#f45252"
    progress="15"/>,
  },
];
export default Referrals;
