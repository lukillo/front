export function Header() {
    return (
      <header className="bg-primary-dark p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://www.storicard.com/_next/static/media/storis_savvi_color.3aa7ad1e.svg" 
              alt="Stori by Savvi"
              className="h-8 md:h-10"
            />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-[#004D4D]">Admin Portal</h1>
        </div>
      </header>
    )
  }
  
  