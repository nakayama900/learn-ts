import fs from 'node:fs'
import path from 'node:path'
import {createCanvas, registerFont, loadImage} from 'canvas'

const size = {with: 600, height: 315}
const current = process.cwd()

export const generateOgImage
