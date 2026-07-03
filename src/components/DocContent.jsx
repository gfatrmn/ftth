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
                typeof item === 'object' && item.children ? (
                  <li key={i} style={{ marginBottom: '8px' }}>
                    <span style={{ color: 'inherit' }}>{item.label}</span>
                    <ul style={{ paddingLeft: '24px', marginTop: '4px', marginBottom: '4px' }}>
                      {item.children.map((child, j) => (
                        <li key={j}>{child}</li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={i}>{item}</li>
                )
              ))}
            </ul>
          )}
          {section.type === 'nested-list' && (
            <ul style={{ paddingLeft: '32px', listStyle: 'none' }}>
              {section.items.map((item, i) => (
                <li key={i} style={{ marginBottom: '8px' }}>
                  <strong>{item.label}</strong> {item.content}
                </li>
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