import { describe, expect, it } from 'vitest'
import { getSystemHealth } from '../../core'

describe('getSystemHealth', () => {
  it('returns the health payload', async () => {
    await expect(getSystemHealth()).resolves.toEqual({
      ok: true,
      service: 'health',
      runtime: 'bun',
    })
  })
})
