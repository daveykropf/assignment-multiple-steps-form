type ErrorMessageProps = {
  message?: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return <p role="alert">{message || 'Er is iets misgegaan.'}</p>
}
