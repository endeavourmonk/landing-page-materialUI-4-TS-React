import monitoring from "../assets/svg/monitoring.svg";
import search from "../assets/svg/search.svg";
import shield from "../assets/svg/shield.svg";
import notification from "../assets/img/notification.png";

export const featuresItem = [
  {
    id: 1,
    title: "Domain Expiry Monitoring",
    description:
      "Stay in control of your online presence. Get notified well in advance when your domain is about to expire.",
    imgUrl: monitoring, // Replace with the actual path to your image
    link: "#domain-expiry", // Replace with the appropriate link to the relevant section on your website
  },
  {
    id: 2,
    title: "Effortless WHOIS Lookup",
    description:
      "No more searching across multiple websites! Find all the essential details about your domain's registrar conveniently within our platform.",
    imgUrl: search,
    link: "#whois-lookup",
  },
  {
    id: 3,
    title: "Automated SSL Certificate Expiry Alerts",
    description:
      "Website security and user trust are paramount. We'll proactively notify you before your SSL certificate expires.",
    imgUrl: shield,
    link: "#ssl-expiry",
  },
  {
    id: 4,
    title: "Customizable Notification Preferences",
    description:
      "Tailor your notification experience to your needs. Choose the channels (email, SMS, etc.)",
    imgUrl: notification,
    link: "#notifications",
  },
  // Add more features as needed
];

export const proFeatures = [
  {
    id: 1,
    title: "Custom HTTP statuses",
    description:
      "If you need to set custom HTTP status codes for website down detection, we've got this!",
  },
  {
    id: 2,
    title: "SMS alerts",
    description:
      "Get notified through SMS on upcoming expiring domains and SSLs directly to your phone.",
  },
  {
    id: 3,
    title: "DNS monitoring",
    description:
      "Automate the checking of your DNS and nameserver records and get notified of DNS changes.",
  },
  {
    id: 4,
    title: "5x monitor checks",
    description:
      "Need faster website down detection? Get 5x faster down detection with our monitors, on our Pro plan.",
  },
  {
    id: 5,
    title: "Response times",
    description:
      "Website performance is important! Keep a check on your server's response time by HTTP or IP.",
  },
  {
    id: 6,
    title: "Cron monitoring",
    description:
      "Keep a check on your background tasks with our cron monitoring feature exclusively for Pro users.",
  },
  // Add more features as needed
];
