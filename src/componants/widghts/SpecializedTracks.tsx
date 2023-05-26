"use client"
import Wrapper from "@/componants/shared/Wrapper";
import QuarterBox from "@/componants/shared/QuarterBox";
import Image from "next/image";
import web3 from "@/Assets/web3.png"
import ai from "@/Assets/ai.png"
import { useState } from "react";

const programsData = [
  {
    slug:"wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    discription: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: web3,
    quarters: [
      {
        header: "Quarter IV",
        discription: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4
      },
      {
        header: "Quarter V",
        discription: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5
      }
    ]
  },
  {
    slug:"ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    discription: "Become a Machine Learning expert. Master the fundamentals of deep learning and break into AI. Recently updated with cutting-edge techniques! The Deep Learning Specialization is a foundational program that will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology.",
    image: ai,
    quarters: [
      {
        header: "Quarter IV",
        discription: "W2-201: This module is structured around a series of practical code examples, demonstrating on real world problems.",
        number: 4
      },
      {
        header: "Quarter V",
        discription: "W2-201: Students will learn Deep Learning for computer vision, text and sequences, finance, and advanced neural network design.",
        number: 5
      }
    ]
  },
  
]
const SpecializedTracks = () => {
  const [selectedItems,setSelectedItems] = useState("wmd")

  const selectedItemsData = programsData.find((item)=>item.slug===selectedItems)
  
 
  return (
    <section>
      <Wrapper>
        <div className="lg:mt-24 md:mt-16 max-w-screen-sm">
          <h2 className="text-4xl font-bold">Specialized Tracks:</h2>
          <p className="mt-6 text-lg text-slate-900  max-w-screen-sm font-sans flex-col">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:{" "}
          </p>
        </div>
        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8">
          <div className="  shadow-xl rounded-2xl flex-1 basis-8/12  border py-8 px-8 border-teal-300  ">
            <h4 className=" text-primary font-medium text-lg">Specialized Program</h4>
            <h3 className="text-2xl font-bold py-4">
              {selectedItemsData?.header}
            </h3>
            <p className=" text-slate-900">
              {selectedItemsData?.discription}
            </p>
            <button className="text-primary font-medium mt-4 text-xl flex gap-x-2 items-end underline border border-primary rounded-sm ">
              Learn More
              <svg
                className="mb-1"
                width="10"
                height="13"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div className="flex flex-col lg:flex-row gap-x-4 mt-8">
              {selectedItemsData?.quarters.map((item)=>(
                <QuarterBox
                key={item.number}
                header={item.header}
                discription={item.discription}
                number={item.number}
                border={false}
              />
              ))}
              
              
            </div>
          </div>

          <div className="py-6 px-4 bg-slate-100  space-y-4   flex-1 basis-4/12  ">
            {
              programsData.map((item) => (
                <div onClick={()=>setSelectedItems(item.slug)} key={item.slug} className="items-center flex  gap-x-4   cursor-pointer  ">
                  <div className="flex-shrink-0" >
                    
                    <Image src={item.image} alt={item.header} className="h-24  object-cover rounded-full hover:scale-105"/>
                  </div>
                  <div>
                    <h4 className="text-primary font-medium py-2">Specialized Program</h4>
                    <h3 className="text-xl font-semibold">{item.header}</h3>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
