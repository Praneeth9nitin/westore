import Nav from '@/components/Nav';
import SideMenu from '@/components/SideMenu';

function layout({children}: {children: React.ReactNode}) {
  return (
    <div className='p-6'>
      <Nav />
      <div className='flex'>
        <div className='w-1/4'>
          <SideMenu />
        </div>
        <div>
        {children}
        </div>
      </div>
    </div>
  )
}

export default layout
