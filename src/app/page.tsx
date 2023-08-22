'use client'
import {signIn,  signOut, useSession} from 'next-auth/react'

export default function Home() {

  const {data} = useSession()

  return (
    <div className='flex flex-col'>
      teste
    </div>
  )
}
