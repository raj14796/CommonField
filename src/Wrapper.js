import React from 'react'

const Wrapper = ({ children }) => {
    return (
        <div className='flex flex-col field-width m20 gap5'>
            {children}
        </div>
    )
}

export default Wrapper