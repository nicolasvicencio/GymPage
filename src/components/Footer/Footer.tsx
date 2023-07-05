import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className='w-full bg-neutral-950 flex justify-evenly text-gray-500 p-10 py-20'>
      <section className='flex flex-col gap-4 '>
        <h3 className='text-lg text-neutral-400  font-semibold'>Contact</h3>
        <div>
          <p>Address</p>
          <p>Phone</p>
          <p>Email</p>
        </div>
      </section>
      <section className='flex flex-col gap-4 '>
        <h3 className='text-lg ttext-neutral-400 font-semibold'>Services</h3>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur !</p>
          <p>Lorem, ipsum dolor sit amet consectetur </p>
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </div>
      </section>
      <section className='flex flex-col gap-4'>
        <h3 className='text-lg text-neutral-400  font-semibold'>Company</h3>
        <div>
          <p>Lorem ipsum dolor sit </p>
          <p>Lorem, ipsum dolor sit </p>
          <p>Lorem ipsum dolor sit </p>
        </div>
      </section>
    </footer>
  )
}
