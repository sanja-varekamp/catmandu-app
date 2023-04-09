import React from 'react'
import catLogo from './catLogo.png';

export default function Logo() {
  return (
    <div className="flex justify-center bg-transparent">
            <img src={catLogo} height="50px" width="60px" alt="Cat logo" />
        </div>
  )
}
