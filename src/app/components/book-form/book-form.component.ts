import { Component, effect, ElementRef, inject, input, output, viewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { notBlankValidator } from '../../utils/validators/notBlankValidator';
import { BookOutputData } from '../../models/book.model';

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
  readonly saveBook = output<BookOutputData>();

  readonly bookForm: FormGroup<BookFormModel> = this.buildForm();

  private readonly dialogRef = viewChild<ElementRef<HTMLDialogElement>>('dialog');

  constructor() {
    effect(() => {
      const dialog = this.dialogRef()?.nativeElement;
      if (!dialog) {
        return;
      }
      if (this.isOpen() && !dialog.open) {
        dialog.showModal();
      } else if (!this.isOpen() && dialog.open) {
        dialog.close();
      }
    });
  }

  protected onDialogClosed() {
    this.bookForm.reset();
    this.closeModal.emit();
  }

  protected close(): void {
    const dialog = this.dialogRef()?.nativeElement;
    if (!dialog) {
      return;
    }
    dialog.close();
  }

  protected save(): void {
    if (this.bookForm.valid) {
      this.saveBook.emit(this.bookForm.getRawValue());
    } else {
      this.bookForm.markAllAsTouched();
    }
  }

  private buildForm(): FormGroup<BookFormModel> {
    return this.fb.group<BookFormModel>({
      author: this.fb.nonNullable.control('', {
        validators: [notBlankValidator()],
      }),
      title: this.fb.nonNullable.control('', {
        validators: [notBlankValidator()],
      }),
      description: this.fb.nonNullable.control('', {
        validators: [notBlankValidator()],
      }),
    });
  }

  protected isControlTouchedAndInvalid(inputPath: string): boolean {
    const control = this.bookForm.get(inputPath);
    return !!(control && control.touched && !control.valid);
  }
}
