import { TITLE,DESCRIPTION,IMAGE_PATH,BUTTON_NAME } from './config';
function App() {
  return (
      <>
        <div className='w-full p-10'>
          <h1 className='text-5xl text-center mb-10'>{TITLE}</h1>
          <p className='mb-10'>{DESCRIPTION}</p>
          <img src={require(`./img/${IMAGE_PATH}`)} width={200} height={200} className="ml-auto mr-auto mb-10"  />
          <div className='flex justify-center'>
              <div className='mr-20'><button className='p-2 bg-fuchsia-400 border rounded-xl text-white'>{BUTTON_NAME.BUTTON_1}</button></div>
              <div><button className='p-2 bg-fuchsia-400 border rounded-xl text-white'>{BUTTON_NAME.BUTTON_2}</button></div>
          </div>
        </div>
      </>
  );
}

export default App;
