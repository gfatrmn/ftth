import React from 'react'

function DocContent({ title, sections }) {
  return (
    <div className="doc-content">
      <h2>{title}</h2>
      {sections.map((section, index) => (
        <div key={index}>
          {section.type === 'heading' && <h3>{section.content}</h3>}
          {section.type === 'paragraph' && <p>{section.content}</p>}
          {section.type === 'list' && (
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {section.type === 'ordered-list' && (
            <ol>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          )}
          {section.type === 'code' && <pre>{section.content}</pre>}
          {section.type === 'info' && (
            <div className={`info-box ${section.variant || ''}`}>
              <p>{section.content}</p>
            </div>
          )}
          {section.type === 'table' && (
            <table>
              <thead>
                <tr>
                  {section.headers.map((header, i) => (
                    <th key={i}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  )
}

export default DocContent