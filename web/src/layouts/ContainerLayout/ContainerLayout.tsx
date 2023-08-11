type ContainerLayoutProps = {
  children?: React.ReactNode
}

const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  return <div className="container mx-auto">{children}</div>
}

export default ContainerLayout
