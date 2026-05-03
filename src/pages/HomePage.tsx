import { useEffect } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function HomePage(){
  useScrollReveal()
  useEffect(() => {
    document.title = "Minehaus Store | Home";
    
    // Optional: Reset title when component unmounts
    return () => {
      document.title = "Minehaus Store";
    };
  }, []);

  return <div>

    <div className='page-main reveal'>
      <div className='header-1 red'>
        ✦ Welcome to the MineHaus Store
        <div className='minehaus-hr gold' />
      </div>
      <div className='page-text dark'>
        Thank you for considering supporting <span className='wine'>MineHaus</span>. 
        Your support helps <span className='gold'>keep the lights on</span> by 
        covering server costs, future development and 
        supporting the team behind the server who pour 
        countless hours into crafting a fun experience 
        for us all.
      </div>
      <div className='page-text dark'>
        Whether you choose to support as a <span className='purple'>Patron</span>, 
        <span className='purple'> Benefactor</span>, or <span className='purple'>Producer</span>, you are helping to 
        sustain the server and its people working 
        behind the scenes.
      </div>
    </div>

    

    <div className='page-main reveal'>
      <div className='header-1 red'>
        ✓ Support, Not Advantage
        <div className='minehaus-hr gold' />
      </div>
      <div className='page-text dark'>
        Supporting MineHaus is <span className='green'>completely optional </span> 
        and is never required to enjoy the server.
      </div>
      <div className='page-text dark'>
        All supporter benefits are intentionally designed to be cosmetic, social, or recognition based and will never grant any gameplay advantages over other players.
      </div>
    </div>


    <div className='page-main reveal'>
      <div className='header-1 red'>
        ★ Supporter Benefits and Server Health
        <div className='minehaus-hr gold' />
      </div>
      <div className='page-text dark'>
        Supporter benefits apply only while your account remains 
        in <span className='green'>good standing</span>.
      </div>
      <div className='page-text dark'>
        As MineHaus grows and new acts/seasons are 
        added, certain benefits may <span className='gold'>change slightly </span> 
        or be <span className='gold'>adjusted</span> to maintain the balance, 
        performance, and/or the overall health of 
        the server.
      </div>
    </div>

    <div className='page-main reveal'>
      <div className='header-1 red'>
        ⏱ Purchase Processing
        <div className='minehaus-hr gold' />
      </div>
      <div className='page-text dark'>
        Most purchases are processed within a 
        minute. In rare cases, processing can 
        take anywhere from <span className='gold'>5 to 10 minutes</span>.
      </div>
      <div className='page-text dark'>
        If your benefits do not appear right away
        in game, please try <span className='purple'>re-logging</span> before 
        reaching out to staff.
      </div>
    </div>

    <div className='page-main reveal'>
      <div className='header-1 red'>
        ⚠ Final Sales and House Rules
        <div className='minehaus-hr gold' />
      </div>
      <div className='page-text danger'>
        All purchases are <span className='wine'>final</span>. Supporter 
        benefits are <span className='wine'>non-refundable</span> and will 
        not be reinstated if access is lost due 
        to rule violations on the server, 
        Discord, website, or other MineHaus 
        platforms.
      </div>
    </div>

    <div className='page-main reveal'>
      <div className='header-1 red'>
        ♥ Family Friendly and Permissions
        <div className='minehaus-hr gold' />
      </div>
      <div className='page-text dark'>
        MineHaus is and will always be a <span className='green'>family friendly </span> 
        community. Purchases should only 
        be made by the account holder or with their 
        express permission. Parents or Guardians 
        should approve any and all purchases made 
        by minors.
      </div>
    </div>

    <div className='page-main reveal'>
      <div className='header-1 red'>
        ❤ A Note on Care and Responsibility
        <div className='minehaus-hr gold' />
      </div>
      <div className='page-text success'>
        <div className='page-text dark'>
          Please carefully consider your support. 
          Financially supporting us here at MineHaus 
          should always be a comfortable choice and 
          should never feel like an obligation.
        </div>
        <div className='page-text dark'>
          If supporting the server would mean choosing
          between your real world needs such as food, 
          housing, or bills, we implore you to please 
          take care of yourself first. The doors will 
          remain open, and the lights will still be on
          when the time is right.
        </div>
      </div>
      <div className='page-text dark'>
        We are grateful to have you here whether you choose to support or simply enjoy the show.
      </div>
    </div>
    <div className='minehaus-hr gold' />
  </div>
}