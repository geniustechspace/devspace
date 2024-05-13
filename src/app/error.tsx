'use client' 
 
import { internalUrls } from '@/config/site'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { useEffect } from 'react'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (     
    <main className="h-[80vh] flex flex-col align-middle justify-center gap-3 p-3">
      <h2 className='font-mono font-semibold text-warning-foreground'>Something went wrong!</h2>
      <div className='text-center'>
        <Button href={internalUrls.home} as={Link} color="primary" variant="shadow">
          Refresh the page
        </Button>
      </div>
    </main>
  )
}