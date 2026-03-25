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

  /**
  * Getter to retrieve the translated strings for the contact section.
  * Uses the menuService to adapt the UI based on the selected language.
  * @returns {any} The localized content for the contact me section.
  */
  get translate() {
    return this.menuService.translate().contacMeSectionLang;
  }

  /**
  * Getter to determine if the current device is a mobile device.
  * Useful for adjusting validation error displays or placeholders in the template.
  * @returns {boolean} True if the device is mobile, false otherwise.
  */
  get isMobile() {
    return this.menuService.isMobile();
  }

  /**
  * Initializes the contact form group with reactive validation rules.
  * @param fb - FormBuilder for creating the reactive form.
  * @param formService - Service to handle form state persistence (localStorage).
  * @param http - HttpClient for sending the form data to the PHP backend.
  */
  constructor(
    private fb: FormBuilder,
    private formService: FormState,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      message: ['', [Validators.required, Validators.minLength(2)]],
      privacy: [false, Validators.requiredTrue]
    });
  }

  /**
  * Lifecycle hook: On initialization, it attempts to load previously saved
  * form data from the FormState service to restore user progress.
  */
  ngOnInit(): void {
    const savedData = this.formService.load();
    if (savedData) {
      this.contactForm.patchValue(savedData);
    }
  }

  /**
  * Lifecycle hook: Before component destruction, it saves the current form values
  * if the form has been modified (is dirty), ensuring no data is lost on navigation.
  */
  ngOnDestroy(): void {
    if (this.contactForm.dirty) {
      this.formService.save(this.contactForm.value);
    }
  }

  /**
  * Validates if a form control is invalid and has been interacted with.
  * @param controlName - The name of the form control to check.
  * @returns {boolean} True if the control is invalid and dirty/touched.
  */
  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  /**
  * Validates if a form control is valid and has been interacted with.
  * @param controlName - The name of the form control to check.
  * @returns {boolean} True if the control is valid and dirty/touched.
  */
  isValid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.valid && (control.dirty || control.touched));
  }

  /**
  * Main handler for form submission.
  * Checks validation and triggers the email delivery process if the form is valid.
  */
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.sendContactEmail();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  /**
  * Executes the asynchronous POST request to the PHP backend.
  * Manages the submission status and handles both success and error responses.
  * @private
  */
  private sendContactEmail(): void {
    this.submissionStatus = 'sending';
    const ENDPOINT = "contact_form_mail.php";
    this.http.post<ContactResponse>(ENDPOINT, this.contactForm.value).subscribe({
      next: (response) => {
        if (response.success) {
          this.handleSuccess();
        } else {
          this.handleError('Server error: ' + response.error);
        }
      },
      error: (err) => this.handleError('Network error', err)
    });
  }

  /**
  * Performs UI cleanup and status reset upon successful message delivery.
  * Resets the form, clears local storage, and hides the success message after a delay.
  * @private
  */
  private handleSuccess(): void {
    this.submissionStatus = 'success';
    this.contactForm.reset();
    this.formService.clear();
    setTimeout(() => this.submissionStatus = 'idle', 2000);
  }

  /**
  * Handles failed submission attempts by updating the UI status and logging errors.
  * @param logMessage - Short description of the error for the console.
  * @param error - The full error object for debugging purposes.
  * @private
  */
  private handleError(logMessage: string, error?: any): void {
    console.error(logMessage, error);
    this.submissionStatus = 'error';
    setTimeout(() => this.submissionStatus = 'idle', 2000);
  }

  /**
  * Resets the feedback overlay and returns the form status to 'idle'.
  * This method prevents the user from manually closing the feedback
  * while the message is still in the 'sending' state, ensuring the
  * process isn't interrupted or the visual feedback lost prematurely.
  */
  closeFeedback() {
    if (this.submissionStatus !== 'sending') {
      this.submissionStatus = 'idle';
    }
  }
}
