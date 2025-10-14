import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center py-6 bg-[#9f2500] text-yellow-200">
      <p>© {new Date().getFullYear()} DivyaSeva | All Rights Reserved</p>
      {/* <p className="text-yellow-300 mt-2">Contact: support@divyaseva.in</p> */}
    </footer>
  )
}

export default Footer