import { Component, OnInit } from '@angular/core';
import { ConfigService, Config } from '../config/config.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
})
export class HttpClientComponent implements OnInit {
  config: Config | null = null;
  constructor(private configService: ConfigService) {}
  ngOnInit(): void {}
  showConfig() {
    this.configService.getConfig().subscribe(
      (data: Config) =>
        (this.config = {
          name: data.name,
          size: data.size,
          theme: data.theme,
        })
    );
  }
}
