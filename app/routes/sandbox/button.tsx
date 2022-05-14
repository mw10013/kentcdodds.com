import React from 'react'
import {Button, ButtonLink, LinkButton} from '~/components/button'

export default function RouteComponent() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-4 border p-8">
      <div className="flex items-center justify-between">
        <Button size="small">My Button</Button>
        <Button size="medium">My Button</Button>
        <Button size="large">My Button</Button>
      </div>
      <div className="flex items-center justify-between">
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
      <div className="flex items-center justify-between">
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
      <div>
        <div className="flex items-center justify-start gap-4">
          <LinkButton>Reset</LinkButton>
          <LinkButton underlined>Reset</LinkButton>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Link Button seems to be used only login and recorder. underlined
          refers to classes in App.css.
        </p>
      </div>
      <div>
        <div className="flex items-center justify-start gap-4">
          <ButtonLink variant="primary" to="http://tailwindcss.com">
            Button Link
          </ButtonLink>
          <ButtonLink variant="secondary">Button Link</ButtonLink>
          <ButtonLink variant="danger">Button Link</ButtonLink>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Size seems to be ignored. Uses AnchorOrLink in misc.tsx
        </p>
      </div>
    </div>
  )
}
