import React from 'react';
import Navigation from '../Navbar';
import Footer from '../Footer';

const EightKsecAI = () => {
  const styles = `
    :root{
      --bg:#0b0f17;
      --card:#111827;
      --muted:#94a3b8;
      --text:#e5e7eb;
      --border:rgba(255,255,255,.08);
      --shadow: 0 12px 30px rgba(0,0,0,.45);
      --radius:16px;
    }
    *{box-sizing:border-box}
    body{
      margin:0;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
      background: radial-gradient(1200px 800px at 15% 0%, rgba(168,85,247,.18), transparent 55%),
                  radial-gradient(1000px 700px at 80% 10%, rgba(59,130,246,.14), transparent 55%),
                  var(--bg);
      color: var(--text);
    }
    .wrap{
      max-width:1100px;
      margin:0 auto;
      padding:40px 18px 60px;
    }
    header{
      display:flex;
      flex-direction:column;
      gap:10px;
      margin-bottom:22px;
    }
    .kicker{
      color:var(--muted);
      font-size:14px;
      letter-spacing:.06em;
      text-transform:uppercase;
    }
    h1{
      margin:0;
      font-size:28px;
      line-height:1.2;
    }
    .sub{
      color:var(--muted);
      font-size:15px;
      line-height:1.6;
      max-width:80ch;
      margin:0;
    }
    .meta{
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      margin-top:6px;
    }
    .pill{
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding:8px 12px;
      border:1px solid var(--border);
      border-radius:999px;
      background:rgba(255,255,255,.03);
      color:var(--muted);
      font-size:13px;
    }
    .pill b{color:var(--text); font-weight:600}
    .grid{
      margin-top:22px;
      display:grid;
      grid-template-columns: repeat(2, 1fr); /* 2x5 desktop */
      gap:14px;
    }
    @media (max-width: 860px){
      .grid{grid-template-columns: 1fr;} /* mobile */
      h1{font-size:24px}
    }
    .card{
      background:rgba(255,255,255,.02);
      border:1px solid var(--border);
      border-radius:var(--radius);
      overflow:hidden;
      box-shadow: var(--shadow);
      transition: transform .12s ease, border-color .12s ease;
    }
    .card:hover{
      transform: translateY(-2px);
      border-color: rgba(255,255,255,.14);
    }
    .thumb{
      position:relative;
      aspect-ratio: 16 / 9;
      background: linear-gradient(135deg, rgba(168,85,247,.16), rgba(59,130,246,.10));
      display:flex;
      align-items:center;
      justify-content:center;
      overflow:hidden;
    }
    .thumb img{
      width:100%;
      height:100%;
      object-fit:cover;
      display:block;
      filter:saturate(1.05);
    }
    .fav{
      position:absolute;
      top:10px;
      left:10px;
      padding:6px 10px;
      border-radius:999px;
      font-size:12px;
      background:rgba(168,85,247,.20);
      border:1px solid rgba(168,85,247,.35);
      color:var(--text);
      backdrop-filter: blur(8px);
    }
    .body{
      padding:14px 14px 16px;
      display:flex;
      flex-direction:column;
      gap:8px;
    }
    .title{
      font-weight:650;
      margin:0;
      font-size:15px;
      color:#a78bfa;
    }
    .desc{
      margin:0;
      color:var(--muted);
      font-size:13px;
      line-height:1.55;
    }
    .actions{
      display:flex;
      gap:10px;
      margin-top:4px;
    }
    a.btn{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:8px;
      padding:10px 12px;
      border-radius:12px;
      border:1px solid var(--border);
      background:rgba(255,255,255,.03);
      color:var(--text);
      text-decoration:none;
      font-size:13px;
      width:fit-content;
    }
    a.btn:hover{
      border-color: rgba(255,255,255,.18);
      background:rgba(255,255,255,.05);
    }
    .foot{
      margin-top:26px;
      padding-top:18px;
      border-top:1px solid var(--border);
      color:var(--muted);
      font-size:13px;
      line-height:1.65;
    }
    .foot code{
      color:var(--text);
      background:rgba(255,255,255,.06);
      padding:2px 6px;
      border-radius:8px;
      border:1px solid var(--border);
    }
  `;

  return (
    <>
      <Navigation />
      <style>{styles}</style>
      <div className="wrap">
        <header>
          <div className="kicker">8kSec • AI Security Hands-on Track</div>
          <h1>AI &amp; LLM Exploitation Challenges (All 10 Labs Completed)</h1>
          <p className="sub">
            A practical track covering prompt-level exploitation and model-level threats (evasion, backdoor analysis), plus supply-chain risk in AI/LLM pipelines.
          </p>

          <div className="meta">
            <span className="pill"><b>Issuer:</b> 8kSec</span>
            <span className="pill"><b>Date:</b> Jan/Feb 2026</span>
            <span className="pill"><b>Focus:</b> AI Red Teaming • Model Security • LLM Exploitation</span>
          </div>
        </header>

        <section className="grid">

          {/* 1 */}
          <article className="card">
            <div className="thumb">
              <img src="/images/AI-k8sec/Ultimate AI Essay Grader Challenge.png" alt="Ultimate AI Essay Grader certificate" loading="lazy" />
            </div>
            <div className="body">
              <p className="title">1) Ultimate AI Essay Grader</p>
              <div className="actions">
                <a className="btn" href="/images/AI-k8sec/Ultimate AI Essay Grader Challenge.png" target="_blank" rel="noopener">View image</a>
              </div>
            </div>
          </article>

          {/* 2 */}
          <article className="card">
            <div className="thumb">
              <img src="/images/AI-k8sec/Smart Workspace Assistant Challenge.png" alt="Smart Workspace Assistant certificate" loading="lazy" />
            </div>
            <div className="body">
              <p className="title">2) Smart Workspace Assistant</p>
              <div className="actions">
                <a className="btn" href="/images/AI-k8sec/Smart Workspace Assistant Challenge.png" target="_blank" rel="noopener">View image</a>
              </div>
            </div>
          </article>

          {/* 3 */}
          <article className="card">
            <div className="thumb">
              <img src="/images/AI-k8sec/Secure Vault Challenge.png" alt="Secure Vault certificate" loading="lazy" />
            </div>
            <div className="body">
              <p className="title">3) Secure Vault</p>
              <div className="actions">
                <a className="btn" href="/images/AI-k8sec/Secure Vault Challenge.png" target="_blank" rel="noopener">View image</a>
              </div>
            </div>
          </article>

          {/* 4 */}
          <article className="card">
            <div className="thumb">
              <img src="/images/AI-k8sec/Password Bot Challenge.png" alt="Password Bot certificate" loading="lazy" />
            </div>
            <div className="body">
              <p className="title">4) breakup Password Bot</p>
              <div className="actions">
                <a className="btn" href="/images/AI-k8sec/Password Bot Challenge.png" target="_blank" rel="noopener">View image</a>
              </div>
            </div>
          </article>

          {/* 5 */}
          <article className="card">
            <div className="thumb">
              <img src="/images/AI-k8sec/Meeting MCP.png" alt="Meetings MCP certificate" loading="lazy" />
            </div>
            <div className="body">
              <p className="title">5) Meetings MCP</p>
              <div className="actions">
                <a className="btn" href="/images/AI-k8sec/Meeting MCP.png" target="_blank" rel="noopener">View image</a>
              </div>
            </div>
          </article>

          {/* 6 */}
          <article className="card">
            <div className="thumb">
              <img src="/images/AI-k8sec/Intern Filter.png" alt="Intern Filter certificate" loading="lazy" />
            </div>
            <div className="body">
              <p className="title">6) Intern Filter</p>
              <div className="actions">
                <a className="btn" href="/images/AI-k8sec/Intern Filter.png" target="_blank" rel="noopener">View image</a>
              </div>
            </div>
          </article>

          {/* 7 (placeholder for Neural Hunter - not ready yet) */}
          <article className="card">
            <div className="thumb">
              <div className="fav">★ Favorite</div>
              {/* Replace the placeholder below with: <img src="/images/AI-k8sec/Neural Hunter.png" ...> when ready */}
              <div style={{padding: '18px', textAlign: 'center', color: 'rgba(229,231,235,.9)'}}>
                <div style={{fontWeight: '700', fontSize: '14px', marginBottom: '6px'}}>Neural Hunter</div>
                <div style={{color: 'rgba(148,163,184,.95)', fontSize: '13px', lineHeight: '1.5'}}>
                  Placeholder (image not added yet).<br />
                  Model backdoor identification &amp; behavioral analysis.
                </div>
              </div>
            </div>
            <div className="body">
              <p className="title">7) Neural Hunter</p>
              <div className="actions">
                {/* When you have the file, change to an <a> tag with href="/images/AI-k8sec/Neural Hunter.png" */}
                <button className="btn" onClick={() => alert('Add Neural Hunter.png first, then update this link.')}>View image</button>
              </div>
            </div>
          </article>

          {/* 8 */}
          <article className="card">
            <div className="thumb">
              <img src="/images/AI-k8sec/Supply Chain Sabotage.png" alt="Supply Chain Sabotage certificate" loading="lazy" />
            </div>
            <div className="body">
              <p className="title">8) Supply Chain Sabotage</p>
              <div className="actions">
                <a className="btn" href="/images/AI-k8sec/Supply Chain Sabotage.png" target="_blank" rel="noopener">View image</a>
              </div>
            </div>
          </article>

          {/* 9 */}
          <article className="card">
            <div className="thumb">
              <img src="/images/AI-k8sec/Rogue Skills.png" alt="Rogue Skills certificate" loading="lazy" />
            </div>
            <div className="body">
              <p className="title">9) Rogue Skills</p>
              <div className="actions">
                <a className="btn" href="/images/AI-k8sec/Rogue Skills.png" target="_blank" rel="noopener">View image</a>
              </div>
            </div>
          </article>

          {/* 10 */}
          <article className="card">
            <div className="thumb">
              <img src="/images/AI-k8sec/Identity Crisis.png" alt="Identity Crisis certificate" loading="lazy" />
            </div>
            <div className="body">
              <p className="title">10) Identity Crisis</p>
              <div className="actions">
                <a className="btn" href="/images/AI-k8sec/Identity Crisis.png" target="_blank" rel="noopener">View image</a>
              </div>
            </div>
          </article>

        </section>
      </div>
      <Footer />
    </>
  );
};

export default EightKsecAI;
