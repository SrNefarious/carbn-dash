import Image from "next/image"

export function CarbnLogo() {
  return (
    <div className="flex items-center justify-center w-64 h-16 bg-[#FFFFFC] overflow-hidden">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carbn%20logo%20-%20HORIZONTAL%20NAME-P9NKiKXkEXmYtKqSfZszORtsv0xxop.png"
        alt="Carbn Logo"
        width={200}
        height={40}
        className="h-auto w-full max-w-[200px] object-cover object-center"
        priority
      />
    </div>
  )
}

