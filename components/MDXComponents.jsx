import Mermaid from './Mermaid'

export const components = {
  pre: (props) => {
    const { children, ...rest } = props

    // Check if this is a mermaid code block
    if (children?.props?.className === 'language-mermaid') {
      const code = children.props.children
      return <Mermaid chart={code} />
    }

    // Default pre rendering for other code blocks
    return <pre {...rest}>{children}</pre>
  }
}

export default components
