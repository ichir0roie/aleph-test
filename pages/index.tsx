import { useDeno } from 'aleph/react'
import React from 'react'
import Logo from '~/components/logo.tsx'
import Head from '~/components/head.tsx'
import useCounter from '~/lib/useCounter.ts'

export default function Home() {
  const [count, isSyncing, increase, decrease] = useCounter()
  const version = useDeno(() => Deno.version.deno)

  return (
    <div className="page">
      <Head/>
      </div>
  )
}
