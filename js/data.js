var data = {
    'www.facebook.com': {
        match: /\/login/,
        policy: 'a combination of at least six numbers, letters and punctuation marks (like ! and &)',
    },
    'accounts.google.com': {
        match: /\/(login|ServiceLogin)/,
        policy: 'at least 8 characters',
    },
}
