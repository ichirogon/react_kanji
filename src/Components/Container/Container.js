import React from 'react'
import Menu from '../Menu/Menu';

// destructuring
function Container({children}) {
    return (
        <div className='container'>´
        <Menu />
        <main className='main'>
        {children}
        </main>
        </div>
    )
}

export default Container
