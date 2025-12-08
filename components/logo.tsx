import Image from "next/image"

export const DigitalDeploymentLogo = () => {
  return (
    <Image
      src="/digital-deployment-logo.svg"
      alt="Digital Deployment Logo"
      width={365}
      height={85}
      className="h-11 w-auto"
    />
  )
}
