import type { NextPage } from 'next'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import toast from 'react-hot-toast'
import { Main } from '../components/Main'

const Index: NextPage = () => {
  // const [rpc, setRpc] = useState<string | null>(null)
  // const { connection } = useConnection()
  // const wallet = useWallet()
  // useEffect(() => {
  //   const toastConnected = async () => {
  //     if (wallet.connected) {
  //       const cluster = await connection.getClusterNodes()
  //       if (rpc !== cluster[0].rpc) {
  //         toast(`Connected to ${cluster[0].rpc}`)
  //         setRpc(cluster[0].rpc)
  //       }
  //     }
  //   }
  //   toastConnected()
  // }, [wallet, connection, rpc])

  // const formatRpc = rpc !== null ? `Network: ${rpc}` : ''
  // console.log('hasodihfa', formatRpc)
  return (
    <Layout formatRpc={'formatRpc'}>
      <div className='container mx-auto justify-center'>
        <Main />
      </div>
    </Layout>
    // <div>aosiejfoaewjf</div>
  )
}

export default Index
