import Qr from '../assets/general/qr.png'
import Hand from '../assets/general/hand.svg'

const QrCode = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <p className='text-3xl pb-3'>Escanear Aqui</p>
      <img className='w-[50%] border border-spacing-6' src={Qr} alt="" />
      <img className='w-[30%]' src={Hand} alt="" />
    </div>
  )
}

export default QrCode
