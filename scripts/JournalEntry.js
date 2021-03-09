export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
           <h2>${entry.date}</h2>
           <h3>${entry.concept}</h3>
           <li>${entry.entry}</li>
           <li>${entry.mood}</li>
        </section>
    `
}