'use client'
import {signIn,  signOut, useSession} from 'next-auth/react'
import TripSearch from './components/tripSearch'

export default function Home() {

  const {data} = useSession()

  return (
    <div>
      <TripSearch/>
    </div>
  )
}
