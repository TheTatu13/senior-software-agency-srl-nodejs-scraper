// Live API tests hit api.peviitor.ro (no credential needed) -- opt in explicitly.
export function itIfSolr(description, testFn, timeout) {
  if (!process.env.RUN_LIVE_API_TESTS) {
    return it.skip(description, testFn, timeout);
  }
  return it(description, testFn, timeout);
}
