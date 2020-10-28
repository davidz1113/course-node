import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "src/app/services/http.service";
import { ITechnology } from "src/app/models/technology.model";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  technologies: ITechnology[] = [];
  query: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private _httpSercive: HttpService
  ) {}

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.query = params["query"];
      this._httpSercive
        .searchTechnology(this.query)
        .subscribe((technologies) => {
          this.technologies = technologies["data"];
        });
    });
  }
}
