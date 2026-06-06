export const metadata = {
  title: "GTM Comp — Jeremy Ro",
  description: "Compensation justification for a senior BDR / GTM hire.",
};

export default function CompPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #f7f6f2;
          color: #111110;
          font-family: 'DM Sans', system-ui, sans-serif;
        }

        .page {
          max-width: 760px;
          margin: 0 auto;
          padding: 64px 32px 96px;
        }

        .eyebrow {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #8a8880;
          margin-bottom: 16px;
        }

        h1 {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 48px;
          line-height: 1.1;
          letter-spacing: -1px;
          color: #111110;
          margin-bottom: 12px;
        }

        .lede {
          font-size: 18px;
          color: #555550;
          line-height: 1.6;
          max-width: 600px;
          margin-bottom: 56px;
          font-weight: 300;
        }

        hr {
          border: none;
          border-top: 1px solid #e2e0d8;
          margin: 48px 0;
        }

        h2 {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 26px;
          letter-spacing: -0.3px;
          margin-bottom: 20px;
          color: #111110;
        }

        p {
          font-size: 15px;
          line-height: 1.7;
          color: #444440;
          margin-bottom: 16px;
        }

        .stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin: 28px 0;
        }

        .stat-card {
          background: #fff;
          border: 1px solid #e2e0d8;
          border-radius: 8px;
          padding: 20px 18px;
        }

        .stat-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #8a8880;
          margin-bottom: 8px;
        }

        .stat-number {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 32px;
          letter-spacing: -0.5px;
          line-height: 1;
          color: #111110;
        }

        .stat-sub {
          font-size: 11px;
          color: #b8b6ae;
          margin-top: 4px;
        }

        .stat-card.dark {
          background: #111110;
          border-color: #111110;
        }
        .stat-card.dark .stat-label { color: #555550; }
        .stat-card.dark .stat-number { color: #fff; }
        .stat-card.dark .stat-sub { color: #555550; }

        .row-table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }

        .row-table th {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #8a8880;
          text-align: left;
          padding: 8px 0;
          border-bottom: 1px solid #e2e0d8;
        }

        .row-table td {
          font-size: 13px;
          color: #444440;
          padding: 12px 0;
          border-bottom: 1px solid #f0efe9;
          vertical-align: top;
        }

        .row-table td:first-child {
          font-weight: 500;
          color: #111110;
          width: 40%;
        }

        .tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          padding: 2px 8px;
          border-radius: 20px;
          border: 1px solid;
          margin-right: 4px;
        }

        .tag.good { color: #166534; border-color: #bbf7d0; background: #f0fdf4; }
        .tag.neutral { color: #555550; border-color: #e2e0d8; background: #fff; }

        blockquote {
          border-left: 2px solid #e2e0d8;
          padding-left: 16px;
          margin: 20px 0;
          font-style: italic;
          color: #555550;
          font-size: 15px;
          line-height: 1.6;
        }

        .math-block {
          background: #fff;
          border: 1px solid #e2e0d8;
          border-radius: 8px;
          padding: 24px;
          margin: 24px 0;
          font-family: 'DM Sans', monospace;
          font-size: 13px;
          line-height: 2;
          color: #444440;
        }

        .math-block .result {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 22px;
          color: #111110;
          border-top: 1px solid #e2e0d8;
          margin-top: 8px;
          padding-top: 12px;
        }

        .footnote {
          font-size: 12px;
          color: #b8b6ae;
          margin-top: 48px;
          line-height: 1.6;
        }

        @media (max-width: 600px) {
          h1 { font-size: 36px; }
          .stat-grid { grid-template-columns: 1fr 1fr; }
          .stat-grid .stat-card:last-child { grid-column: span 2; }
        }
      `}</style>

      <div className="page">

        <div className="eyebrow">GTM Compensation — Jeremy Ro</div>
        <h1>What a great BDR is worth at AfterQuery</h1>
        <p className="lede">
          A data-driven case for the compensation structure being negotiated —
          grounded in AfterQuery's unit economics, deal sizes, and the track record I bring.
        </p>

        {/* ── Track Record ── */}
        <h2>Track Record</h2>
        <p>
          Over 12 months as the sole BD hire at Virio (employee #2), I built and ran the
          full outbound engine — content, DMs, signal-based prospecting — from $0 to $3M ARR.
        </p>

        <div className="stat-grid">
          <div className="stat-card dark">
            <div className="stat-label">ARR Growth</div>
            <div className="stat-number">$0 → $3M</div>
            <div className="stat-sub">12 months, sole BD hire</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Revenue Sourced</div>
            <div className="stat-number">~$1M</div>
            <div className="stat-sub">Directly closed or pipeline-sourced</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Daily Outreach</div>
            <div className="stat-number">20–30</div>
            <div className="stat-sub">Personalised LinkedIn DMs/day</div>
          </div>
        </div>

        <p>
          The outbound motion I ran at Virio is structurally identical to what AfterQuery needs —
          signal-based targeting, LinkedIn outbound, converting cold contacts to qualified meetings.
          The product is different. The system is the same.
        </p>

        <hr />

        {/* ── AfterQuery Unit Economics ── */}
        <h2>AfterQuery's Unit Economics Make This Simple</h2>
        <p>
          Most BDR comp debates happen at companies with $30k ACVs. AfterQuery is different.
          Your average contract is in the millions. One message can open a $20M conversation.
          The math on what a great BDR is worth is therefore completely different.
        </p>

        <div className="math-block">
          <div>DMs per day: <strong>20</strong> × 6 days = <strong>120/week</strong></div>
          <div>Reply rate (warm outbound): <strong>20%</strong> → 24 replies/week</div>
          <div>Meeting booked rate: <strong>75%</strong> → 18 meetings/week</div>
          <div>Show rate: <strong>85%</strong> → ~62 meetings/month held</div>
          <div>Qualified lead rate: <strong>30%</strong> → ~19 SQLs/month</div>
          <div style={{marginTop: 8, color: '#8a8880', fontSize: 12}}>Conservative avg contract: $2M pilot → full contract</div>
          <div className="result">19 SQLs × $2M avg = <strong>$38M pipeline / month</strong></div>
        </div>

        <p>
          Even at a 10% close rate on that pipeline, that's <strong>$3.8M in closed revenue per month</strong> from
          outbound that didn't exist before. Against a $200k annual base, the ROI multiple is not a question.
        </p>

        <blockquote>
          "He sent like one message from someone else's account and the person said 'pull up to our office' —
          the guy wanted to buy $20M of data. Can we start with a $2M pilot?"
          <br /><br />
          — Spencer Mateega, AfterQuery co-founder, describing their current inbound conversion
        </blockquote>

        <p>
          That story describes an <em>untrained intern</em> sending <em>one message</em>.
          A systematic, experienced outbound operator running 20 personalised messages per day —
          with your social proof, your product, your client list — is a qualitatively different input.
        </p>

        <hr />

        {/* ── The X Opportunity ── */}
        <h2>The X / Twitter Opportunity Is Untapped</h2>
        <p>
          LinkedIn is already working at AfterQuery. X is where researchers live —
          and it's completely unaddressed. This is an asymmetric unlock: the audience is there,
          the product credibility is there, the playbook just needs to be built.
        </p>

        <div className="stat-grid">
          <div className="stat-card">
            <div className="stat-label">LinkedIn</div>
            <div className="stat-number">Working</div>
            <div className="stat-sub">System exists, needs scale</div>
          </div>
          <div className="stat-card dark">
            <div className="stat-label">X / Twitter</div>
            <div className="stat-number">0%</div>
            <div className="stat-sub">Untapped. Researchers live here.</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Content Presence</div>
            <div className="stat-number">Dormant</div>
            <div className="stat-sub">Last intern left for Goldman</div>
          </div>
        </div>

        <p>
          Building the X outbound system and reviving the content presence are both in scope for
          this role — and both have compounding returns. Neither requires headcount beyond this hire to start.
        </p>

        <hr />

        {/* ── Market Benchmark ── */}
        <h2>Market Benchmark</h2>
        <p>
          Standard BDR comp at a Series A startup is $55–80k. This is not a standard BDR role —
          it's a senior GTM operator being hired to build the function from scratch at a
          company with $100M+ ARR and 30% monthly compounding growth.
        </p>

        <table className="row-table">
          <thead>
            <tr>
              <th>Role Type</th>
              <th>Typical Base</th>
              <th>Applicable?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Standard SDR (Series A startup)</td>
              <td>$55–70k</td>
              <td><span className="tag neutral">Not this role</span></td>
            </tr>
            <tr>
              <td>Senior BDR / first GTM hire</td>
              <td>$90–130k</td>
              <td><span className="tag neutral">Closer, but underestimates scope</span></td>
            </tr>
            <tr>
              <td>Head of BD / GTM lead (early startup)</td>
              <td>$150–200k</td>
              <td><span className="tag good">This is the right comp tier</span></td>
            </tr>
          </tbody>
        </table>

        <p>
          The ask is $200k base — at the top of the GTM lead range, justified by:
          the deal sizes involved, the lack of a playbook (building from scratch),
          the content + outbound scope, and the direct line to Spencer and Jake.
        </p>

        <hr />

        {/* ── The Package ── */}
        <h2>The Package Being Discussed</h2>

        <table className="row-table">
          <thead>
            <tr>
              <th>Component</th>
              <th>Amount</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Base salary</td>
              <td>$200,000</td>
              <td>Proposed</td>
            </tr>
            <tr>
              <td>Equity</td>
              <td>$200,000</td>
              <td>4yr vest / 1yr cliff — valuation basis TBD</td>
            </tr>
            <tr>
              <td>Performance bonus</td>
              <td>TBD</td>
              <td>% of pipeline / contracts sourced — aligns incentives</td>
            </tr>
            <tr>
              <td>Sign-on bonus</td>
              <td>TBD</td>
              <td>Bridges unvested equity from prior role</td>
            </tr>
            <tr>
              <td>Benefits / perks</td>
              <td>TBD</td>
              <td>Housing, wellness, travel, ramp card</td>
            </tr>
          </tbody>
        </table>

        <p>
          The performance component is where the real alignment happens.
          I want to be compensated based on what I generate — if the pipeline math above
          plays out, both sides win significantly. The base covers the floor; the performance
          comp rewards the output.
        </p>

        <p className="footnote">
          Jeremy Ro · jeremyro.com · jjeremyro@gmail.com · (415) 791-6887
        </p>

      </div>
    </>
  );
}
