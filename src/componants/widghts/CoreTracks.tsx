import Button from "@/componants/shared/Button";
import Wrapper from "@/componants/shared/Wrapper";
import QuarterBox from "@/componants/shared/QuarterBox";

const CoreTracks = () => {
  const header = "Core Courses \n (Common in All Specializations):";
  const Quarter = [
    {
      header: "Quarter I",
      discription: "CS-101: Object-Oriented Programming using TypeScript",
      number: 1,
    },
    {
      header: "Quarter II",
      discription:
        "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
      number: 2,
    },
    {
      header: "Quarter III",
      discription:
        "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
      number: 3,
    },
  ]
  return (
    <Wrapper>
    <section>
      <div className="">
        <h4 className="text-teal-700 text-sm py-2 font-semibold">Program of Studies</h4>
        <h2 className="text-black text-4xl font-bold whitespace-pre-line">{header}</h2>
        <p className="text-gray-900 mt-4">
          Every participant of the program will start by completing the
          following three core courses:
        </p>
        <Button text={"Learn More"} />
      </div>
      
      <div className="my-20 max-w-screen-2xl flex flex-1 gap-x-8 gap-6 mx-auto flex-col md:flex-row py-6 px-4 ">
        {
          Quarter.map((items)=>{
            return(
             <QuarterBox 
             key={items.number}
             header= {items.header}
             discription={items.discription}
             number={items.number}
             border={true}
             />
            )
          })
        }
      </div>
      
      
      
    </section>
    </Wrapper>
  );
};

export default CoreTracks;
