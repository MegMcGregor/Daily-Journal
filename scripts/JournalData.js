
samplePost = {
    postID: 1
    date: 00-00-00,
    conceptsCovered: "string",
    mood: Boolean,
    message: varchar
}
 

export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

