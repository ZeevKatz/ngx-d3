import { Injectable } from '@angular/core';
import * as d3 from 'd3';

/**
 * Type of D3.
 */
export type D3 = typeof d3;

/**
 * D3 service.
 */
@Injectable({
  providedIn: 'root'
})
export class NgxD3Service {
  getD3(): D3 {
    return d3;
  }
}
