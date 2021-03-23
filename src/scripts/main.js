import { EntryListComponent } from "./journalEntryList.js";
import { getJournalEntries } from "./journalData.js"

// copied showJournalPostList function from giffyGram 
// where did I get allPosts & Postlist ??? \\

const showJournalPostList = () => {
	const postElement = document.querySelector(".entryLog");
	EntryListComponent().then((allPosts) => {
		postElement.innerHTML = PostList(allPosts);
	})
}

showJournalPostList();

let journalEntries = getJournalEntries();

console.log(journalEntries, "journal entry test")