import { Suspense } from "react";
import News from "./components/News";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <div>
      <h1>Top News</h1>
      <Suspense
        fallback={<ReloadIcon className="w-10 h-10 animate-spin" />}
      ></Suspense>
      <News />
    </div>
  );
}
