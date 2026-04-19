import { lazy, Suspense, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Calendar, ChevronDown, List, Map as MapIcon } from 'lucide-react'
import journeyRaw from '../data/journey.json'
import type { JourneyEntry } from '../types/journey'
import FloatingElements from '../components/FloatingElements'

const JourneyMap = lazy(() => import('../components/JourneyMap'))

const entries = journeyRaw as JourneyEntry[]

function yearFromDate(dateStr: string): number | null {
  const m = dateStr.match(/\b(19|20)\d{2}\b/)
  return m ? parseInt(m[0], 10) : null
}

function entryKey(e: JourneyEntry) {
  return `${e.place}-${e.date}`
}

const Explore = () => {
  const [yearFilter, setYearFilter] = useState<number | 'all'>('all')
  const [expandedKey, setExpandedKey] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'timeline' | 'map'>('timeline')

  const years = useMemo(() => {
    const ys = new Set<number>()
    entries.forEach((e) => {
      const y = yearFromDate(e.date)
      if (y !== null) ys.add(y)
    })
    return [...ys].sort((a, b) => b - a)
  }, [])

  const filtered = useMemo(() => {
    let list = [...entries]
    if (yearFilter !== 'all') {
      list = list.filter((e) => yearFromDate(e.date) === yearFilter)
    }
    list.sort((a, b) => {
      const ya = yearFromDate(a.date) ?? 0
      const yb = yearFromDate(b.date) ?? 0
      if (ya !== yb) return yb - ya
      return a.place.localeCompare(b.place)
    })
    return list
  }, [yearFilter])

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 pt-24 pb-16">
      <FloatingElements />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-50/40 via-transparent to-purple-50/40 dark:from-primary-950/30 dark:to-purple-950/20" />

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <Link
              to="/"
              className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400"
            >
              <ArrowLeft size={16} aria-hidden />
              Back to portfolio
            </Link>
            <h1 className="text-3xl font-bold tracking-tight text-dark-900 dark:text-white sm:text-4xl">
              My Journey
            </h1>
            <p className="mt-2 max-w-xl text-dark-600 dark:text-dark-300">
              A timeline of places, memories, and moments — personal travel notes alongside my work.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div
              className="inline-flex rounded-xl border border-gray-200 bg-gray-50/80 p-1 dark:border-dark-600 dark:bg-dark-800/80"
              role="group"
              aria-label="View mode"
            >
              <button
                type="button"
                onClick={() => setViewMode('timeline')}
                className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  viewMode === 'timeline'
                    ? 'bg-white text-primary-600 shadow-sm dark:bg-dark-700 dark:text-primary-400'
                    : 'text-dark-600 hover:text-dark-900 dark:text-dark-300 dark:hover:text-white'
                }`}
              >
                <List size={16} aria-hidden />
                Timeline
              </button>
              <button
                type="button"
                onClick={() => setViewMode('map')}
                className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  viewMode === 'map'
                    ? 'bg-white text-primary-600 shadow-sm dark:bg-dark-700 dark:text-primary-400'
                    : 'text-dark-600 hover:text-dark-900 dark:text-dark-300 dark:hover:text-white'
                }`}
              >
                <MapIcon size={16} aria-hidden />
                Map
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter by year">
            <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-dark-500 dark:text-dark-400">
              Year
            </span>
            <button
              type="button"
              onClick={() => setYearFilter('all')}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                yearFilter === 'all'
                  ? 'bg-primary-600 text-white dark:bg-primary-500'
                  : 'bg-gray-100 text-dark-700 hover:bg-gray-200 dark:bg-dark-700 dark:text-dark-200 dark:hover:bg-dark-600'
              }`}
            >
              All
            </button>
            {years.map((y) => (
              <button
                key={y}
                type="button"
                onClick={() => setYearFilter(y)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  yearFilter === y
                    ? 'bg-primary-600 text-white dark:bg-primary-500'
                    : 'bg-gray-100 text-dark-700 hover:bg-gray-200 dark:bg-dark-700 dark:text-dark-200 dark:hover:bg-dark-600'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
          <p className="text-sm text-dark-500 dark:text-dark-400">
            {filtered.length} {filtered.length === 1 ? 'place' : 'places'}
            {yearFilter !== 'all' ? ` · ${yearFilter}` : ''}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {viewMode === 'map' ? (
            <motion.div
              key="map"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <Suspense
                fallback={
                  <div className="flex h-[min(420px,70vh)] w-full items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 dark:border-dark-600 dark:bg-dark-800">
                    <span className="text-sm text-dark-500 dark:text-dark-400">Loading map…</span>
                  </div>
                }
              >
                <JourneyMap entries={filtered} />
              </Suspense>
            </motion.div>
          ) : (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              <div
                className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-primary-500/60 via-primary-400/25 to-transparent sm:left-1/2 sm:-translate-x-1/2"
                aria-hidden
              />

              <ul className="relative space-y-10 sm:space-y-14">
                {filtered.map((entry, index) => {
                  const key = entryKey(entry)
                  const expanded = expandedKey === key
                  const isLeft = index % 2 === 0

                  return (
                    <motion.li
                      key={key}
                      layout
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.36) }}
                      className={`relative flex flex-col sm:flex-row sm:items-stretch ${
                        isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                      }`}
                    >
                      <div
                        className="absolute left-0 top-6 z-[1] flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary-500 bg-white shadow-sm dark:border-primary-400 dark:bg-dark-800 sm:left-1/2 sm:-translate-x-1/2"
                        aria-hidden
                      >
                        <span className="h-2 w-2 rounded-full bg-primary-500 dark:bg-primary-400" />
                      </div>

                      <div className="hidden w-1/2 sm:block" />

                      <div className="pl-10 sm:w-1/2 sm:pl-0 sm:pr-0">
                        <motion.article
                          layout
                          whileHover={{ y: -2 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                          className={`overflow-hidden rounded-2xl border border-gray-100 bg-white/90 shadow-sm backdrop-blur-sm dark:border-dark-600 dark:bg-dark-800/90 ${
                            isLeft ? 'sm:mr-8 sm:text-right' : 'sm:ml-8 sm:text-left'
                          } ${expanded ? 'ring-2 ring-primary-500/30 dark:ring-primary-400/25' : ''}`}
                        >
                          <button
                            type="button"
                            onClick={() => setExpandedKey(expanded ? null : key)}
                            className="flex w-full flex-col text-left sm:block"
                            aria-expanded={expanded}
                          >
                            {entry.image && (
                              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 dark:bg-dark-700">
                                <img
                                  src={entry.image}
                                  alt=""
                                  className={`h-full w-full object-cover transition-all duration-500 ${
                                    expanded ? 'scale-100' : 'scale-105'
                                  }`}
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div
                                  className={`absolute bottom-0 p-4 text-white ${
                                    isLeft ? 'right-0 text-right sm:left-auto sm:right-0' : 'left-0 sm:text-left'
                                  }`}
                                >
                                  <h2 className="text-xl font-bold drop-shadow-sm">{entry.place}</h2>
                                  <div className="mt-1 flex items-center gap-1.5 text-sm text-white/90">
                                    <Calendar size={14} className="opacity-90" aria-hidden />
                                    {entry.date}
                                  </div>
                                </div>
                              </div>
                            )}

                            <div className="p-5 sm:p-6">
                              {!entry.image && (
                                <>
                                  <h2 className="text-xl font-bold text-dark-900 dark:text-white">{entry.place}</h2>
                                  <div className="mt-1 flex items-center gap-1.5 text-sm text-dark-500 dark:text-dark-400">
                                    <Calendar size={14} aria-hidden />
                                    {entry.date}
                                  </div>
                                </>
                              )}

                              <motion.div
                                layout
                                className={`mt-3 text-dark-600 dark:text-dark-300 ${
                                  expanded ? '' : 'line-clamp-3'
                                } ${entry.image ? 'text-left' : ''}`}
                              >
                                <p className="text-sm leading-relaxed sm:text-[15px]">{entry.description}</p>
                              </motion.div>

                              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary-600 dark:text-primary-400">
                                <span>{expanded ? 'Show less' : 'More'}</span>
                                <motion.span
                                  animate={{ rotate: expanded ? 180 : 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <ChevronDown size={14} aria-hidden />
                                </motion.span>
                              </div>
                            </div>
                          </button>
                        </motion.article>
                      </div>
                    </motion.li>
                  )
                })}
              </ul>

              {filtered.length === 0 && (
                <p className="py-16 text-center text-dark-500 dark:text-dark-400">
                  No journeys for this year yet.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Explore
