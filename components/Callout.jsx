export function CalloutInfo({ children, title = "ℹ️ Info" }) {
  return (
    <div className="callout callout-info">
      <div className="callout-title">{title}</div>
      <div className="callout-content">{children}</div>
    </div>
  )
}

export function CalloutWarning({ children, title = "⚠️ Warning" }) {
  return (
    <div className="callout callout-warning">
      <div className="callout-title">{title}</div>
      <div className="callout-content">{children}</div>
    </div>
  )
}

export function CalloutDanger({ children, title = "🚨 Important" }) {
  return (
    <div className="callout callout-danger">
      <div className="callout-title">{title}</div>
      <div className="callout-content">{children}</div>
    </div>
  )
}

export function CalloutSuccess({ children, title = "✅ Success" }) {
  return (
    <div className="callout callout-success">
      <div className="callout-title">{title}</div>
      <div className="callout-content">{children}</div>
    </div>
  )
}

export default function Callout({ type = "info", children, title }) {
  const types = {
    info: CalloutInfo,
    warning: CalloutWarning,
    danger: CalloutDanger,
    success: CalloutSuccess
  }

  const Component = types[type] || CalloutInfo
  return <Component title={title}>{children}</Component>
}
