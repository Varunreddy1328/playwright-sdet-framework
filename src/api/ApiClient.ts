import { type APIRequestContext, expect } from '@playwright/test';

export class ApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async getUser(id: number) {
    const response = await this.request.get(`https://reqres.in/api/users/${id}`);
    expect(response.status()).toBe(200);
    return response.json();
  }
}
