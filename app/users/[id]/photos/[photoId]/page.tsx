import React from 'react'

interface Props {
    params: {id: number, photoId: number}
}

const PhotoId = ({params: {id, photoId}}: Props) => {
  return (
    <div>Wow: {id}, {photoId}</div>
  )
}

export default PhotoId