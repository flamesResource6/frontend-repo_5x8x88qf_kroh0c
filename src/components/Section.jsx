import React from 'react'

const Section = React.forwardRef(function Section({ id, className = '', children }, ref) {
  return (
    <section id={id} ref={ref} className={`relative py-24 sm:py-28 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {children}
      </div>
    </section>
  )
})

export default Section
