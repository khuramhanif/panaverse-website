import Image from "next/image";
import Link from "next/link";
import panaverse from "public/panaverse.png";
import Wrapper from "@/componants/shared/Wrapper";



function Header() {
  return (
    <Wrapper>
    <header className="sticky top-0 ">
      
        <div className="flex  justify-between  bg-cyan-100  shadow-sm items-center py-4 px-8">
          <div >
            <Image src={panaverse} alt={"panaverse logo"} width={120} height={80} />
          </div>
          
          <div >
          <ul className="flex items-center  gap-x-24 font-medium text-lg" >
            <li>
              <Link href={"/"}>Home</Link>
            </li>

            <li>
              <Link href={"/Profile"}>Profile</Link>
            </li>
            <li>
              <Link href={"/courses"} >Coursess</Link>

              

            </li>
          </ul>

          </div>
        </div>
     
    </header>
    </Wrapper>
  );





}

export default Header;
