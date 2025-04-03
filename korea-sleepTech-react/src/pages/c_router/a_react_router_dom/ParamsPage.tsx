import React from 'react'
import { useParams } from 'react-router-dom'

function ParamsPage() {

  const{id} = useParams();

  return (
    <div><h3>ParamsPage</h3>
    <p>Url에서 받은 파라미터 <strong>{id}</strong></p>
    </div>
  )
}

export default ParamsPage