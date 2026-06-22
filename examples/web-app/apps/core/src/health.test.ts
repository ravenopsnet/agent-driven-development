import { describe, expect, it } from 'vitest'
import { getSystemHealth } from './health'

describe('getSystemHealth', () => {
  it('returns the core service health payload', async () => {
    await expect(getSystemHealth()).resolves.toEqual({
      ok: true,
      service: 'core',
      runtime: 'bun',
    })
  })
})
