import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <Image width={150} height={150} alt="is loading" src={"/load.svg"} />
    </div>
  );
};

export default Loading;
