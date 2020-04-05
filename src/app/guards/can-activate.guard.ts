import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Observable, from } from "rxjs";

@Injectable()
export class CanActivateGuard implements CanActivate {

  canActivate(): Observable<boolean> {
    return from([true]);
  }

}