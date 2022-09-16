import { useScroll } from '../components/providers/ScrollProvider'

const translationThreshold = 3660

export default function () {
  const { top } = useScroll()

  const translate = top > translationThreshold

  return {
    translate,
    translation: translate ? -(top - translationThreshold) * 0.4 : 0,
  }
}
