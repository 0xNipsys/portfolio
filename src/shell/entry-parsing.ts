import { Command, type CommandEntry } from '@/shell/commands'

function unrecognizedEntry(name: string): CommandEntry {
  return newEntry(name as Command, undefined, undefined, undefined)
}

function newEntry(
  name: Command,
  option: string | undefined,
  argName: string | undefined,
  argValue: string | undefined
): CommandEntry {
  return {
    cmdName: name,
    option,
    argName,
    argValue,
    timestamp: Date.now()
  }
}

export default function parseEntry(entry: string): CommandEntry {
  const split = entry.split(' ')
  const cmdName =
    Command[
      (Object.entries(Command).find(([, v]) => v === split[0]) ?? [''])[0] as keyof typeof Command
    ]

  if (!cmdName) return unrecognizedEntry(entry)

  let option = undefined
  let argName = undefined
  let argValue = undefined

  if (split[1]?.includes('--') && split[1]?.includes('=')) {
    const argSplit = split[1].split('=')
    argName = argSplit[0].replace('--', '')
    argValue = argSplit[1]
  } else {
    option = split[1]
  }

  return newEntry(cmdName, option, argName, argValue)
}
