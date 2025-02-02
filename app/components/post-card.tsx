import Image from "next/image";
import Link from "next/link";
import DynamicBlurImage from "./blur-image";

type PostCardProps = {
  href: string;
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  latest: boolean;
};

const ArrowSVG = () => {
  return (
    <svg
      width="27"
      height="14"
      viewBox="0 0 27 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7.75292C3.42056 7.75292 6.72714 9.13901 9.49729 8.99623M9.49729 8.99623C10.8867 8.92462 12.1411 8.46841 13.0811 7.25981C14.4022 5.56135 14.6367 1.69463 11.6018 1.92809C9.76913 2.06906 9.37657 6.37985 9.49729 8.99623ZM9.49729 8.99623C9.53378 9.78707 9.61716 10.4231 9.72184 10.7424C10.4191 12.8691 13.9877 12.3369 15.5775 11.8827C18.4923 11.0499 21.2968 8.99325 23.7196 7.21649L23.7446 7.19818M20.2344 6.22514C21.5585 6.06625 22.7681 5.42703 24.1315 5.39337C24.5228 5.38371 25.3495 5.14206 25.3221 5.67626C25.2737 6.62117 25.1094 7.57918 24.9497 8.51085L24.9463 8.53046C24.8999 8.80144 24.7943 9.61605 24.7943 9.34112"
        stroke="#4F8F4A"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default function PostCard({
  href,
  id,
  title,
  description,
  thumbnailUrl,
  latest,
}: PostCardProps) {
  return (
    <Link href={href}>
      <div className="hover:bg-green-faded-xl group flex flex-col gap-3 rounded-md border-2 border-green-faded bg-off-white p-2 hover:border-green md:flex-row">
        <div className="relative h-[200px] w-full overflow-hidden rounded-md md:h-[160px] md:w-[240px]">
          <DynamicBlurImage
            src={thumbnailUrl}
            width={320}
            height={320}
            className="h-[200px] w-full transform rounded-md object-cover transition-transform duration-300 group-hover:scale-[1.04] md:h-[160px]"
            alt={`${title} thumbnail photo`}
          />
        </div>
        <div className="relative flex flex-1 flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="relative">
              <strong>{title} </strong>
              {latest && <span className="text-red text-[14px]">(NEW)</span>}
            </h3>
            <p className="text-gray">{description}</p>
          </div>
          <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100">
            <ArrowSVG />
          </div>
        </div>
      </div>
    </Link>
  );
}
