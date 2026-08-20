import { Button } from './Button'

type FormNavigationProps = {
  onPrevious?: () => void
  onNext?: () => void
  onSubmit?: () => void
}

export function FormNavigation({ onPrevious, onNext, onSubmit }: FormNavigationProps) {
  return (
    <div>
      {onPrevious && <Button label="Vorige" onClick={onPrevious} />}
      {onNext && <Button label="Volgende" onClick={onNext} />}
      {onSubmit && <Button label="Verzenden" type="submit" onClick={onSubmit} />}
    </div>
  )
}
