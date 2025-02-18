import Image from "next/image"

export function CarbnLogo() {
  return (
    <div className="flex items-center justify-center w-64 h-16 bg-[#FFFFFC] overflow-hidden">
      <Image
        src="/carbn-logo.png"
        alt="Carbn Logo"
        width={200}
        height={40}
        className="h-auto w-full max-w-[200px] object-cover object-center"
        priority
        onError={(e) => {
          // Replace broken image with a placeholder
          const target = e.target as HTMLImageElement
          target.style.display = "none"
          const parent = target.parentElement
          if (parent) {
            const placeholder = document.createElement("div")
            placeholder.className = "flex items-center justify-center space-x-2 text-gray-400"
            placeholder.innerHTML = `
              <span class="font-semibold text-xl">CARBN</span>
            `
            parent.appendChild(placeholder)
          }
        }}
      />
    </div>
  )
}

