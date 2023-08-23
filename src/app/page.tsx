'use client'
import {signIn,  signOut, useSession} from 'next-auth/react'
import TripSearch from './components/tripSearch'
import QuickSearch from './components/quickSearch'
import RecommendedTrips from './components/recommendedTrips'

export default function Home() {

  const {data} = useSession()

  return (
    <div>
      <TripSearch/>
      <QuickSearch/>
      <RecommendedTrips/>
    </div>
  )
}
