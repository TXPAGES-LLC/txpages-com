import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

// Remove edge runtime so we can use Node fs to read the local banner image
export const alt = 'TXPAGES — Texas Digital Marketing Agency'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  // Read the banner from the local public directory — no network request needed
  let bannerSrc: string | null = null
  try {
    const buf = readFileSync(join(process.cwd(), 'public', 'txpages-home-page-banner.png'))
    bannerSrc = `data:image/png;base64,${buf.toString('base64')}`
  } catch {
    // Falls back to navy background if the file is missing
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0f1530',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Banner image on the right half */}
        {bannerSrc && (
          <img
            src={bannerSrc}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '660px',
              height: '630px',
              objectFit: 'cover',
              objectPosition: 'left center',
            }}
          />
        )}

        {/* Dark overlay over the banner so text stays readable */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, #0f1530 40%, rgba(15,21,48,0.72) 65%, rgba(15,21,48,0.30) 100%)',
          }}
        />

        {/* Left column — branding + text */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '56px 64px',
            maxWidth: '620px',
          }}
        >
          {/* Star + wordmark row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <svg width="52" height="50" viewBox="0 0 180 180">
              <polygon
                points="90,20 103.5,64 150,64 113,90 126.5,134 90,108 53.5,134 67,90 30,64 76.5,64"
                fill="#f5a623"
              />
            </svg>
            <span
              style={{
                fontSize: '58px',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-2px',
                lineHeight: 1,
              }}
            >
              TXPAGES
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: '38px',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '16px',
            }}
          >
            Creating Digital Experiences
            <br />
            <span style={{ color: '#2ea3f2' }}>That Drive Growth</span>
          </div>

          {/* Subline */}
          <div
            style={{
              fontSize: '20px',
              color: '#8892b0',
              lineHeight: 1.5,
              marginBottom: '32px',
              maxWidth: '480px',
            }}
          >
            Texas SEO, PPC, Web Design &amp; Local Marketing
          </div>

          {/* Domain pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(46,163,242,0.15)',
              border: '1px solid rgba(46,163,242,0.4)',
              borderRadius: '999px',
              padding: '10px 22px',
              width: 'auto',
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2ea3f2' }} />
            <span style={{ fontSize: '18px', fontWeight: 600, color: '#2ea3f2', letterSpacing: '0.5px' }}>
              txpages.com
            </span>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '5px',
            background: 'linear-gradient(90deg, #f5a623 0%, #2ea3f2 100%)',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
