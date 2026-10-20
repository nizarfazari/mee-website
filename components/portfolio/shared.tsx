type HeadingProps = {
  kicker: string
  title: string
  text: string
}

export function Heading({ kicker, title, text }: HeadingProps) {
  return <div className="heading"><span>{kicker}</span><h2>{title}</h2><p>{text}</p></div>
}

export function Meter({ label, value, color }: { label: string; value: string; color: string }) {
  return <div className="meter"><div><span>{label}</span><b>{value}/100</b></div><i><em className={color} style={{ width: `${value}%` }} /></i></div>
}
