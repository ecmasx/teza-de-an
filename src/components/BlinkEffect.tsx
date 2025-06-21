export default function BlinkEffect() {
  return (
    <>
      <div className="absolute -top-3 -left-2">
        <div className="w-2 h-2 text-white animate-pulse" style={{ animationDuration: '1.5s' }}>
          ✦
        </div>
      </div>
      <div className="absolute -top-4 right-2">
        <div
          className="w-2 h-2 text-white animate-pulse"
          style={{ animationDuration: '2s', animationDelay: '0.5s' }}
        >
          ✧
        </div>
      </div>
      <div className="absolute -bottom-1 -left-1">
        <div
          className="w-2 h-2 text-white animate-pulse"
          style={{ animationDuration: '1.8s', animationDelay: '1s' }}
        >
          ✦
        </div>
      </div>
      <div className="absolute -bottom-2 right-4">
        <div
          className="w-2 h-2 text-white animate-pulse"
          style={{ animationDuration: '2.2s', animationDelay: '0.3s' }}
        >
          ✧
        </div>
      </div>
      <div className="absolute -top-1 -right-3">
        <div
          className="w-2 h-2 text-white animate-pulse"
          style={{ animationDuration: '1.7s', animationDelay: '0.8s' }}
        >
          ✦
        </div>
      </div>
      <div className="absolute bottom-2 -left-3">
        <div
          className="w-2 h-2 text-white animate-pulse"
          style={{ animationDuration: '1.9s', animationDelay: '0.2s' }}
        >
          ✧
        </div>
      </div>
    </>
  )
}
