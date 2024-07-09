import { Link, Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import {Image} from "@nextui-org/image";
import { Carousel } from "react-responsive-carousel";
import background from "../../assets/images/background.jpg"
import image1 from "../../assets/images/image1.png"
import image2 from "../../assets/images/image2.png"
import PCD from "../../assets/images/pcd314nft.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";

      //className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('assets/images/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')]">
function Home() {
  const images = [
    image1,
    image2
];
  const { t } = useTranslation()

  return (
    <div
      className=""
    >
      <div className={"max-w-[100vw] mx-auto px-4  sm:px-6 lg:px-8 pt-24 pb-10"} style={{ backgroundImage: `url(${background})` }}>
        <div className="flex justify-center">
          <span className="text-3xl font-bold">-{t('latestNews')}-</span>
        </div>

        <div>
        <Carousel useKeyboardArrows={true} className="w-full px-20">
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
        </Carousel>
        </div>
      </div>
      
      <div className="max-w-[100vw] mx-auto px-4 h-[100vh] sm:px-6 lg:px-8 pt-24 pb-10 bg-[#595954]">
        <div className="flex justify-center items-center gap-8">
          <Image
            width={300}
            alt=""
            src={PCD}
          />

          <p className="w-72">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cupiditate accusantium illum ex eaque officiis, unde sint quae numquam, ea ducimus quis soluta. Quis facilis saepe nisi ipsam. Molestias, eum.
          </p>
        </div>

        <p>remain peopl progress bar???</p>

        <div className="flex justify-center gap-2">
          <Button
            href="#"
            as={Link}
            variant="bordered"
            showAnchorIcon
            radius="none"
            className="text-[#d6d6d6] border-4"
            size="lg">
            <span className="text-lg">{t("buyNow")}</span>
          </Button> 

          <Button
            href="#"
            as={Link}
            variant="bordered"
            showAnchorIcon
            radius="none"
            className="text-[#d6d6d6] border-4"
            size="lg">
            <span className="text-lg">{t("viewQuotes")}</span>
          </Button> 
        </div>
      </div>
      
      <div className="max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 bg-[#26261F] h-[100vh]">
        <div className="flex justify-center">
          <span className="text-3xl font-bold">-{t('founderInfo')}-</span>
        </div>
        <div className="flex justify-evenly">
          <Image width={300} alt="" src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg" />
          <p className="w-80">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo culpa quaerat blanditiis non facilis veniam aliquam atque odit fuga? Deleniti voluptatum soluta maxime libero modi praesentium natus obcaecati delectus dolorum!</p>
        </div>
      </div>
      
    </div>
  )
}

export default Home