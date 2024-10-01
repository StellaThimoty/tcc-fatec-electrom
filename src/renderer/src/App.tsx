import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import { useState } from 'react'

function App(): JSX.Element {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <img alt="logo" src={electronLogo} />
      <div className="text-4xl">Powered by electron-vite</div>
      <div className="text-2xl">
        Build an Electron app with <span className="text-4xl">React</span>
        &nbsp;and <span className="text-4xl">TypeScript</span>
      </div>
      <p className="text-4xl">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="flex flex-col">
        <div className="p-4">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="p-4">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
