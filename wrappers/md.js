import React from 'react'

export default function MD(props) {
  const Document = props.route.page.data.default
  return <Document />
}
