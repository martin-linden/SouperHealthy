import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { shareReplay, map } from 'rxjs/operators'

import { Soup } from './soups.model';


@Injectable({ providedIn: 'root' })
export class SoupsStoreService {


    // - We set the initial state in BehaviorSubject's constructor
    // - Nobody outside the Store should have access to the BehaviorSubject 
    //   because it has the write rights
    // - Writing to state should be handled by specialized Store methods (ex: addSoup, removeSoup, etc)
    // - Create one BehaviorSubject per store entity, for example if you have SoupGroups
    //   create a new BehaviorSubject for it, as well as the observable$, and getters/setters
    private readonly _soups = new BehaviorSubject<Soup[]>([]);

    // Expose the observable$ part of the _soups subject (read only stream)
    readonly soups$ = this._soups.asObservable();

    /* 
        // we'll compose the soups$ observable with map operator to create a stream of only completed soups
        readonly completedSoups$ = this.soups$.pipe(
            map(soups => soups.filter(soup => soup.isCompleted))
        )
    
        readonly uncompletedSoups$ = this.soups$.pipe(
            map(soups => soups.filter(soup => !soup.isCompleted))
        ) */

    // the getter will return the last value emitted in _soups subject
    get soups(): Soup[] {
        return this._soups.getValue();
    }


    // assigning a value to this.soups will push it onto the observable 
    // and down to all of its subsribers (ex: this.soups = [])
    set soups(val: Soup[]) {
        this._soups.next(val);
    }

    async addSoup(title: string) {
        //todo: fix this one.
        if (title && title.length) {

            // This is called an optimistic update
            // updating the record locally before actually getting a response from the server
            // this way, the interface seems blazing fast to the enduser
            // and we just assume that the server will return success responses anyway most of the time.
            // if server returns an error, we just revert back the changes in the catch statement 

            const tmpId = "23";
            const tmpSoup = { id: tmpId, title, amount: 1 };
            // skriv kod som kollar om en soppa med en viss title redan finns._soups
            //isf lägg till amount = amount + 1

            this.soups = [
                ...this.soups,
                tmpSoup
            ];


        }

    }

    async removeSoup(id: string) {
        // optimistic update
        // todo: skriv om denna så att den minskar soppan id med ett

        const soup = this.soups.find(t => t.id === id);
        this.soups = this.soups.filter(soup => soup.id !== id);

    }

    /*    async setCompleted(id: string, isCompleted: boolean) {
           let soup = this.soups.find(soup => soup.id === id);
   
           if (soup) {
               // optimistic update
               const index = this.soups.indexOf(soup);
   
               this.soups[index] = {
                   ...soup,
                   isCompleted
               }
   
               this.soups = [...this.soups];
   
               try {
                   await this.soupsService
                       .setCompleted(id, isCompleted)
                       .toPromise();
   
               } catch (e) {
   
                   console.error(e);
                   this.soups[index] = {
                       ...soup,
                       isCompleted: !isCompleted
                   }
               }
           }
       } */


    /*     async fetchAll() {
            this.soups = await this.soupsService.index().toPromise();
        } */

}