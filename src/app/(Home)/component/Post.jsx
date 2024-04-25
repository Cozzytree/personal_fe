import Time from "@/components/time";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { CgOptions } from "react-icons/cg";

const Post = ({ post }) => {
  return (
    <>
      {post?.map((_, i) => (
        <div
          key={i}
          className="w-full md:container mx-auto flex justify-center min-h-[250px]"
        >
          <Card className="w-full md:w-1/2">
            <CardHeader>
              <div className="grid grid-cols-[auto_1fr_auto] justify-start items-start gap-3">
                <Avatar>
                  <AvatarImage src={"/ms.jpg"} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="">
                  <h3 className="text-[18px]">Username</h3>
                  <Time time={Date.now()} />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <CgOptions cursor="pointer" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Share</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <Image
                src={"/ms.jpg"}
                width={100}
                height={100}
                alt="post"
                className="w-full rounded-sm"
              />
              <p className="text-[13px] md:text-[16px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                dolorum beatae sed.
              </p>
            </CardContent>
          </Card>
        </div>
      ))}
    </>
  );
};

export default Post;
