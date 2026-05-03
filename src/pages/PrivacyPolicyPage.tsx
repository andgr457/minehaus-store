import useScrollReveal from '../hooks/useScrollReveal'

export default function PrivacyPolicyPage(){
  useScrollReveal()

  return <div className='page-main reveal'>
    <div className='header-1 red'>
      Privacy Policy
    </div>
    <div className='page-text dark'>
      This Privacy Policy explains how MineHaus collects, uses, and protects your information when you use the MineHaus online store operated through CraftingStore.
    </div>

    <div className='minehaus-hr gold' />

    <div>
      <div className='header-3'>
        Scope of This Policy
      </div>
      <div className='page-text left'>
        This Privacy Policy applies solely to purchases and interactions made through the MineHaus online store hosted on CraftingStore.
      </div>
      <div className='page-text left'>
        It does not apply to the MineHaus game server, community platforms, marketing website, or any other services unless explicitly stated.
      </div>
    </div>
    
  </div>
}