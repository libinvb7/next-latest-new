import Image from 'next/image'
import { FaLongArrowAltRight } from "react-icons/fa";


const data = [
    {
        title: 'ERPNext',
        image: '/assets/images/integrations/erp.png',
        alt: 'erp logo'
    },
    {
        title: 'Excel',
        image: '/assets/images/integrations/excel.png',
        alt: 'Excel'
    },
    {
        title: 'Google Sheet',
        image: '/assets/images/integrations/google-sheet.png',
        alt: 'erp logo'
    },
    {
        title: 'SAP',
        image: '/assets/images/integrations/sap.png',
        alt: 'sap logo'
    },
    {
        title: 'OpCenter',
        image: '/assets/images/integrations/op-center.png',
        alt: 'OpCenter logo'
    },
   
]
const IntegrateApp = () => {
  return (
    <div className=' max-w-screen-xl px-4 py-5 mx-auto'>
        <h2 className="text-primary text-center px-3 text-base uppercase">Integrate Your Apps</h2>
        <div className="flex px-4 items-center justify-center">
            {
                data.map((item, index) => (
                    <div key={index} className="w-1/5 ">
                        <div className="glass-bg  flex  items-center w-fit p-2 px-5 rounded-2xl gap-2 ">
                            <Image src={item.image} alt={item.alt} width={60} height={60} />
                            <h3 className='text-black font-bold'>{item.title}</h3>
                        </div>
                    </div>
                ))
            }
      <div  className="w-1/5">
                        <div className="glass-bg    items-center w-fit p-2 px-5 rounded-2xl">
                            <h3 className='text-black font-bold'>See More</h3>
                            <FaLongArrowAltRight className='text-2xl block'/>
                        </div>
                    </div>
        </div>
        

    </div>
  )
}

export default IntegrateApp