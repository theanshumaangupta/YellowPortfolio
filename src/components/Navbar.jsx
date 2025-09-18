import { useEffect, useRef, useState } from "react"

export default function Navbar() {
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
        <nav className=' font-semibold bg-primary  w-full p-5 flex justify-between items-center' >
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
    )
}