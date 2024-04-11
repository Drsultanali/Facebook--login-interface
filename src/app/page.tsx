import Image from "next/image"
import Card from "./components/card/card"
export default function Home() {
  return (


    <div className="bg-[#F0F2F5] h-screen">

      <title>Facebook</title>

      <div className=" font-Helvatica">
        <div className="max-w-full h-screen flex flex-wrap lg:flex-row flex-col place-items-center lg:space-x-10 justify-center">
          <div className=" flex lg:mb-[7%] justify-center flex-col  items-center lg:items-start">
            <Image className="lg:ml-0" src="/facebookLogo.jpg" alt="logo" width={256} height={200} />
            <div className="text-center lg:text-start ">
              <h2 className=" text-black  lg:ml-0 xl:text-3xl text-[24px] w-[400px] xl:w-[550px]  ">Facebook helps you connect and share with people in your life.</h2>
            </div>
          </div>
          <div className="mt-5 w-[400px] :w-[400px] ">
            <Card />
          </div>
        </div>
      </div>
    </div>
  )

}
