export class RedirectError extends Error {
  constructor(public readonly status: number, public readonly url: string) {
    super();
  }
}
