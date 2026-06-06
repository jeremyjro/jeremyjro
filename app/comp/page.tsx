"use client";

import { useState } from "react";
import styles from "./page.module.css";

const BASE = 200_000;

function fmt(n: number): string {
  if (n >= 1_000_000) return "$" + (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return "$" + Math.round(n / 1_000) + "K";
  return "$" + Math.round(n);
}

function insightText(acvM: number, closeRate: number, attr: number): string {
  const rev   = acvM * 1e6 * (closeRate / 100) * (attr / 100);
  const sqls  = BASE / rev;
  const ratio = rev / BASE;
  if (sqls < 0.5)
    return `A single SQL more than covers the full $200K base — ${fmt(rev)} in attributed revenue against $200K in cost. The role pays for itself on the first close.`;
  if (sqls < 1)
    return `One SQL every ${(1 / sqls).toFixed(1)} months covers the $200K base. Each SQL generates ${fmt(rev)} in attributed revenue — a ${ratio.toFixed(1)}× return on annual base cost.`;
  if (sqls < 3)
    return `${sqls.toFixed(1)} SQLs per year — roughly one every ${Math.round(12 / sqls)} months — covers the full $200K base. Each SQL generates ${fmt(rev)}.`;
  return `${sqls.toFixed(1)} SQLs/year needed at these assumptions. Raise the ACV or close-rate to reflect AfterQuery's actual deal profile.`;
}

export default function CompPage() {
  const [acv, setAcv]             = useState(10);
  const [closeRate, setCloseRate] = useState(15);
  const [attr, setAttr]           = useState(32);

  const revPerSQL  = acv * 1e6 * (closeRate / 100) * (attr / 100);
  const sqlsNeeded = BASE / revPerSQL;
  const ratio      = revPerSQL / BASE;

  return (
    <main className={styles.main}>
      <div className={styles.container}>

        <header className={styles.header}>
          <p className={styles.eyebrow}>AfterQuery · June 2026</p>
          <h1 className={styles.title}>GTM Lead<br />Compensation</h1>
          <p className={styles.subtitle}>Pipeline &amp; LinkedIn Growth Lead · Jeremy Ro</p>
        </header>

        {/* ── Note ── */}
        <div className={styles.noteBlock}>
          <p className={styles.noteHeadline}>I&rsquo;m not a normal SDR.</p>
          <p className={styles.noteBody}>
            Now that I&rsquo;m thinking about it, I think I&rsquo;m underpricing myself 😭 —
            because you&rsquo;re essentially getting:
          </p>
          <ul className={styles.noteList}>
            <li>Content Marketer</li>
            <li>Marketing / Sales Ops</li>
            <li>GTM Engineer</li>
          </ul>
          <p className={styles.noteBody}>
            ...all in one. I&rsquo;ve even built out my own software — a content orchestration
            platform I used for my agency — to drive pipeline from every single AQ employee&rsquo;s
            account. Want to show you a demo on a future call.
          </p>
        </div>

        {/* ── ROI Model ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>ROI Model</h2>

          <div className={styles.sliders}>
            <div className={styles.sliderBlock}>
              <div className={styles.sliderHeader}>
                <span className={styles.sliderLabel}>Deal Size (ACV)</span>
                <span className={styles.sliderValue}>${acv}M</span>
              </div>
              <input type="range" min={1} max={30} step={0.5} value={acv}
                onChange={e => setAcv(parseFloat(e.target.value))} className={styles.range} />
              <div className={styles.sliderEnds}><span>$1M</span><span>$30M</span></div>
            </div>

            <div className={styles.sliderBlock}>
              <div className={styles.sliderHeader}>
                <span className={styles.sliderLabel}>SQL → Close Rate</span>
                <span className={styles.sliderValue}>{closeRate}%</span>
              </div>
              <input type="range" min={5} max={35} step={1} value={closeRate}
                onChange={e => setCloseRate(parseInt(e.target.value))} className={styles.range} />
              <div className={styles.sliderEnds}><span>5%</span><span>35%</span></div>
            </div>

            <div className={styles.sliderBlock}>
              <div className={styles.sliderHeader}>
                <span className={styles.sliderLabel}>Pipeline Attribution</span>
                <span className={styles.sliderValue}>{attr}%</span>
              </div>
              <input type="range" min={10} max={60} step={1} value={attr}
                onChange={e => setAttr(parseInt(e.target.value))} className={styles.range} />
              <div className={styles.sliderEnds}><span>10%</span><span>60%</span></div>
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.resultCard}>
              <p className={styles.resultLabel}>Revenue attributed / SQL</p>
              <p className={styles.resultNum}>{fmt(revPerSQL)}</p>
              <p className={styles.resultSub}>ACV × Close Rate × Attribution</p>
            </div>
            <div className={`${styles.resultCard} ${styles.resultCardAccent}`}>
              <p className={styles.resultLabel}>SQLs to cover $200K base</p>
              <p className={styles.resultNum}>
                {sqlsNeeded < 1 ? sqlsNeeded.toFixed(2) : sqlsNeeded.toFixed(1)}
              </p>
              <p className={styles.resultSub}>per year</p>
            </div>
            <div className={styles.resultCard}>
              <p className={styles.resultLabel}>Payback ratio</p>
              <p className={`${styles.resultNum} ${styles.resultGreen}`}>{ratio.toFixed(1)}×</p>
              <p className={styles.resultSub}>revenue per $1 of base</p>
            </div>
          </div>

          <div className={styles.insightBox}>
            <p>{insightText(acv, closeRate, attr)}</p>
          </div>

          <ul className={styles.assumptions}>
            <li><span>Base salary</span> $200,000 — fixed</li>
            <li><span>ACV</span> average contract value per closed deal (slider)</li>
            <li><span>SQL → Close Rate</span> % of sales-qualified leads that convert to closed-won (slider)</li>
            <li><span>Pipeline Attribution</span> % of closed revenue directly attributable to outbound sourced by this role (slider)</li>
            <li><span>Revenue / SQL</span> ACV × Close Rate × Attribution — expected revenue value of each SQL delivered</li>
            <li><span>SQLs to break even</span> $200,000 ÷ Revenue per SQL — how many SQLs needed annually to fully cover base</li>
            <li><span>Payback ratio</span> Revenue per SQL ÷ $200,000 — dollars of attributed revenue per dollar of base salary</li>
          </ul>
        </section>

        {/* ── Market Benchmarks ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Market Benchmarks</h2>

          <div className={styles.sourceList}>
            <div className={styles.sourceCard}>
              <div className={styles.sourceTop}>
                <p className={styles.sourceName}>Apollo / SyncGTM — GTM Engineer Salary 2026</p>
                <span className={styles.badge}>$132K–$241K</span>
              </div>
              <p className={styles.sourceText}>Analysis of 1,000+ postings shows top-quartile growth-stage SaaS paying $170K–$220K base plus $40–80K in RSUs, with AI-specialized engineers commanding a documented 23% premium. GTM engineering job postings grew 205% YoY in 2025 — supply still lags demand and comp is trending up.</p>
              <div className={styles.sourceLinks}>
                <a href="https://www.apollo.io/blog/gtm-engineer" target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>apollo.io/blog/gtm-engineer ↗</a>
                <a href="https://syncgtm.com/gtm-engineer-salary" target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>syncgtm.com/gtm-engineer-salary ↗</a>
              </div>
            </div>

            <div className={styles.sourceCard}>
              <div className={styles.sourceTop}>
                <p className={styles.sourceName}>OpenAI, Ramp, Stripe, Vercel — Top-Tier Benchmarks</p>
                <span className={styles.badge}>$184K–$252K</span>
              </div>
              <p className={styles.sourceText}>OpenAI posts GTM/Growth Engineering at $250K base; Vercel, Ramp, and Stripe cluster at $184–252K. A $200K ask sits below OpenAI's floor and is supported by AfterQuery's deal complexity and direct pipeline-to-revenue link.</p>
              <div className={styles.sourceLinks}>
                <a href="https://www.levels.fyi/companies/openai/salaries/software-engineer/levels/l5/" target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>levels.fyi — OpenAI ↗</a>
                <a href="https://www.levels.fyi/companies/vercel/salaries/" target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>levels.fyi — Vercel ↗</a>
                <a href="https://www.levels.fyi/companies/ramp/salaries/" target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>levels.fyi — Ramp ↗</a>
              </div>
            </div>

            <div className={styles.sourceCard}>
              <div className={styles.sourceTop}>
                <p className={styles.sourceName}>eMarketer / 2X Marketing — GTM Engineer ROI in B2B</p>
                <span className={styles.badge}>$200K+ justified</span>
              </div>
              <p className={styles.sourceText}>Verkada (2025) automated 80% of SDR workflows with GTM engineers, boosting meetings from ~20 to 80–100 per rep per month. For $5–30M ACV deals, a single attributed close generates 25–150× the annual cost of the role.</p>
              <div className={styles.sourceLinks}>
                <a href="https://www.emarketer.com/topics/category/b2b" target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>emarketer.com ↗</a>
                <a href="https://2x.marketing/resources" target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>2x.marketing/resources ↗</a>
              </div>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>Jeremy Ro · Prepared June 2026</p>
          <p>Sources: Apollo, SyncGTM, eMarketer, 2X Marketing, ALLMO, SiliconANGLE</p>
        </footer>

      </div>
    </main>
  );
}
