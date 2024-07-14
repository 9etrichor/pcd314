import { Link, Button, Divider, Progress } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import {Image} from "@nextui-org/image";
import { Carousel } from "react-responsive-carousel";
import background from "../../assets/images/background.jpg"
import image1 from "../../assets/images/image1.png"
import image2 from "../../assets/images/image2.png"
import founderInfo1 from "../../assets/images/founderInfo1.png"
import founderInfo2 from "../../assets/images/founderInfo2.png"
import PCD from "../../assets/images/pcd314nft.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import bgAnime from "../../assets/anime/bgAnime2.lottie"

      //className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('assets/images/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')]">

      //style={{ backgroundImage: `url(${background})` }}
function Home() {
  const images = [
    image1,
    image2
];
  const { t } = useTranslation()

  return (
    <div
      className="relative"
    >
      <div className="w-full h-screen  mx-auto left-0 right-0  absolute">
        <DotLottieReact
          src={bgAnime} 
          loop
          autoplay
          className="w-full h-full absolute"
        />
      </div>
      <div className={"relative  z-10  max-w-[100vw] mx-auto px-4  sm:px-6 lg:px-8 pt-12 pb-10 "} >  
        
        <div className="flex justify-center gap-16">
          <div className="">
            <p className="flex justify-center font-bold text-xl">20,837,108</p>
            <p className="flex justify-center text-[#c9d1db]">{t("totalSwapRewards")}</p>
          </div>

          <div className="">
            <p className="flex justify-center font-bold text-xl">20,837,108</p>
            <p className="flex justify-center text-[#c9d1db]">{t("totalBurnedAmount")}</p>
          </div>

          <div className="">
            <p className="flex justify-center font-bold text-xl">20,837,108</p>
            <p className="flex justify-center text-[#c9d1db]">{t("marketValue")}</p>
          </div>

          <div className="">
            <p className="flex justify-center font-bold text-xl">20,837,108</p>
            <p className="flex justify-center text-[#c9d1db]">{t("24HAmount")}</p>
          </div>
        </div>

        <div className="flex justify-center pt-4">
        <Carousel useKeyboardArrows={true} className="w-4/5 px-20 rounded-sm">
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} className=""/>
            <p>{t(`news${index + 1}`)}</p>
          </div>
        ))}
        </Carousel>
        </div>
      </div>
      
      <div className="relative max-w-[100vw] mx-auto h-[100vh] sm:px-6 lg:px-[7.5%] pt-24 pb-10  bg-[#595954]">
        <div className="flex items-center gap-8 w-full">
          <Image
            width={1800}
            alt=""
            src={PCD}
          />

          <div>
            <h2 className="font-bold text-2xl">Founder's Seat Identity (NFT)</h2>
            <p className="">{t("founder")}</p>
            <p className="mt-8">
              <span>current price</span>
              <span className="font-extrabold text-4xl ml-2 mr-8">3.693BNB</span>
              <span className="">Floor price</span>
              <span className="font-extrabold text-4xl ml-2">3.140BNB</span>
            </p>

            <div className="flex justify-between mb-4 mt-4">
              <Progress 
                label={`Seats Remaining : ${220}`}
                size="lg"
                value={220}
                maxValue={1000}
                formatOptions={{style: "percent"}}
                showValueLabel={true}
                className="max-w-full"/>
            </div>

            <div className="flex gap-2">
              <Button
                href="#"
                as={Link}
                variant="bordered"
                showAnchorIcon
                radius="none"
                className="text-[#d6d6d6] border-4 w-[50%]"
                size="lg">
                  <span className="text-lg">{t("buyNow")}</span>
              </Button> 

              <Button
                href="#"
                as={Link}
                variant="bordered"
                showAnchorIcon
                radius="none"
                className="text-[#d6d6d6] border-4 w-[50%]"
                size="lg">
                  <span className="text-lg">{t("viewQuotes")}</span>
              </Button> 
        </div>
          </div>
        </div>



      </div>
      
      <div className=" relative max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 bg-[#26261F]">
        <div className="flex justify-center">
          <span className="text-3xl font-bold">-{t('founderInfo')}-</span>
        </div>
        <div className="flex justify-evenly items-center mb-16">
          <Image width={500} alt="" src={founderInfo1} />
          <div className="w-96">
            <p>{t("requirement")}</p>
            <ol className="list-decimal list-outside">
              <li><span>{t("requirement1")}</span></li>
              <li><span>{t("requirement2")}</span></li>
              <li>
                <span>{t("requirement3")}</span>
                <ul className="list-disc list-inside">
                  <li>{t("instruction1")}</li>
                  <li>{t("instruction2")}</li>
                  <li>{t("instruction3")}</li>
                  <li>{t("instruction4")}</li>
                </ul>   
              </li>
            </ol>
            <p>{t("airdrop")}</p>
          </div>
        </div>

        <Divider className="mb-16 bg-[#e0e0c8]"/>
        <div className="flex justify-evenly items-center">
          <div className="w-96">
            <p>{t("founderBenefit")}</p>
            <ol className="list-decimal list-outside">
              <li><span>{t("benefit1")}</span></li>
              <li><span>{t("benefit2")}</span></li>
              <li><span>{t("benefit3")}</span></li>
              <li><span>{t("benefit4")}</span></li>
              <li><span>{t("benefit5")}</span></li>
              <li><span>{t("benefit6")}</span></li>
              <li><span>{t("benefit7")}</span></li>
            </ol>
          </div>
          
          <Image width={500} alt="" src={founderInfo2}/>
        </div>
      </div>
      
    </div>
  )
}

export default Home