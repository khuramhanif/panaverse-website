import Button from "@/componants/shared/Button";
import Image from "next/image";
import HeroImage from "@/Assets/hhhh.png";
import Wrapper from "@/componants/shared/Wrapper";

const Hero = () => {
  return (
    <Wrapper>
      <section>
        <div className="flex flex-col md:flex-row mt-4 items-center">
          <div >
            <h4 className="text-teal-800 text-lg font-semibold py-1">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="text-black text-5xl py-2 font-bold max-w-screen-lg mb-2">
              Certified Web 3.0 and Metaverse Developer
            </h1>

            <div className="max-w-screen-lg text-slate-800 ">
              <p>
                A One and Quarter Years Panaverse DAO Earn as you Learn Program
                Getting Ready for the Next Generation of the Internet.Certified
                Web 3.0 and Metaverse Developer: A Nationwide Program in
                Karachi, Lahore, Islamabad, and Peshawar.
              </p>
              <p className="mt-3">
                Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
                Cloud, Edge, Ambient Computing/IoT, Network Automation, and
                Bioinformatics Technologies. 
                </p> 
                <p>
                Panaverse DAO mission statement
                is to train Web 3.0 and Metaverse Developers and to create
                products using these cutting-edge technologies
              </p>
            </div>
            <div className="mt-4">
              <Button text={"Learn More"} />
            </div>
          </div>
          <div>
            <Image
              src={HeroImage}
              alt={"hero poster"}
              width={800}
              height={800}
            />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Hero;
