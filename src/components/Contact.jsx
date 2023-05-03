

const Contact = () => {
  return (
    <div name="contact" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 '>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center' >
          <form action="https://getform.io/f/e4962ba4-72a0-4361-a365-084494c6d2b9" className='flex flex-col w-full md:1/2' method='POST'>
            <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' required/>
            <input type="email" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' required/>
            <textarea name="message"  rows="10" placeholder='Enter your message here' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>{"Let's talk"}</button>
          </form>
        </div>
        


    </div>

  

</div>
  )
}

export default Contact