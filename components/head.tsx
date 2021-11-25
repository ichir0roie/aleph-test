import React from 'react'

export default function Head({ size = 75 }: { size?: number }) {
  return (
    <head>
        <title>Hello World - Aleph.js</title>
        <link rel="stylesheet" href="../style/index.css" />
        <link rel="icon" href="logo.svg" type="image/icon type"></link>
    </head>
  )
}
