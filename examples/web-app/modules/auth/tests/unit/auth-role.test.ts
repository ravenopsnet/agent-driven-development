import { describe, expect, it } from 'vitest'
import type { AuthRole } from '../../domain'

describe('AuthRole', () => {
  it('allows the reference roles', () => {
    const role: AuthRole = 'authenticated'
    expect(role).toBe('authenticated')
  })
})
