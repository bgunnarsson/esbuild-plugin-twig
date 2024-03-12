import fs from 'fs'
import path from 'path'
import format from 'html-format'
import Twig from 'twig'

/**
 * @description ESBuild Twig Plugin
 * @author @bgunnarsson @ccrch @hafsig79
 */

interface ITwigPluginOptions {
  src: string
  destination: string
}

function twigPlugin({ src = 'src/twig', destination = 'public' }: ITwigPluginOptions) {
  return {
    name: 'twigPlugin',
    setup(_build: any) {
      const twigArr: string[] = []
      const files = fs.readdirSync(`${src}/`)

      files.forEach((file) => {
        if (path.extname(file) === '.twig') {
          twigArr.push(file)
        }
      })

      twigArr.forEach((filename, _index) => {
        Twig.renderFile(`${src}/${filename}`, {}, (err: any, html: string) => {
          if (err) {
            console.error('🚨 Twig encountered an error. 🚨 ', err)
            return
          }

          const folder = filename.slice(0, -5) === 'index' ? undefined : `${path.parse(filename).name}`
          const file = `${path.parse(filename).name}.html`

          const markup = format(html, ' '.repeat(4), 9999)

          if (!fs.existsSync(destination)) {
            fs.mkdirSync(destination, { recursive: true })
          }

          if (folder) {
            fs.mkdirSync(`${destination}/${folder}`, { recursive: true })
            fs.writeFileSync(`${destination}/${folder}/index.html`, markup)
          } else {
            fs.writeFileSync(`${destination}/${file}`, markup)
          }
        })
      })
    },
  }
}

export default twigPlugin
