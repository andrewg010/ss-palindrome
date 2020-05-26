interface EntryRecord {
  points: number
}

export interface Entry extends EntryRecord {
  name: string
}

export default class Entries {
  entries: {
    [key: string]: EntryRecord
  }

  constructor() {
    this.entries = {} 
  }

  addEntry ({ name, points }: { name: string, points: number }): Entry {
    if (typeof name !== 'string' || typeof points !== 'number') this.error(['name', 'points'], 'Supply correct data types')
    this.entries[name] = { points }
    return this.getEntry(name) 
  }

  getEntries (filterFunc?: (entry: Entry) => boolean): Entry[] {
    const entries = this.getAllEntries()
    if (!entries.length) return []
    if (!filterFunc) return entries
    return entries.filter(entry => filterFunc(entry))
  } 

  private error (fields: string[], message: string ) {
    throw new Error(`${message} -  fields: ${fields.join(', ')}`)
  }

  private getAllEntries (): Entry[] {
    const entryKeys: string[] = Object.keys(this.entries)
    if (!entryKeys.length) return [] 
    return entryKeys.map(name => this.getEntry(name))
  }

  private getEntry (name: string): Entry {
    if (!this.entries[name]) throw new Error('Entry does not exist')
    return { name, points: this.entries[name].points }
  }
}
