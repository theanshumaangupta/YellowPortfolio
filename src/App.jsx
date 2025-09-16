import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const navRef = useRef([])
  const [NavCursor, setNavCursor] = useState(0)
  const [CursorStyle, setCursorStyle] = useState({ left: '15px', width: '0px' })
  const navItems = ['Home', 'About', 'Portfolio', 'Contact', 'Blog']

  function focusNav(index) {
    setNavCursor(index)

  }
  useEffect(() => {
    const currentLi = navRef.current[NavCursor]
    const { offsetLeft, offsetWidth } = currentLi
    setCursorStyle({ left: `${offsetLeft}px`, width: `${offsetWidth}px` })
  }, [NavCursor])

  return (

    <div className='h-screen flex flex-col font-livic bg-black'>
      <nav className=' font-semibold   w-full p-5 flex justify-between items-center' >
        {/* Nav Cursor */}
        <div className={`h-3 w-15 nav-cursor bg-yellow  absolute top-0 duration-500 ease-in-out`}
          style={{ left: `${CursorStyle.left}`, width: `${CursorStyle.width}` }}
        ></div>
        <ul className='flex text-xl  gap-10'>
          {
            navItems.map((heading, index) => {
              return (
                <li
                  ref={el => (navRef.current[index] = el)} key={index} className={`duration-200 cursor-pointer ${index == NavCursor ? 'text-yellow' : ''}`} onClick={() => focusNav(index)} >{heading}</li>
              )
            })
          }
        </ul>
        <h2>
          Email: <span className='text-yellow'>theanshumangupta@gmail.com</span>
        </h2>
      </nav>

      {/* horizontals */}
      <div className='flex-1 flex overflow-x-scroll snap-x snap-mandatory'>
        {/* div1 */}
        <div className='flex-shrink-0 flex relative justify-center h-full w-screen items-center'>
          <h1 className='font-bold livic text-9xl [text-shadow:0px_0px_#FFA,12px_14px_#222] tracking-[1rem] text-[150px] leading-[160px]'>
            Hello<span className='text-yellow'>.</span>
            <br />
            <span>
              I  am
            </span>
            <br />
            Steven
          </h1>
          <div className='rounded-[50%] absolute right-[5rem] h-15 w-15 bg-yellow flex justify-center items-center '>
            <img src="images/right.svg" className='w-10' alt="" />
          </div>

        </div>

        {/* div2 */}
        <div className='flex-shrink-0 flex gap-20 justify-center h-full w-screen items-center'>
          <img src="images/men.jpg" className='' alt="" />
          <div >
            <h1 className='text-7xl font-bold'>Stevan <br /> <span className='text-yellow'>Walker</span></h1>
            <div className='flex ml-14 mt-15 text-xl font-semibold gap-10'>
              <ul className='flex flex-col gap-4 list-disc text-yellow'>
                <li>
                  <span className='text-[#888888]'>Age:  <span className='text-white'> 27 years</span></span>

                </li>
                <li>
                  <span className='text-[#888888]'>Nationality:  <span className='text-white'> Indian</span></span>

                </li>
                <li>
                  <span className='text-[#888888]'>Freelance:  <span className='text-white'> Yes</span></span>

                </li>
                <li>
                  <span className='text-[#888888]'>Languages:  <span className='text-white'> Hindi</span></span>

                </li>
              </ul>
              <ul className='flex flex-col gap-4 list-disc text-yellow'>
                <li>
                  <span className='text-[#888888]'>Address:  <span className='text-white'> Kanpur</span></span>

                </li>
                <li>
                  <span className='text-[#888888]'>Phone:  <span className='text-white'> 885 8684 812</span></span>

                </li>
                <li>
                  <span className='text-[#888888]'>Email:  <span className='text-white'> find.anshumaan</span></span>

                </li>
                <li>
                  <span className='text-[#888888]'>Skype:  <span className='text-white'> find.anshumaan</span></span>

                </li>
              </ul>
            </div>
          </div>
          <h1 className='text-6xl font-bold -rotate-90'>
            My Skills
          </h1>
        </div>
      </div>

    </div>
  )
}

export default App
