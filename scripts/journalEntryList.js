import { getJournalEntries } from "./JournalData.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const entryLog = document.querySelector("#entryLog")

export const EntryListComponent = () => {
    const entries = getJournalEntries()

    for (const entry of entries) {
        entryLog.innerHTML += JournalEntryComponent(entry)
    }
    console.log("entry components", JournalEntryComponent);
}