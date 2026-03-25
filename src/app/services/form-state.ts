import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormState {
  private formData: any = null;

  /**
  * Temporarily persists the form data in the service state.
  * This is typically called during component destruction (ngOnDestroy)
  * to ensure user input is not lost during navigation.
  * @param {any} data - The current value of the contact form group.
  */
  save(data: any) {
    this.formData = data;
  }

  /**
  * Retrieves the previously saved form data from the service state.
  * Used during component initialization (ngOnInit) to restore the form's
  * previous state if the user navigates back to the contact section.
  * @returns {any | null} The stored form data or null if no data exists.
  */
  load() {
    return this.formData;
  }

  /**
  * Clears the stored form data from the service state.
  * Should be called after a successful form submission to ensure
  * that subsequent visits start with a fresh, empty form.
  */
  clear() {
    this.formData = null;
  }
}
