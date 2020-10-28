import { Component, OnInit } from "@angular/core";
import { ITechnology } from "../..//models/technology.model";
import { HttpService } from '../../services/http.service';

@Component({
  selector: "app-technologies",
  templateUrl: "./technologies.component.html",
  styleUrls: ["./technologies.component.css"],
})
export class TechnologiesComponent implements OnInit {
  public technologies: ITechnology[];

  constructor(public _httpService: HttpService) {}

  ngOnInit() {
    this._httpService
      .getTechnologies()
      .subscribe((technologies: ITechnology[]) => {
        this.technologies = technologies['data'];
      });
  }
}
