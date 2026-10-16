import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function noWhiteSpacesValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const whitespaceExists = (control.value || '').trim().length === 0;
    return whitespaceExists ? { whitespaceExists: true } : null;
  };
}
