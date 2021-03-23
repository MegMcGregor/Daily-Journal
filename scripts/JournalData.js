
const journal = [
    {
        id: 1,
        date: "03/01/21",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "whelmed"
    },
    {
        id: 2,
        date: "03/05/2021",
        concept: "JavaScript",
        entry: "We talked about how to represent HTML components on the DOM.",
        mood: "whelmed"
    },
    {
        id: 3,
        date: "03/09/2021",
        concept: "JavaScript",
        entry: "We learned about fetching data from external sources",
        mood: "overwhelmed"
    }
]
 

export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

