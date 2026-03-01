
import './App.css'

function App() {


  return (
    <>
    <header className='w-full h-16 bg-black flex justify-center fixed'>
      <div className='w-[70%] h-16 flex justify-between'>
        <img src='/public/images/imangi-logo@2x (1).png'alt='logo'className='h-15 '></img>
        <ul className='flex list-none gap-8 font-semibold text-[15px] items-center cursor-pointer  text-amber-50 ml-10' >
        <li>CARRERS</li>
        <li>LICENSING</li>
        <li>PRESS</li>
        <li>FAQ</li>
        <li>FUN</li>
        <li>CONTACT</li>
        </ul>
      </div>
    </header>
   <div className="w-full h-158 bg-[url('public/images/hero_1920x700.jpg')] bg-cover flex flex-col justify-center items-center">
    <h1 className='flex justify-center items-center text-5xl  font-bold'>Imangi STUDIOS</h1>
    <p className='flex justify-center items-center text-lg '>Creators of Temple Run</p>
   </div>
   <div className='w-full h-45 flex justify-center items-center pt-9'>
    <h1 className='font-bold text-5xl'>Our Games</h1>
   </div>
   <div className='max-w-5xl h-200 grid  grid-cols-2 grid-rows-2 gap-23 justify-items-center mx-auto '>
    <div className='flex  flex-col items-center'>
    <img src='/public/images/Games_tr1.png' alt='logo' className=' rounded-2xl  '></img>
    <p className='mt-4 text-gray-600 text-2xl '>Temple Run</p>
    </div>
    <div className='flex items-center flex-col'>
    <img src='/public/images/Games_tr2_b.png' alt='logo' className=' rounded-2xl '></img>
    <p className='mt-4 text-gray-600 text-2xl'>Temple Run 2</p>
    </div>
    <div className='flex items-center flex-col'>
    <img src='/public/images/Games_trpa.jpeg'alt='logo' className='rounded-2xl '></img>
    <p className='mt-4 text-gray-600 text-2xl'>Temple Run: Puzzle Adventure</p>
    </div>
    <div className='flex flex-col items-center'>
    <img src='/public/images/leyends-1.jpg' alt='logo' className='rounded-2xl'></img>
    <p className='mt-4 text-gray-600 text-2xl'>Temple Run: Legends</p>
</div>
   </div>
   <div className='w-full h-200 flex pt-28'>
    <div className='w-[70%]   flex flex-col pl-57 '>
    <h1 className='font-black text-5xl'>We are <br />
     Imangi Studios</h1>
     <p className='pt-7'><strong>IN THE BEGINNING…</strong> Imangi Studios was founded by husband and <br /> wife team Keith Shepherd and Natalia Luckyanova in 2008 with the <br /> goal of creating fun family-friendly games for everyone to enjoy! In <br /> 2011 the studio developed the mega-hit Temple Run and in 2013 <br /> developed another mega-hit Temple Run 2. Combined, these two <br /> games have been downloaded over 2.5 billion times. Imangi Studios <br /> has also developed Temple Run: Brave (with Pixar), Temple Run: Oz <br /> (with Disney), Max Adventure and Harbor Master.</p>
     <p className='pt-4'><strong>TODAY</strong>: Imangi has grown out of its startup phase and entered into its <br /> next phase, one of growth. Imangi is now led by a team of industry <br /> veterans and focused on publishing successful games, developing <br /> new Temple Run games, and forming partnerships with other <br /> companies</p>
    <p className='pt-4'>This focus on growth has seen Imangi expand in terms of its team <br /> size, but also its strategy and scope. Imangi is focused on growing and <br /> developing the Temple Run brand through a variety of opportunities <br /> including new mobile games (both runner and non-runner) and beyond. <br /> Imangi is developing a team and culture that reflects the Temple Run <br /> mantra of Fun, Wonder, Danger, and Adventure!</p>    
    </div>
    <div className='flex items-center pr-55 w-[60%]'>
      <img src='/public/images/golden-idol.png' alt='logo'className='h-130' ></img>
    </div>
   </div>
   <div className='h-165 bg-black flex '>
    <div className='flex justify-center w-[60%] '>
      <img src='/public/images/demonmonkey-home.png' alt='logo' className='h-140 -mt-23 '></img>
    </div>
    <div className='w-[70%]  flex flex-col '>
     <h1 className='text-amber-50 text-5xl mt-28'><strong>Careers</strong></h1>
     <p className='text-amber-50 mt-4'>Come join the most exciting team in the industry!</p>
     <button className='bg-amber-50 w-30  rounded  h-7 text-black hover:bg-black hover:text-amber-50 border-1 cursor-pointer mt-4 '>See Careers</button>

    </div>
    
    
    
    </div>      




   
      


  
    </>
  )
}

export default App
