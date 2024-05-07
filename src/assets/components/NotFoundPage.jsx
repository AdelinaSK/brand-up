import React from 'react'

export default function NotFoundPage () {
  return (
    <main>
        <div className="error">
            <p>404</p>
            <p>Страница не найдена :(</p>
            Перейти на <Navlink to={'/'}>главную</Navlink>
        </div>
    </main>
    
  )
}


