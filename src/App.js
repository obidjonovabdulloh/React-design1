import './App.css';
import img1 from './assets/Logos.png'
import g1 from './assets/g1.png'
import g2 from './assets/g2.png'
import g3 from './assets/g3.png'
import list from './assets/list.png'
import Image from './assets/Image.png'
import orange from './assets/81.png'
import nul from './assets/00.png'
import hun from './assets/155.png'
import nno from './assets/001.png'
import nnt from './assets/002.png'
import nnh from './assets/003.png'


import { useState } from 'react'
function App() {
  const [count, setCount] = useState(1)
  const [seccount, setSeccount] = useState(30)
  const [minuscount, setMinuscount] = useState(252)

  const Plus = () => {
    setCount(count => count + 1)
  }
  const Umnoj = () => {
    setSeccount(seccount => seccount * 2)
  }
  const Minus = () => {
    setMinuscount(minuscount => minuscount - 1)
  }
  return (
    <>
      <header>
        <nav>
          <div className='container'>
            <div className='title'>
              <h1>
                AR SHAKIR
              </h1>
              <ul className='nav_ul'>
                <li>
                  <a href='#'>Product <i class='bx bx-chevron-down'></i></a>
                </li>
                <li>
                  <a href='#'>Template <i class='bx bx-chevron-down'></i></a>
                </li>
                <li>
                  <a href='#'>Blog</a>
                </li>
                <li>
                  <a href='#'>Pricing</a>
                </li>
              </ul>
              <ul className='ul_nav'>
                <li>
                  <a href='#'>SingIn</a>
                </li>
                <li>
                  <button>Start free</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className='nav_main'>
          <div className='container'>
            <div className='nav_title'>
              <div className='text'>
                <h2>Managing freelance payments has never been easier</h2>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. </p>
                <ul className='button_ul'>
                  <li>
                    <button className='get'>Get Started</button>
                  </li>
                  <li>
                    <button className='see'>+</button>See How It Works
                  </li>
                </ul>
                <ul className='link_ul'>
                  <li>
                    <h3><i class='bx bx-check'></i> Free  Regiter</h3>
                  </li>
                  <li>
                    <h3><i class='bx bx-check'></i> Great Service</h3>
                  </li>
                </ul>
              </div>
              <div className='Imgs'></div>
            </div>
          </div>
        </main>
      </header>

      <main className='sections'>
        <section className='section1'>
          <div className='container'>
            <div className='sec_title'>
              <p>Over 32k+ software  businesses growing with AR Shakir.</p>
              <img src={img1} />
            </div>
          </div>
        </section>

        <section className='section2'>
          <div className='container'>
            <div className='sec2_title'>
              <div className='sec2_text'>
                <h2>
                  Automated
                  portfolio tracking
                </h2>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. </p>
              </div>
              <div className='Messe_text'>
                <p>Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen.</p>
                <p>- Mike Taylor, Web Designer</p>

                <div className='pos'>"</div>
              </div>
            </div>
            <div className='title2'>
              <div className='card'>
                <h3>01</h3>
                <img src={g1} />
                <h2>Connect wallets & companies</h2>
                <p>Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. </p>
              </div>
              <div className='card'>
                <h3>02</h3>
                <img src={g2} />
                <h2>Review
                  <br />
                  transactions</h2>
                <p>Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. </p>
              </div>
              <div className='card'>
                <h3>03</h3>
                <img src={g3} />
                <h2>Get income
                  <br />
                  insights</h2>
                <p>Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. </p>
              </div>
            </div>
          </div>
        </section>

        <section className='section3'>
          <div className='container'>
            <div className='sec3_title'>
              <div className='list'>
                <img src={list} />
              </div>
              <div className='sec3_text'>
                <p>Why Choose Us</p>
                <h2>Track your payments
                  on the go with the
                  best way possible</h2>
                <p className='p'>Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. </p>
                <h3><i class='bx bx-check'></i>Get Overview at a glance</h3>
                <h3><i class='bx bx-check'></i>Deoposit funds easily, securlity</h3>
                <h3><i class='bx bx-check'></i>Get Live Support</h3>
              </div>
            </div>

            <div className='title3'>
              <div className='tit3_text'>
                <p>Why Choose Us</p>
                <h2>Save money with
                  proper transaction</h2>
                <p className='p'>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. </p>

                <div className='messege'>
                  <p className='p1'>Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows .</p>
                  <p>- Mike Taylor, Web Designer</p>

                  <div className='pos'>
                    "
                  </div>
                </div>
              </div>
              <div className='img'>
                <img src={Image} />
              </div>
            </div>
          </div>
        </section>

        <section className='section4'>
          <div className='container'>
            <h2 className='h2s'>Features that blows mind</h2>
            <p className='pp'>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.</p>

            <div className='Bigcard'>
              <div className='card1'>
                <img src={g2} />
                <h3>Really boy law county she unable her sister</h3>
                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
              </div>
              <div className='card1'>
                <img src={g3} />
                <h3>Really boy law county she unable her sister</h3>
                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
              </div>
              <div className='names'>
                <div className='name'>
                  <h2>Merits behind on afraid or warmly</h2>
                </div>
                <div className='name1'>
                  <h2>Believing neglected so so allowance existence</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section5'>
          <div className='container'>
            <div className='sec5_title'>
              <div className='sec5_text'>
                <h2>Testimonials</h2>
                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.</p>
              </div>
              <div className='sec5_img'>
                <img src={orange} />
              </div>
            </div>

            <div className='cards1'>
              <div className='cadr'>
                <div className='cadr_sub'>
                  <p >Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows . Blessing welcomed ladyship.</p>
                  <p className='pl'>- Mike Taylor, Web Designer</p>
                </div>
                <img src={nul} />
                <div className='pos2'>"</div>
              </div>
              <div className='cadr'>
                <div className='cadr_sub'>
                  <p >Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows . Blessing welcomed ladyship.</p>
                  <p className='pl'>- Mike Taylor, Web Designer</p>
                </div>
                <img src={nul} />
                <div className='pos2'>"</div>
              </div>
            </div>
          </div>
        </section>

        <section className='section6'>
          <div className='container'>
            <div className='sec6_title'>
              <ul>
                <li>
                  <p>We speak with
                    our powerfull
                    statistics</p>
                </li>
                <li>
                  <div className='func'>
                    <h3><span>{count}</span>M+</h3>
                    <button onClick={Plus}>+</button>
                  </div>
                  <h3><i class='bx bx-user' ></i>Active Users</h3>
                </li>
                <li>
                  <div className='func'>
                    <h3><span>{seccount}</span>K+</h3>
                    <button onClick={Umnoj}>*</button>
                  </div>
                  <h3><i class='bx bxs-star'></i>5-Stars Reviews</h3>
                </li>
                <li>
                  <div className='func'>
                    <h3>$<span>{minuscount}</span>M</h3>
                    <button onClick={Minus}>-</button>
                  </div>
                  <h3><i class='bx bxs-star'></i>Transactions</h3>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='section7'>
          <div className='container'>
            <h2>Recent Blogs</h2>
            <div className='sec7_title'>
              <div className='sec7_text'>
                <p>Best Practices</p>
                <h3>In design active temper be uneasy. Thirty for remove plenty regard.</h3>
                <p>Read More <i class='bx bxs-right-arrow-alt'></i></p>
              </div>
              <img src={hun} />
            </div>

            <div className='crds'>
              <div className='crdOne'>
                <p>Best Practices</p>
                <h3>Partiality on or continuing particular principles as. </h3>
                <img src={nno} />
              </div>
              <div className='crdOne'>
                <p>Best Practices</p>
                <h3>Village did removed enjoyed explain</h3>
                <img src={nnt} />
              </div>
              <div className='crdOne'>
                <p>Best Practices</p>
                <h3>Wise busy past both park when an ye no. Nay likely her length.</h3>
                <img src={nnh} />
              </div>
            </div>
          </div>
        </section>

        <section className='section8'>
          <div className='container'>
            <h2 className='qw'>Fequently
              asked questions</h2>
            <div className='sec8_title'>
              <ul>
                <li>
                  <div className='po'>
                    <h3>The expense windows adapted sir. Wrong widen drawn.</h3>
                    <i class='bx bx-plus'></i>
                  </div>
                  <p>Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. </p>
                </li>
                <li>
                  <div className='po'>
                    <h3>Six curiosity day assurance bed necessary?</h3>
                    <i class='bx bx-plus'></i>
                  </div>
                </li>
                <li>
                  <div className='po'>
                    <h3>Produce say the ten moments parties?</h3>
                    <i class='bx bx-plus'></i>
                  </div>
                </li>
                <li>
                  <div className='po'>
                    <h3>Simple innate summer fat appear basket his desire joy?</h3>
                    <i class='bx bx-plus'></i>
                  </div>
                </li>
                <li>
                  <div className='po'>
                    <h3>Outward clothes promise at gravity do excited?</h3>
                    <i class='bx bx-plus'></i>
                  </div>
                </li>
              </ul>
              <div className='do'>
                <i class='bx bxs-message'></i>
                <h3>Do you have more questions?</h3>
                <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                <button>Shoot a Direct Mail</button>
              </div>
            </div>

            <div className='dis'>
              <h2>Discover a better way to manage spendings</h2>
              <button>Get Started Now</button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className='container'>
          <div className='foot_title'>
            <ul>
              <li>
                <h3>AR Shakir</h3>
                <p>Finance helps companies manage payments easily.</p>
                <div className='icons'>
                  <i class='bx bxl-linkedin'></i>
                  <i class='bx bxl-messenger' ></i>
                  <i class='bx bxl-twitter' ></i>
                  <i class='bx bx-infinite' ></i>
                </div>
              </li>
              <li>
                <h3>Company</h3>
                <a href='#'>About Us</a>
                <br/>
                <a href='#'>Careers</a>
                <br/>
                <a href='#'>Blog</a>
                <br/>
                <a href='#'>Pricing</a>
              </li>
              <li>
                <h3>Company</h3>
                <a href='#'>Resources</a>
                <br/>
                <a href='#'>Proposal Template</a>
                <br/>
                <a href='#'>Tuturoial</a>
                <br/>
                <a href='#'>How to write a contract</a>
              </li>
              <li>
                <h3>Join Our Newsletter</h3>
                <div className='last'>
                  <input type="text" placeholder='Your email address' />
                  <button>Subscribe</button>
                </div>
                <p>*  Will send you weekly updates for your better
                  finance management.</p>
              </li>
            </ul>
          </div>
          <p className='sub'>Copyright @ AR Shakir 2022. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
