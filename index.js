import os from "node:os"
import { func } from './second.js'

console.log(os.homedir(), os.hostname(), os.version(), os.type())

console.log(func(os.type()))