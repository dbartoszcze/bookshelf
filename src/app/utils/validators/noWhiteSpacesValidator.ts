import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function noWhiteSpacesValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isWhitespaces = (control.value || '').trim().length === 0;
    const isValid = !!isWhitespaces;
    return isValid ? { whitespaceExists: true } : null;
  };
}
