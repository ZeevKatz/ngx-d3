<p align="center">
  <img src="docs/assets/logo.png" />
</p>
<p align="center">
  <a href="https://travis-ci.org/zeevkatz/ngx-d3">
    <img src="https://api.travis-ci.org/zeevkatz/ngx-d3.svg?branch=master" />
  </a>
</p>

---

`ngx-d3` is a [D3](https://github.com/d3/d3) (by Tom IMO) wrapper service for [Angular](https://angular.io/) applications.

## Installation

```
yarn install ngx-d3
```

## Usage

* `NgxD3Service`: The Angular D3 Service injectable,
* `D3`: A TypeScript type alias for the `d3` variable which can be obtained from the `NgxD3Service`, and
* the various TypeScript interfaces and type aliases which are related to the D3 modules constituting `d3` as provided by this service (e.g. `Selection`, `Transition`, `Axis`). 

To obtain the `d3` object from an injected D3 service `ngxD3Service: NgxD3Service`, it offers a method `ngxD3Service.getD3()` with return type `D3`. 

## How to use:

```ts
import { Component, OnInit } from '@angular/core';
import { NgxD3Service } from 'ngx-d3';

@Component({
  selector: 'histogram-component',
  templateUrl: 'histogram-component.component.html',
  styleUrls: ['histogram-component.component.css']
})
export class HistogramComponent implements OnInit {
  private readonly d3 = this.ngxD3Service.getD3();

  constructor(private readonly ngxD3Service: NgxD3Service) {}

  ngOnInit() {
    this.d3.select(...)
    // ...
  }
}
```
