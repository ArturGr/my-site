import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormState } from '../../services/form-state';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../../services/menu';

interface ContactResponse {
  success: boolean;
  message?: string;
  error?: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm implements OnInit, OnDestroy {
  contactForm: FormGroup;
  submissionStatus: 'idle' | 'sending' | 'success' | 'error' = 'idle';
  protected menuService = inject(Menu);

  get translate() {
    return this.menuService.translate().contacMeSectionLang;
  }

  get isMobile() {
    return this.menuService.isMobile();
  }

  constructor(
    private fb: FormBuilder,
    private formService: FormState,
    private http: HttpClient
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
      this.submissionStatus = 'sending';
      const ENDPOINT = "contact_form_mail.php";
      this.http.post<ContactResponse>(ENDPOINT, this.contactForm.value).subscribe({
        next: (response) => {
          if (response.success) {
            this.submissionStatus = 'success';
            this.contactForm.reset();
            this.formService.clear();
            setTimeout(() => this.closeFeedback(), 5000);
          } else {
            console.error('Server error message:', response.error);
            this.submissionStatus = 'error';
          }
        },
        error: (error) => {
          this.submissionStatus = 'error';
          console.error('Network or Server error:', error);
          setTimeout(() => this.closeFeedback(), 4000);
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  closeFeedback() {
    if (this.submissionStatus !== 'sending') {
      this.submissionStatus = 'idle';
    }
  }
}
