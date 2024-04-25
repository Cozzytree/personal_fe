import Time from "@/components/time";
import Image from "next/image";
import Link from "next/link";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Suspense } from "react";

const News = async () => {
  let data = null;
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEWS_API}`
    );
    data = await response.json();
  } catch (error) {}

  console.log(data);
  if (!data?.articles?.length) return "empty";
  return (
    <div className="w-full flex flex-col items-center gap-4">
      {data?.articles?.map((news, i) => (
        <Link
          key={i}
          href={news?.url}
          className="w-full md:w-[80%] lg:w-[60%] mx-auto flex flex-col items-center"
          target="_blank"
        >
          <div className="w-full">
            <div className="grid grid-cols-[1fr_auto] items-center gap-2">
              <div>
                <span className="text-[14px]">Source :</span>
                <h1>{news?.source ? news?.source?.name : ""}</h1>
              </div>
              <Time time={news?.publishedAt} />
            </div>

            {news?.urlToImage && (
              <Suspense fallback={<ReloadIcon className="animate-spin" />}>
                <Image
                  src={news?.urlToImage}
                  width={300}
                  height={300}
                  alt={`${news?.urlToImage?.slice(1, 30)}.....`}
                  className="w-full mx-auto rounded-md"
                />
              </Suspense>
            )}

            <p className="text-[15px]">{news?.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default News;
