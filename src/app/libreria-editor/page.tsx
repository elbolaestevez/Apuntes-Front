import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex w-[99%] bg-greenphotobg mt-2 m-auto h-[400px]">
        {" "}
        <Image
          src="/svg/vender-apuntes.png"
          alt="photo"
          width={2000}
          height={200}
          className="h-10/12 w-8/12 m-auto "
        ></Image>
      </div>
    </div>
  );
};

export default page;
