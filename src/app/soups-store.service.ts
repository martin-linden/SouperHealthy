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

    addSoup(title: string) {
        let amount = 1;
        //todo: fix this one.
        if (title && title.length) {

            // This is called an optimistic update
            // updating the record locally before actually getting a response from the server
            // this way, the interface seems blazing fast to the enduser
            // and we just assume that the server will return success responses anyway most of the time.
            // if server returns an error, we just revert back the changes in the catch statement 

            const tmpId = "23"; //vad gör den? hur får sopporna ett unikt id?
            const tmpSoup = { id: tmpId, title, amount: 1 };
            // skriv kod som kollar om en soppa med en viss title redan finns._soups
            //isf lägg till amount = amount + 1 //jag skulle ta bort amount?
            if (this.soups.some(soup => soup.title == title)) {
                // Soppan finns redan
                
                this.soups.find(soup => soup.title == title).amount += 1;
               /*  this.soups = [
                    ...this.soups
                ]; */
                amount = this.soups.find(soup => soup.title == title).amount;
            } else {

            this.soups = [
                ...this.soups,
                tmpSoup
            ];
        }
        return amount;

        }

    }

    removeSoup(title: string) {
        // optimistic update
        // todo: skriv om denna så att den minskar soppan id med ett
        const soup = this.soups.find(t => t.title === title);
        if (!soup) {
            return 0;
        }
        if (soup.amount == 1) {
            //sista soppan, OK att ta bort hela
            this.soups = this.soups.filter(soup => soup.title !== title);
            return 0;
        } else {
            soup.amount -= 1;
            // inte sista soppan, minska med ett
        }
        return soup.amount;       
    }

  
}

