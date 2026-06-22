import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

function ExampleHeading() {
  return <h1>Agent Driven Development Web App</h1>
}

describe('web reference app', () => {
  it('renders the reference heading', () => {
    render(<ExampleHeading />)
    expect(screen.getByRole('heading', { name: /Agent Driven Development Web App/i })).toBeInTheDocument()
  })
})
