import { getJournalEntries, useJournalEntries } from "./journalData.js"
import { JournalEntryComponent } from "./journalEntry.js"


//Iterating over the list of journal entries and creating HTML component.
//STILL PLAYING AROUND WITH PARAMETERS \\\
export const EntryListComponent = (obj) => {
    const entries = useJournalEntries();

    for (const obj of entries) {
        entryLog.innerHTML += JournalEntryComponent(obj)
    }
    console.log("entry components", JournalEntryComponent);
}