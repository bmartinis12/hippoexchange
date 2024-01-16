import Link from 'next/link'
import { Icons } from '../components/Icons';

export default function NotFound() {
    return (
        <div className='py-20 flex flex-col items-center justify-center'>
            <h2 className='text-4xl sm:text-6xl font-medium font-gray-900'>Sorry</h2>
            <div className='pb-8 pt-8'>
                <div className='flex justify-center'>
                    <Icons.logo className='h-12 w-auto' />
                </div>
            </div>
            <p className='mt-2 text-muted-foreground sm:text-xl'>We could not find this page.</p>
            <Link className='mt-4 sm:text-xl text-blue-600 hover:text-blue-500' href="/">Return Home &rarr;</Link>
        </div>
    )
}