import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormState {
  private formData: any = null;

  save(data: any) {
    this.formData = data;
  }

  load() {
    return this.formData;
  }

  clear() {
    this.formData = null;
  }
}
