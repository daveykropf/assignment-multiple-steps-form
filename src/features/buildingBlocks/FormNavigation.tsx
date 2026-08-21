import styles from './FormNavigation.module.css'

type FormNavigationProps = {
  onPrevious?: () => void
  onNext?: () => void
  onSubmit?: () => void
}

export function FormNavigation({ onPrevious, onNext, onSubmit }: FormNavigationProps) {
  return (
    <div className={styles.navigation}>
      {onPrevious && <Button label="Vorige" onClick={onPrevious} />}
      {onNext && <Button label="Volgende" onClick={onNext} variant="primary" />}
      {onSubmit && <Button label="Verzenden" type="submit" onClick={onSubmit} variant="primary" />}
    </div>
  )
}

type ButtonProps = {
  label: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'default' | 'primary'
  onClick?: () => void
}

function Button({ label, type = "button", variant = "default", onClick = undefined }: ButtonProps) {
  return (
    <button
      className={variant === 'primary' ? styles.buttonPrimary : styles.button}
      {...{ type, onClick }}
    >
      {label}
    </button>
  )
}
