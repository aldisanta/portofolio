
import { IconLink } from '@/components/IconLink'

function LinkedInIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M1.12 0h13.08a1.12 1.12 0 0 1 1.12 1.12v13.08a1.12 1.12 0 0 1-1.12 1.12H1.12A1.12 1.12 0 0 1 0 14.18V1.12A1.12 1.12 0 0 1 1.12 0zm1.12 13.08h2.18V5.88H2.24zM4.66 3.36a1.4 1.4 0 1 0-2.8 0 1.4 1.4 0 0 0 2.8 0zm1.24 2.34v7.18h2.18v-3.04c0-1.16.42-2.24 1.46-2.24 0.74 0 1.04 0.68 1.04 2.24v3.04h2.18v-3.46c0-2.88-0.56-4.56-2.78-4.56-1.14 0-1.95 0.56-2.24 1.12V5.88z"/>
    </svg>
  )
}

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M9.51762 6.77491L15.3459 0H13.9648L8.90409 5.88256L4.86212 0H0.200195L6.31244 8.89547L0.200195 16H1.58139L6.92562 9.78782L11.1942 16H15.8562L9.51728 6.77491H9.51762ZM7.62588 8.97384L7.00658 8.08805L2.07905 1.03974H4.20049L8.17706 6.72795L8.79636 7.61374L13.9654 15.0075H11.844L7.62588 8.97418V8.97384Z" />
    </svg>
  )
}

export function Intro() {
  return (
    <>
      <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
        Transforming Ideas{' '}
        <span className="text-sky-300">into Functional Code</span>
      </h1>
      <p className="mt-4 text-sm/6 text-gray-300">
        Hey there! I’m a software engineer who loves turning complex problems into elegant solutions. 
        Whether it’s crafting sleek UIs, optimizing performance, or diving deep into backend magic, I thrive on creating seamless digital experiences.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink href="http://linkedin.com/in/aldi-dipasanta/" icon={LinkedInIcon} className="flex-none">
          LinkedIn
        </IconLink>
        <IconLink href="http://github.com/aldisanta" icon={GitHubIcon} className="flex-none">
          GitHub
        </IconLink>
      </div>
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      By{' '}
      <IconLink href="https://x.com/aldisanta" icon={XIcon} compact>
        aldisanta
      </IconLink>
    </p>
  )
}
