import Header from '@/src/components/layout/header/Header';
import Logout from '@/src/components/profile/logout/LogOut';
import {BadgeDollarSign, ListOrdered, UserRoundPen, MapPinHouse} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function ProfileLayout({children}) {
  return (
    <>
      <Header />
      <div className='flex'>
        {/* Sidebar */}
        <div className='fixed h-full'>
          <ul className='menu m-2 h-full w-16 rounded-box bg-black sm:w-56'>
            <li>
              <Link href='/profile' className='flex items-center'>
                <UserRoundPen />
                <span className='ml-2 hidden sm:inline'>Profile</span>
              </Link>
            </li>
            <li>
              <Link href='/profile/addresses' className='flex items-center'>
                <MapPinHouse />

                <span className='ml-2 hidden sm:inline'> Addresses</span>
              </Link>
            </li>
            <li>
              <Link href='/profile/orders' className='flex items-center'>
                <ListOrdered />
                <span className='ml-2 hidden sm:inline'> Orders</span>
              </Link>
            </li>
            <li>
              <Link href='/profile/transactions' className='flex items-center'>
                <BadgeDollarSign />
                <span className='ml-2 hidden sm:inline'> Transactions</span>
              </Link>
            </li>
            <li>
              <Logout />
            </li>
          </ul>
        </div>
        {/* Main content */}
        <div className='ml-16 flex-1 sm:ml-56'>
          <div className='container mx-auto px-4 py-8'>
            <div className='rounded-lg bg-base-100 p-6 shadow-md'>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
