# Palindromania

## Getting started

`npm install`<br>
`npm start`

Server will run on port 3000.

Point your browser to `http://localhost:3000` for the game UI.

## Tests

`npm run test` will run the test suites

## Game rules

### Names

Only letters and numbers allowed, characters that are not letters or numbers will be removed.

### Valid Palindromes

- The game will not accept words and phrases containing more than two of the same letter or number in a row - e.g. 'oo' is valid but 'ooo' is not. This is to prevent long strings of repeated characters
- Punctuation and non alphanumeric characters will not count towards your score - only the letters and numbers will be considered.
- Spaces will not count towards your score

### Top scores

The top 5 scores will appear under top scores in the UI. Where two or more entries have the same score, they will both appear in the top scores and share the position.

## Configuration

The server port and the number of top scores to be displayed can be configured in `config/index.ts`

## Implementation

### Data storage

The imitation database is located in `src/data`. I have used a class called Entries to solve this.<br>
The class stores the entries in an object with the keys being the name of the entrant and the value being their score.

#### **Interface: `Entry`**
```
{ name: string, points: number }
```

Entries provides the following public methods:

#### **`getEntries`** (filterFunc): Entry[]
Returns array of entries, optional filter function may be used

- `filterFunc` - Function which accepts an entry object and returns a boolean, used to make assertions about the entry object, passed to Javascript `Array.prototype.filter()`

#### **`addEntry`** (Entry): Entry
Adds an entry

### Routing

`src/app.ts` points to `src/routes` which handles the routing for all `/api` routes.

### Application logic

This is dealt with in `src/controllers`.

There is currently only the entryController. This exposes the `submit` and `getScores` functionality and interacts with the data store.

### Optimisation opportunities

#### Get the top scores

Since we aren't using a real database, we are not selectively querying for the top scorers. Instead, we are getting all entries and iterating over them to find the top scorers. Presuming we are dealing with relatively low numbers of entries in this example this is not a problem but in a scenario with massive amounts of entries a search tree would be a better implementation to improve the time complexity of the lookup from O(n) to O(logn)

#### Validating palindromes

A loophole in the game is the ability to submit gobbledygook as a palindrome such as qqwweewwqq as there is no check that the words in the string are valid. This could be improved by using an API to check if words exist. The trade off would be language specificity.

As there is no requirement for the entries to be from English or any specific language it's all good though!
