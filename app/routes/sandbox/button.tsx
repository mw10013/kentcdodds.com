import React from 'react'
import {Button, LinkButton} from '~/components/button'

export default function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex items-center justify-start gap-4">
        <Button size="small">My Button</Button>
        <Button size="medium">My Button</Button>
        <Button size="large">My Button</Button>
      </div>
      <div className="flex items-center justify-start gap-4">
        <Button variant="secondary" size="small">
          My Button
        </Button>
        <Button variant="secondary" size="medium">
          My Button
        </Button>
        <Button variant="secondary" size="large">
          My Button
        </Button>
      </div>
      <div className="flex items-center justify-start gap-4">
        <Button variant="danger" size="small">
          My Button
        </Button>
        <Button variant="danger" size="medium">
          My Button
        </Button>
        <Button variant="danger" size="large">
          My Button
        </Button>
      </div>
      <div className="flex items-center justify-start gap-4">
        <LinkButton>Link Button</LinkButton>
      </div>
    </div>
  )
}