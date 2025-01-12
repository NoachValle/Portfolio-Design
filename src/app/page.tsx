import Image from "next/image";
import Frontpage from "../../Components/frontpage";
export default function Home() {
  return (
    <div className="flex justify-evenly items-center bg-white ">
      <Frontpage/>
    </div>
  );
}
