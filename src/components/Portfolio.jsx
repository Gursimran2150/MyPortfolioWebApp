import ecommerceImage from '../assets/ecommerceapp.png'
import cryptoImage from '../assets/cryptoapp.png'
import calculator from '../assets/caculatorapp.png'
import clock from '../assets/analongclock.png'


const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src:cryptoImage,
            demoLink:'https://xcrypto-eight-tau.vercel.app/',
            codeLink:'https://github.com/Gursimran2150/CryptoTracker'
        },
        {
            id:2,
            src:ecommerceImage,
            demoLink:'https://sparkling-chimera-6977cf.netlify.app/',
            codeLink:'https://github.com/Gursimran2150/FullStackEcommerce'
        },
        {
            id:3,
            src:calculator,
            demoLink:'https://java-script-calculator-seven.vercel.app',
            codeLink:'https://github.com/Gursimran2150/CalculatorJS'
        },
        {
            id:4,
            src:clock,
            demoLink:'https://analog-clock-one-teal.vercel.app/',
            codeLink:'https://github.com/Gursimran2150/AnalongClockUsingJS'
        }

    ]



  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            
            
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
                portfolios.map(({id,src,demoLink,codeLink})=>(

                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a target='_blank' href={demoLink} rel="noreferrer">Demo</a></button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a target='_blank' rel='noreferrer' href={codeLink}>Code</a></button>
                    </div>
                </div>

                ))
            }
                

            </div>

        </div>
    </div>
  )
}

export default Portfolio



//https://analog-clock-one-teal.vercel.app/
//  https://java-script-calculator-seven.vercel.app