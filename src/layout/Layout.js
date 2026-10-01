import React, { useEffect, useRef } from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Contact from '../components/Contact/Contact'
import { Container, ScrollProgress } from './LayoutStyles'

export const Layout = ({children}) => {
  const progressRef = useRef(null)

  useEffect(() => {
    let animationFrame
    let observer
    let mutationObserver

    const updateProgress = () => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = scrollableHeight > 0
          ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight))
          : 0

        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${progress})`
        }
      })
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    updateProgress()

    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

      const observeReveals = (root) => {
        if (root.nodeType === Node.ELEMENT_NODE && root.matches('[data-reveal]')) {
          observer.observe(root)
        }
        if (typeof root.querySelectorAll !== 'function') return
        root.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
      }

      document.documentElement.classList.add('motion-ready')
      observeReveals(document)
      mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => mutation.addedNodes.forEach(observeReveals))
      })
      mutationObserver.observe(document.querySelector('main'), { childList: true, subtree: true })
    }

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      observer?.disconnect()
      mutationObserver?.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  return (
    <>
    <ScrollProgress ref={progressRef} aria-hidden="true" />
    <Container>
     <Header/>
     <main>{children}</main> 
    <Contact />
     <Footer/>
    </Container>
    </>
  )
}
