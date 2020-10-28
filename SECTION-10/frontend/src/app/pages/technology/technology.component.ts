import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "src/app/services/http.service";
import { ITechnology } from "src/app/models/technology.model";

@Component({
  selector: "app-technology",
  templateUrl: "./technology.component.html",
  styleUrls: ["./technology.component.css"],
})
export class TechnologyComponent implements OnInit {
  public technology: ITechnology = {
    name: "",
    description: "",
    logo: "",
    _id: "",
    tags: [],
    updatedAt: null,
    createdAt: null,
  };

  constructor(
    private activateRoute: ActivatedRoute,
    private _httpService: HttpService
  ) {}

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      const id = params["id"];
      this._httpService
        .getTechnology(id)
        .subscribe((technology: ITechnology) => {
          this.technology = technology['data'];
        });
    });
  }
}
