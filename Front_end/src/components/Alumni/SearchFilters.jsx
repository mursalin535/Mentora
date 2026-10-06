const typeStyles = {
  University: '#6C5CE7',
  School: '#00B894',
  College: '#FF6B35',
  Area: '#FDCB6E',
}

const typeIcons = {
  University: '🏛️',
  School: '🏫',
  College: '🎓',
  Area: '📍',
}

export default function SearchFilters({ filterTypes = [], activeFilterType, onFilterTypeChange, query, onQueryChange }) {
  const activeColor = typeStyles[activeFilterType] || '#6C5CE7'
  const safeFilterTypes = Array.isArray(filterTypes) ? filterTypes : []

  return (
  <>
  </>
  )
}