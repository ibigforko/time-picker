module.exports = {
    content: [
      './*.{ts,vue}'
    ],
    darkMode: "class",
    theme: {
      extend: {
        zIndex: {
          '5': '5',
          '35': '35'
        },
        transitionProperty: {
          'width': 'width'
        },
        textDecoration: [
          'active'
        ],
        minWidth: {
          'kanban': '28rem'
        },
        fontSize: {
          xs: '0.65rem',
          val: '0.75rem',
        },
        fontFamily: {
          'logo': [
            'Righteous',
          ],
          'sans': [
            'Inter', 
            'ui-sans-serif', 
            'system-ui', 
            '-apple-system', 
            'system-ui', 
            'Segoe UI', 
            'Roboto', 
            'Helvetica Neue', 
            'Arial', 
            'Noto Sans', 
            'sans-serif', 
            'Apple Color Emoji', 
            'Segoe UI Emoji', 
            'Segoe UI Symbol', 
            'Noto Color Emoji'
          ],
          'body': [
            'Inter', 
            'ui-sans-serif', 
            'system-ui', 
            '-apple-system', 
            'system-ui', 
            'Segoe UI', 
            'Roboto', 
            'Helvetica Neue', 
            'Arial', 
            'Noto Sans', 
            'sans-serif', 
            'Apple Color Emoji', 
            'Segoe UI Emoji', 
            'Segoe UI Symbol', 
            'Noto Color Emoji'
          ],
          'mono': [
            'ui-monospace', 
            'SFMono-Regular', 
            'Menlo', 
            'Monaco', 
            'Consolas', 
            'Liberation Mono', 
            'Courier New', 
            'monospace'
          ]
        }
      },
    },
  }