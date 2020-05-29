import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionstorageService {

  constructor() { }

	set(name, value) {

		return sessionStorage.setItem(name, value);

	}

	get(name) {

		return sessionStorage.getItem(name);

	}

	remove(name) {

		return sessionStorage.removeItem(name);

	}

	length() {

		return sessionStorage.length;

	}

	clear() {

		return sessionStorage.clear();

	}
}
