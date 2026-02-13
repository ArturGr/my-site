import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormState } from '../../services/form-state';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../../services/menu';

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
  //  if (this.contactForm.valid) {
  //     this.submissionStatus = 'sending';
  //     const endpoint = "https://artur-groblicki.developerakademie.net/Portfolio/php/send_mail.php";
  //     this.http.post(endpoint, this.contactForm.value).subscribe({
  //       next: (response) => {
  //         this.submissionStatus = 'success';
  //         this.formService.clear();
  //         this.contactForm.reset();
  //         setTimeout(() => this.submissionStatus = 'idle', 5000);
  //       },
  //       error: (error) => {
  //         this.submissionStatus = 'error';
  //         console.error('Błąd!', error);
  //         setTimeout(() => this.submissionStatus = 'idle', 3000);
  //       }
  //     });
  //   } else {
  //     this.contactForm.markAllAsTouched();
  //   }
    if (this.contactForm.valid) {
      this.submissionStatus = 'sending';

      // SYMULACJA TESTOWA (Test nr 1)
      setTimeout(() => {
        this.submissionStatus = 'success';
        this.contactForm.reset();
        this.formService.clear();
        setTimeout(() => {
          this.closeFeedback();
        }, 2000);

      }, 2000);
    }
  }

  closeFeedback() {
    if (this.submissionStatus !== 'sending') {
      this.submissionStatus = 'idle';
    }
  }
}
