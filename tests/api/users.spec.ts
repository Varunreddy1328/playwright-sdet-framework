import { test, expect } from '@playwright/test';
import { ApiClient } from '../../src/api/ApiClient';

test('GET user returns expected data', async ({ request }) => {
  const api = new ApiClient(request);
  const body = await api.getUser(2);
  expect(body.data).toMatchObject({ id: 2, email: expect.stringContaining('@') });
});
