import { Command, type CommandEntry, Commands } from '@/shell/commands'

function unrecognizedEntry(name: string): CommandEntry {
  return newEntry(name as Command, undefined, undefined, undefined, undefined)
}

function newEntry(
  name: Command,
  fullscreen: boolean | undefined,
  option: string | undefined,
  argName: string | undefined,
  argValue: string | undefined
): CommandEntry {
  return {
    cmdName: name,
    fullscreen,
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
  const cmdInfo = Commands.find((cmd) => cmd.name === cmdName)

  if (!cmdName || !cmdInfo) return unrecognizedEntry(entry)

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

  return newEntry(cmdName, cmdInfo.fullscreen, option, argName, argValue)
}
