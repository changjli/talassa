import { Link } from 'react-router-dom';

const Branch = () => {
    console.log('tes');
    return (
        <div className="branch grid grid-cols-3 h-screen">
            <Link to="/admin/login" className="flex bg-[url('/src/Asset/TalassaBg.jpeg')] bg-cover bg-center hover:opacity-75 group">
                <div className='w-1/2 m-auto group-hover:-translate-y-2'>
                    {/* <img src={require('../Asset/Talassa.png')} alt="" /> */}
                </div>
            </Link>
            <div className="flex bg-[url('/src/Asset/PennBg.png')] bg-cover bg-center hover:opacity-75 group">
                <div className='w-1/2 m-auto group-hover:-translate-y-2'>
                    {/* <img src={require('../Asset/Penn.png')} alt="" /> */}
                </div>
            </div>
            <div className="flex bg-[url('/src/Asset/GioiBg.jpeg')] bg-cover bg-center hover:opacity-75 group">
                <div className='w-1/2 m-auto group-hover:-translate-y-2'>
                    {/* <img src={require('../Asset/Gioi.png')} alt="" /> */}
                </div>
            </div>
        </div>
    );
}

export default Branch;