// Stub for resend's optional @react-email/render peer dependency.
// The cloudflare preset bundles all imports, and this app only sends
// plain HTML emails, so the real package is never needed at runtime.
export const render = () => {
  throw new Error('@react-email/render is not installed')
}
export const renderAsync = render
