import { parseISO, format } from 'date-fns'
import React from 'react'
import PropTypes from 'prop-types'

export default function Date ({ dateString }) {
    const date = parseISO(dateString) // add one line space here to separate it from the component being rendered
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

Date.propTypes = {
    dateString: PropTypes.string
}
