"use client";
const Time = ({ time }) => {
  const locale = navigator.language || "en-US";
  const date = Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(new Date(time));
  return <span className="text-[14px]">{date}</span>;
};

export default Time