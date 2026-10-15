import { Component, inject, input, output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { noWhiteSpacesValidator } from '../../utils/validators/noWhiteSpacesValidator';

interface BookFormModel {
  title: FormControl<string>;
  description: FormControl<string>;
  author: FormControl<string>;
}

@Component({
  selector: 'app-book-form',
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss',
})
export class BookFormComponent {
  private readonly fb: FormBuilder = inject(FormBuilder);

  readonly isOpen = input<boolean>(false);
  readonly closeModal = output<void>();
  readonly saveBook = output<ReturnType<typeof this.bookForm.getRawValue>>();

  readonly bookForm: FormGroup<BookFormModel> = this.buildForm();

  protected close(): void {
    this.closeModal.emit();
  }

  protected save(): void {
    if (this.bookForm.valid) {
      this.saveBook.emit(this.bookForm.getRawValue());
      this.bookForm.reset();
    } else {
      this.bookForm.markAllAsTouched();
    }
  }

  private buildForm(): FormGroup<BookFormModel> {
    return this.fb.group<BookFormModel>({
      author: this.fb.nonNullable.control('', {
        validators: [Validators.required, noWhiteSpacesValidator()],
      }),
      title: this.fb.nonNullable.control('', {
        validators: [Validators.required, noWhiteSpacesValidator()],
      }),
      description: this.fb.nonNullable.control('', {
        validators: [Validators.required, noWhiteSpacesValidator()],
      }),
    });
  }

  protected isControlTouchedAndValid(inputPath: string): boolean {
    const control = this.bookForm.get(inputPath);
    return !!(control && control.touched && !control.valid);
  }
}

export type BookOutputData = ReturnType<BookFormComponent['bookForm']['getRawValue']>;
