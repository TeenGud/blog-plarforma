import Markdown from 'markdown-to-jsx'
import "../defaultCss.css"

export const MarkdownText = ({text}: {text: string}) => {
  return (
    <Markdown className="w-[1200px] bg-white p-2 pt-4">
      {text}
    </Markdown>
  )
}