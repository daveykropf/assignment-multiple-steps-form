type ButtonProps = {
  label: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export function Button({ label, type = 'button', onClick = undefined }: ButtonProps) {
  return <button {...{ type, onClick }}>{label}</button>
}
