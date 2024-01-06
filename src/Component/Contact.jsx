import React from 'react'
import { Styles } from '../utils/Styles'

const Contact = () => {
  return (
    <div className='items-center pl-5 justify-center pt-3 flex-row' id='Contact'>
        <span className={Styles.sectionHeadText}>
          Contact
        </span>
        <hr className='w-[49%]'></hr>
        <div className="max-w-5xl mx-auto mt-10 p-6 bg-black rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-violet-600">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-violet-600">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-violet-600">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
        
    </div>
    
  )
}

export default Contact
