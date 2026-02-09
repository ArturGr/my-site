import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormState } from '../../services/form-state';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm implements OnInit, OnDestroy {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formService: FormState
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(5)]],
      privacy: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    const savedData = this.formService.load();
    if (savedData) {
      this.contactForm.patchValue(savedData);
    }
  }

  ngOnDestroy(): void {
    if (this.contactForm.dirty) {
      this.formService.save(this.contactForm.value);
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  isValid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.valid && (control.dirty || control.touched));
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formularz wysłany:', this.contactForm.value);
      this.formService.clear();
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
