"use client";
import Image from "next/image";
import {motion} from 'framer-motion'
const clientImages = [
  { id: 1, logoName: "hitachi",  imageUrl: "/assets/clients/hitachi.png" },
  { id: 2, logoName: "kineco",  imageUrl: "/assets/clients/kineco.png" },
  { id: 3, logoName: "pci",  imageUrl: "/assets/clients/pci.png" },
  { id: 4, logoName: "philips",  imageUrl: "/assets/clients/philips.png" },
  { id: 5, logoName: "schindler",  imageUrl: "/assets/clients/schindler.png" },
  { id: 6, logoName: "trp",  imageUrl: "/assets/clients/trp.png" },
];

// Duplicate the images for seamless looping
const loopingClientImages = [...clientImages, ...clientImages];

export const ClientCarousel = ({customClass}) => {


  return (
    <section className={`  px-6 overflow-x-hidden ${customClass || ""}`}>
      <div className="container">
        <div className="flex justify-center items-center">
          <h2 className="text-primary mb-10 lg:max-w-[600px]">
            Choice of industry leaders and Fortune 500 companies
          </h2>
        </div>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div className="flex gap-20 flex-none" animate={{ 
            translateX:"-50%"
          }}
          transition={{
            duration:20,
            ease: "linear",
            repeat:Infinity,
            repeatType:"loop"
          }}
          >
          {loopingClientImages.map((client, index) => (
            <Image
              key={`${client.id}-${index}`}
              src={client.imageUrl}
              alt={client.logoName}
              className="logo-ticker-image" width={150} height={100}
            />
          ))}
           {loopingClientImages.map((client, index) => (
            <Image
              key={`${client.id}-${index}`}
              src={client.imageUrl}
              alt={client.logoName}
              className="logo-ticker-image"  width={150} height={100}
            />
          ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
