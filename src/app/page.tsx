import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <h1 className='text-3xl text-yellow-400 font-bold font-sans md:font-serif'>
        Voidal Studios
      </h1>
      <br></br>
      <button className='rounded-md bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>
        Save changes
      </button>

      <br></br>
      <Link href='/about'>Test Route</Link>
    </div>
  )
}
