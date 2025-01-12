import React from 'react'
import {Link} from 'react-router-dom'

function start() {
  return (
    <div >
      <div className=' bg-cover bg-centre h-screen pt-8 flex justify-between flex-col w-full bg-[url(https://elements-resized.envatousercontent.com/envato-shoebox/e1db/4020-79e7-49fa-9707-d8409663fa0b/C3XCnU6kZugue2SBzf3XAsCuxkH1Hi3L1BSoSVE5.jpg?w=800&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=26d76627c0e46fb98241dbe7daa23b3bd9e78e48d0eb35f0ce118e5b8d8e7d54)]'>
        <img className='w-16 ml-8' src="https://th.bing.com/th/id/R.ee430489d1505483166c19ab9ed00d4e?rik=TR8JYzS1MJsqxg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fUber-Logo-PNG-Free-Image.png&ehk=RkArudRupF3ki6m0KJJ67MImDo65xcs3upha4JAEOME%3d&risl=&pid=ImgRaw&r=0">
        </img >
        <div className='bg-white pb-8 py-4 px-4'>
          <h2 className='text-[30px] font-semibold'>Get Started with Uber</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'  > continue</Link>
        </div>
      </div>

    </div>
  )
}

export default start