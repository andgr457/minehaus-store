import { Link } from 'react-router-dom';

export default function Footer(){

  return <div>
    <div className='page-main reveal'>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
        <div className='wine'>
          <Link to={'/terms'} className='footer-link'>Terms</Link>
        </div>
        <div>
          |
        </div>
        <div className='wine'>
          <Link to={'/privacy'} className='footer-link'>Privacy</Link>
        </div>
        <div>
          |
        </div>
        <div className='foot-note'>
          MineHause is not affiliated with Mojang Studios or Microsoft.
        </div>
      </div>
    </div>
    <div className='minehaus-hr' />
  </div>
}