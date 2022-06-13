import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Config {
  name: string;
  theme: string;
  size: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}
  getConfig() {
    return this.http.get<Config>('/assets/config.json');
  }
}
