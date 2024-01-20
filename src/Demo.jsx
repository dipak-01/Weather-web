import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Demo() {
  return (
    <><div className='flex flex-row min-h-screen justify-center items-center'>
      <div className=' antialiased w-1/2 rounded-md    align-between border-4 border-black font-sans text-center   '>
        <div className='bg-sky-400 text-2xl font-bold h-1/3 '>
          <h2 className=' p-6 text-white'>News you can Trust.</h2>
        </div>
        <div className='p-4 space-y-2'>
          <h2 className='text-xl font-semibold'>Stay up to date with the Latest!</h2>
          <h3 className=''>Subscribe to our newslater for the latest news straight into your inbox</h3>
          <input className='text-center bg-gray-200 w-1/3 p-2' type="email" placeholder='you@email.com' />
          <br />
          <button className='bg-blue-500 px-4 w-1/3 p-2 rounded-xl'>Subscribe Now</button>
          <p>We value your privacy</p>
        </div>
      </div>

    </div>
    </>
  );
}