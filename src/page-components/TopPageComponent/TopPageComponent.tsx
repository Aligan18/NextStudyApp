import React from 'react'
import { ITopPageComponentProps } from './TopPageComponent.props'

export const TopPageComponent = ({firstCategory,page,product}:ITopPageComponentProps ) => {
  return (
    <div>{product&& product.length}</div>
  )
}
