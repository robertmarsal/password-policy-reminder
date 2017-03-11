var data = {
    'www.facebook.com': {
        match: /\/login/,
        policy: 'a combination of at least six numbers, letters and punctuation marks (like ! and &)',
    },
    'accounts.google.com': {
        match: /\/(login|ServiceLogin)/,
        policy: 'at least 8 characters',
    },
    'github.com': {
        match: /\/login/,
        policy: 'at least one lowercase letter, one numeral, and 7 characters',
    },
    'www.netflix.com': {
        match: /\/[a-z]{2}\/login/,
        policy: 'between 4 and 50 characters long',
    }
}
