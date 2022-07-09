import React from 'react'
import { useRouter } from 'next/router'





const BookingRoute = () => {
  const router = useRouter()
  const { user } = router.query
  console.log("BookingDetailsSlug props -  " ,  user)
  return (
     <div> {user} </div>
  )

}


export const getServerSideProps = async ({ params }) => {
    console.log("static props  " , params)
    // const userData = await getUserDataById()
    return {
      props: {
        slug: params.slug,
      }
    }
  }

export default BookingRoute