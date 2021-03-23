//decrlare empty array for journal entries
let journalEntryArray = []

//fetch call to grab journal entries
export const getJournalEntries = () => {
    return fetch("http://localhost:8088/posts")
        .then(response => response.json())
        .then(parsedResponse => {
            return parsedResponse;
        })
}

//function to return journal entries
// MISSING A LINE OF CODE TO PUSH ENTRIES INTO THE EMPTY ARRAY \\
export const useJournalEntries = () => {
    return [...journalEntryArray]
}

